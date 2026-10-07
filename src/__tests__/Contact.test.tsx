import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import Greeting from '@/components/Greeting'
import Connect from '@/components/Connect'
import contactData from '@/data/Contact.json'

describe('Contact.json', () => {
  it('has a plausible email and a PDF cv path', () => {
    expect(contactData.email).toMatch(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)
    expect(contactData.cvPath).toMatch(/\.pdf$/)
  })
})

describe('Greeting contact buttons', () => {
  it('Email button uses a mailto link with the email from Contact.json', () => {
    render(<Greeting isComp />)
    const link = screen.getByRole('link', { name: /email/i })
    expect(link).toHaveAttribute('href', `mailto:${contactData.email}`)
  })

  it('Download CV button has the download attribute and the cv path', () => {
    render(<Greeting isComp />)
    const link = screen.getByRole('link', { name: /download cv/i })
    expect(link).toHaveAttribute('download')
    expect(link).toHaveAttribute('href', `${import.meta.env.BASE_URL}${contactData.cvPath}`)
    expect(link.getAttribute('href')).toMatch(/cv\/.+\.pdf$/)
  })

  it('renders the same links on mobile layout', () => {
    render(<Greeting isComp={false} />)
    expect(screen.getByRole('link', { name: /email/i })).toHaveAttribute('href', `mailto:${contactData.email}`)
    expect(screen.getByRole('link', { name: /download cv/i })).toHaveAttribute('download')
  })
})

describe('Connect mail link', () => {
  it('has a mailto link with the email from Contact.json', () => {
    const { container } = render(<Connect isComp />)
    const link = container.querySelector(`a[href="mailto:${contactData.email}"]`)
    expect(link).toBeInTheDocument()
  })

  it('renders the Connect heading', () => {
    render(<Connect isComp={false} />)
    expect(screen.getByText('Connect')).toBeInTheDocument()
  })
})
