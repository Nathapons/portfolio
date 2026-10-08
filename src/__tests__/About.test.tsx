import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import About from '@/components/About'
import aboutData from '@/data/About.json'

describe('About', () => {
  it('renders the section title, headline and summary', () => {
    render(<About isComp />)
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText(aboutData.headline)).toBeInTheDocument()
    expect(screen.getByText(aboutData.summary)).toBeInTheDocument()
  })

  it('renders every strength', () => {
    render(<About isComp />)
    aboutData.strengths.forEach((strength) => {
      expect(screen.getByText(strength)).toBeInTheDocument()
    })
  })

  it('renders every desired role', () => {
    render(<About isComp />)
    aboutData.lookingFor.roles.forEach((role) => {
      expect(screen.getByText(role)).toBeInTheDocument()
    })
  })

  it('renders location and availability', () => {
    render(<About isComp />)
    expect(screen.getByText(`Location: ${aboutData.lookingFor.location}`)).toBeInTheDocument()
    expect(screen.getByText(`Availability: ${aboutData.lookingFor.availability}`)).toBeInTheDocument()
  })

  it('renders in mobile layout without crashing', () => {
    render(<About isComp={false} />)
    expect(screen.getByText(aboutData.headline)).toBeInTheDocument()
  })
})
