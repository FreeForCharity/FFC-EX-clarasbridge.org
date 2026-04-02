'use client'

import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer: React.FC = () => {
  const currentYear = React.useMemo(() => new Date().getFullYear(), [])
  const socialLinks = [
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaXTwitter, href: '#', label: 'X (Twitter)' },
    {
      icon: FaLinkedinIn,
      href: '#',
      label: 'LinkedIn',
    },
    {
      icon: FaGithub,
      href: 'https://github.com/FreeForCharity/FFC-EX-clarasbridge.org',
      label: 'GitHub',
    },
  ]
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-12 px-4 md:px-6 lg:px-8">
        {/* Column 1: Endorsements */}
        <div className="space-y-6 px-4 sm:px-0">
          <h3 className="text-[28px] text-white">Endorsements</h3>

          <div className="space-y-4">
            <p className="text-sm text-gray-400" id="aria-font">
              Clara&apos;s Bridge is a pre-501(c)(3) nonprofit. GuideStar/Candid endorsement links
              will be added upon IRS determination.
            </p>

            <p>
              <span className="font-[500] text-[22px]">Clara&apos;s Bridge EIN: 41-4311007</span>
            </p>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-6 px-4 sm:px-0">
          <h3 className="text-[28px] text-white">Quick Links</h3>

          <ul className="space-y-2 text-sm" id="lato-font">
            {[
              { name: 'Home', href: '/#hero' },
              { name: 'Our Purpose', href: '/#purpose' },
              { name: 'Who We Help', href: '/#who-we-help' },
              { name: 'Our Story', href: '/#our-story' },
              { name: 'Services', href: '/#services' },
              { name: 'Contact', href: '/#contact' },
              {
                name: 'Supported Charity Login',
                href: 'https://freeforcharity.org/hub/',
              },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  className="hover:text-[#F58C23] hover:tracking-widest transition-all text-[16px] font-[500]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="space-y-3">
            <h4 className="text-[28px] text-white">Free For Charity Policy</h4>
            <ul className="space-y-1 text-sm" id="lato-font">
              {[
                {
                  name: 'Free For Charity Donation Policy',
                  href: '/free-for-charity-donation-policy',
                },
                {
                  name: 'Free For Charity Privacy Policy',
                  href: '/privacy-policy',
                },
                {
                  name: 'Free For Charity Cookie Policy',
                  href: '/cookie-policy',
                },
                {
                  name: 'Free For Charity Terms of Service',
                  href: '/terms-of-service',
                },
                {
                  name: 'Free For Charity Vulnerability Disclosure Policy',
                  href: '/vulnerability-disclosure-policy',
                },
                {
                  name: 'Free For Charity Security Acknowledgement',
                  href: '/security-acknowledgements',
                },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#F58C23] hover:tracking-widest transition-all text-[16px] font-[500]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 3: Contact Us */}
        <div className="space-y-6 px-4 sm:px-0">
          <h3 className="text-[28px] text-white">Contact Us</h3>

          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <Mail className="w-10 h-10 text-orange-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-[500] text-[22px]">E-mail</p>
                <a
                  href="mailto:info@clarasbridge.org"
                  className="font-[500] text-[15px] hover:text-cyan-400 transition-colors break-all"
                  id="aria-font"
                >
                  info@clarasbridge.org
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-10 h-10 text-orange-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-[500] text-[22px]">Call Us Today</p>
                <a
                  href="tel:4049541194"
                  className="font-[500] text-[16px] hover:text-cyan-400 transition-colors"
                  id="aria-font"
                >
                  (404) 954-1194
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-10 h-10 text-orange-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-[500] text-[22px]">Main Address</p>
                <p className="font-[500] text-[16px]" id="aria-font">
                  {/* TODO: Update with client mailing address */}
                  Address TBD
                </p>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              {socialLinks.map(({ icon: Icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors"
                >
                  <Icon className="w-6 h-6 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="mt-12 py-6 px-4 border-t border-gray-800 text-center text-[18px] font-[500] w-full"
        id="aria-font"
      >
        <p>
          © {currentYear} Clara&apos;s Bridge. All Rights Reserved | A project of{' '}
          <Link
            href="https://freeforcharity.org"
            className="underline text-[#2EA3F2] hover:text-[#2EA3F2] transition-colors"
          >
            Free For Charity
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
