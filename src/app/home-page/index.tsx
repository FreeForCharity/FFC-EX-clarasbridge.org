import React from 'react'

const index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        id="hero"
        className="relative bg-gradient-to-br from-teal-900 via-teal-700 to-teal-500 min-h-[420px] flex flex-col justify-between px-8 py-12 overflow-hidden"
      >
        {/* Decorative circle accents */}
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-teal-400 opacity-20 rounded-full" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-teal-300 opacity-20 rounded-full" />

        <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
          <h1 className="text-5xl md:text-6xl font-normal text-white" id="faustina-font">
            Clara&apos;s Bridge
          </h1>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto w-full mt-12">
          <p className="text-2xl md:text-3xl font-bold text-white leading-tight" id="lato-font">
            More Than Support
            <br />
            Learning to Live Again
          </p>
        </div>
      </section>

      {/* Our Purpose Section */}
      <section id="purpose" className="pt-10 pb-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-normal mb-6 text-teal-700" id="faustina-font">
              Our Purpose
            </h2>
            <div className="space-y-4 text-gray-600" id="lato-font">
              <p>
                Clara&apos;s Bridge supports individuals rebuilding their lives in recovery by
                providing structured mentorship, regular check-ins, and connections to community
                resources. The program helps participants rebuild routines, strengthen
                accountability, and develop practical tools needed for stable, independent living
                after treatment.
              </p>
              <p>
                With guidance from mentors who understand the recovery journey, participants gain
                encouragement, perspective, and a sense of connection during one of the most
                vulnerable stages of recovery. Clara&apos;s Bridge also recognizes the importance of
                supporting families and loved ones who are walking alongside someone in recovery.
              </p>
              <p>
                We hope to involve parents who have lost a child to addiction, offering them a
                meaningful way to support other families facing similar struggles. Their lived
                experience brings a level of understanding that cannot be taught.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-normal mb-6 text-teal-700" id="faustina-font">
              Who We Help
            </h2>
            <ul
              id="who-we-help"
              className="space-y-3 text-gray-600"
              style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}
            >
              <li id="lato-font">Individuals rebuilding their lives</li>
              <li id="lato-font">People transitioning from treatment</li>
              <li id="lato-font">Family &amp; loved ones facing addiction challenges</li>
              <li id="lato-font">People seeking stability in early recovery</li>
              <li id="lato-font">Individuals working to rebuild independence</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="pt-10 pb-16 px-4 bg-[#EEEBED]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-normal mb-6 text-center text-teal-700" id="faustina-font">
            Why Clara&apos;s Bridge Exists
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto" id="lato-font">
            Clara fought addiction for years and completed multiple rehabilitation programs,
            including one that lasted 18 months. Each time she returned home, we loved and supported
            her, but we often didn&apos;t know how to help her stay stable in recovery. I saw how
            little guidance exists after treatment ends. Clara&apos;s Bridge was created so people
            leaving rehab have support, direction, and hope during that critical transition.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-normal mb-12 text-center text-teal-700" id="faustina-font">
            How We Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border-t-4 border-teal-500 rounded-b-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-teal-700" id="faustina-font">
                Mentorship
              </h3>
              <p className="text-gray-600" id="lato-font">
                One on one guidance from experienced mentors who have sustained recovery.
              </p>
            </div>
            <div className="text-center p-6 border-t-4 border-teal-500 rounded-b-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-teal-700" id="faustina-font">
                Life Skills
              </h3>
              <p className="text-gray-600" id="lato-font">
                Help navigating real-life challenges that come with rebuilding a stable life in
                recovery.
              </p>
            </div>
            <div className="text-center p-6 border-t-4 border-teal-500 rounded-b-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-teal-700" id="faustina-font">
                Accountability
              </h3>
              <p className="text-gray-600" id="lato-font">
                Regular check-ins to encourage progress.
              </p>
            </div>
            <div className="text-center p-6 border-t-4 border-teal-500 rounded-b-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-teal-700" id="faustina-font">
                Community
              </h3>
              <p className="text-gray-600" id="lato-font">
                Connections to local services &amp; resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-[#EEEBED]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-normal mb-6 text-teal-700" id="faustina-font">
            Contact
          </h2>
          <p className="text-gray-600 mb-4" id="lato-font">
            Questions about the program?
          </p>
          <div className="space-y-2" id="lato-font">
            <p>
              <a href="mailto:info@clarasbridge.org" className="text-[#2EA3F2] hover:underline">
                info@clarasbridge.org
              </a>
            </p>
            <p>
              <a href="tel:4049541194" className="text-[#2EA3F2] hover:underline">
                (404) 954-1194
              </a>
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@clarasbridge.org?subject=Volunteer%20Interest"
              aria-label="Email us about volunteer opportunities"
              className="bg-white rounded-lg p-6 shadow-sm max-w-xs hover:shadow-md transition-shadow border-t-4 border-teal-500 block text-left"
            >
              <h3 className="text-lg font-semibold mb-2 text-teal-700" id="faustina-font">
                Volunteer
              </h3>
              <p className="text-gray-600 text-sm" id="lato-font">
                Support individuals in recovery by volunteering as a mentor.
              </p>
            </a>
            <a
              href="https://www.zeffy.com/en-US/donation-form/donate-to-change-lives-10174"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-6 shadow-sm max-w-xs hover:shadow-md transition-shadow border-t-4 border-green-500 block text-left"
            >
              <h3 className="text-lg font-semibold mb-2 text-green-700" id="faustina-font">
                Donate
              </h3>
              <p className="text-gray-600 text-sm" id="lato-font">
                Help support stable, independent lives in recovery.
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default index
