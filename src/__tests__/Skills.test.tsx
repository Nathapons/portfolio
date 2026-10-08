import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'

import Skills from '@/pages/Skills'
import skillData from '@/data/Skills.json'

const LEVEL_PERCENT: Record<string, number> = {
  Expert: 95,
  Advanced: 80,
  Intermediate: 60,
  Beginner: 30,
}

describe('Skills page', () => {
  it('renders the page title', () => {
    render(<Skills />)
    expect(screen.getByRole('heading', { name: 'Skills' })).toBeInTheDocument()
  })

  it('renders each category title', () => {
    render(<Skills />)
    skillData.forEach(({ category }) => {
      expect(screen.getByText(category)).toBeInTheDocument()
    })
  })

  it('renders each skill with its note', () => {
    render(<Skills />)
    skillData.forEach(({ skills }) => {
      skills.forEach((skill) => {
        expect(screen.getAllByText(skill.name).length).toBeGreaterThan(0)
        expect(screen.getAllByText(skill.note).length).toBeGreaterThan(0)
      })
    })
  })

  it('renders a level label for every skill', () => {
    render(<Skills />)
    const totalSkills = skillData.reduce((sum, { skills }) => sum + skills.length, 0)
    const levels = Object.keys(LEVEL_PERCENT)
    const renderedLevels = levels.reduce((sum, level) => sum + screen.queryAllByText(level).length, 0)
    expect(renderedLevels).toBe(totalSkills)
  })

  it('renders a progress bar per skill with the mapped percentage', () => {
    render(<Skills />)
    const bars = screen.getAllByRole('progressbar')
    const expected = skillData.flatMap(({ skills }) => skills.map((skill) => LEVEL_PERCENT[skill.level]))
    expect(bars).toHaveLength(expected.length)
    bars.forEach((bar, index) => {
      expect(bar).toHaveAttribute('aria-valuenow', String(expected[index]))
    })
  })

  it('places a skill inside its own category card', () => {
    render(<Skills />)
    const [first] = skillData
    const card = screen.getByText(first.category).closest('div')?.parentElement as HTMLElement
    first.skills.forEach((skill) => {
      expect(within(card).getByText(skill.name)).toBeInTheDocument()
    })
  })
})
