import React from 'react'
import { render, screen } from '@testing-library/react'

import HomePage from '../../src/app/home-page'

describe('HomePage (app/home-page)', () => {
  it('should render without crashing', () => {
    render(<HomePage />)
  })

  it('should render Our Purpose section', () => {
    render(<HomePage />)
    expect(screen.getByText('Our Purpose')).toBeInTheDocument()
  })

  it('should render Who We Help section', () => {
    render(<HomePage />)
    expect(screen.getByText('Individuals rebuilding their lives')).toBeInTheDocument()
  })

  it('should render Our Story section', () => {
    render(<HomePage />)
    expect(screen.getByText("Why Clara's Bridge Exists")).toBeInTheDocument()
  })

  it('should render Services section', () => {
    render(<HomePage />)
    expect(screen.getByText('Mentorship')).toBeInTheDocument()
    expect(screen.getByText('Life Skills')).toBeInTheDocument()
    expect(screen.getByText('Accountability')).toBeInTheDocument()
    expect(screen.getByText('Community')).toBeInTheDocument()
  })

  it('should render Contact section', () => {
    render(<HomePage />)
    expect(screen.getByText('info@clarasbridge.org')).toBeInTheDocument()
  })

  it('should render hero tagline', () => {
    render(<HomePage />)
    expect(screen.getByText(/More Than Support/)).toBeInTheDocument()
    expect(screen.getByText(/Learning to Live Again/)).toBeInTheDocument()
  })

  it('should have Donate card linking to zeffy.com', () => {
    render(<HomePage />)
    const donateLink = screen.getByRole('link', { name: /Donate/i })
    expect(donateLink).toHaveAttribute(
      'href',
      'https://www.zeffy.com/en-US/donation-form/donate-to-change-lives-10174'
    )
  })

  it('should have Volunteer card linking to contact email', () => {
    render(<HomePage />)
    const volunteerLink = screen.getByRole('link', { name: /Volunteer/i })
    expect(volunteerLink).toHaveAttribute(
      'href',
      'mailto:info@clarasbridge.org?subject=Volunteer%20Interest'
    )
  })
})
