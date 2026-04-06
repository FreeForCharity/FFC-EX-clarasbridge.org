import React from 'react'

const index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="bg-[#EEEBED] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-normal mb-6" id="faustina-font">
            Clara&apos;s Bridge
          </h1>
          <a
            href="https://www.zeffy.com/en-US/donation-form/donate-to-change-lives-10174"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-700 transition"
          >
            Donate
          </a>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" id="lato-font">
          Supporting individuals rebuilding their lives in recovery through structured mentorship,
          accountability, and community connections.
          </p>
          
        </div>
      </section>

      {/* Our Purpose Section */}
      <section id="purpose" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-normal mb-6" id="faustina-font">
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
            <h2 className="text-3xl font-normal mb-6" id="faustina-font">
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
      <section id="our-story" className="py-16 px-4 bg-[#EEEBED]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-normal mb-6 text-center" id="faustina-font">
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
          <h2 className="text-3xl font-normal mb-12 text-center" id="faustina-font">
            How We Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-3" id="faustina-font">
                Mentorship
              </h3>
              <p className="text-gray-600" id="lato-font">
                One on one guidance from experienced mentors who have sustained recovery.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-3" id="faustina-font">
                Life Skills
              </h3>
              <p className="text-gray-600" id="lato-font">
                Help navigating real-life challenges that come with rebuilding a stable life in
                recovery.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-3" id="faustina-font">
                Accountability
              </h3>
              <p className="text-gray-600" id="lato-font">
                Regular check-ins to encourage progress.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-3" id="faustina-font">
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
          <h2 className="text-3xl font-normal mb-6" id="faustina-font">
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
            <div className="bg-white rounded-lg p-6 shadow-sm max-w-xs">
              <h3 className="text-lg font-semibold mb-2" id="faustina-font">
                Volunteer
              </h3>
              <p className="text-gray-600 text-sm" id="lato-font">
                Support individuals in recovery by volunteering as a mentor.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm max-w-xs">
              <h3 className="text-lg font-semibold mb-2" id="faustina-font">
                Donate
              </h3>
              <p className="text-gray-600 text-sm" id="lato-font">
                Help support stable, independent lives in recovery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default index
