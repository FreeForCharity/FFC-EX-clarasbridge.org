import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Footer from '../../src/components/footer'

// Extend Jest matchers
expect.extend(toHaveNoViolations)

describe('Footer component', () => {
  it('should render the footer', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
  })

  it('should display Endorsements section', () => {
    render(<Footer />)
    expect(screen.getByText('Endorsements')).toBeInTheDocument()
  })

  it('should display Quick Links section', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
  })

  it('should display Contact Us section with contact information', () => {
    render(<Footer />)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('should have social media links', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })

  it('should display the current year in copyright', () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument()
  })

  it('should display pre-501c3 endorsement note', () => {
    render(<Footer />)
    expect(screen.getByText(/pre-501/i)).toBeInTheDocument()
  })

  it('should have email contact link', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    const emailLink = links.find((link) => link.getAttribute('href')?.includes('mailto:'))
    expect(emailLink).toBeDefined()
  })

  it('should display the EIN number', () => {
    render(<Footer />)
    expect(screen.getByText(/41-4311007/)).toBeInTheDocument()
  })

  it('should have phone contact link', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    const phoneLink = links.find((link) => link.getAttribute('href')?.includes('tel:'))
    expect(phoneLink).toBeDefined()
  })

  it('should display the Free For Charity Policy section', () => {
    render(<Footer />)
    expect(screen.getByText('Free For Charity Policy')).toBeInTheDocument()
  })

  it('should have all social media links with correct aria-labels', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('X (Twitter)')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('GitHub')).toBeInTheDocument()
  })

  it('should have social media links open in new tabs', () => {
    render(<Footer />)
    const fbLink = screen.getByLabelText('Facebook')
    expect(fbLink).toHaveAttribute('target', '_blank')
    expect(fbLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should have policy links with correct hrefs', () => {
    render(<Footer />)
    const policyLinks = [
      { text: 'Free For Charity Privacy Policy', href: '/privacy-policy' },
      { text: 'Free For Charity Cookie Policy', href: '/cookie-policy' },
      { text: 'Free For Charity Terms of Service', href: '/terms-of-service' },
      { text: 'Free For Charity Donation Policy', href: '/free-for-charity-donation-policy' },
    ]

    for (const { text, href } of policyLinks) {
      const link = screen.getByText(text).closest('a')
      expect(link).toHaveAttribute('href', href)
    }
  })

  it('should display Free For Charity link in copyright bar', () => {
    render(<Footer />)
    const link = screen.getByText('Free For Charity')
    expect(link.closest('a')).toHaveAttribute('href', 'https://freeforcharity.org')
  })

  it('should not have accessibility violations', async () => {
    const { container } = render(<Footer />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
