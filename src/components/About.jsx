import './About.css'

const FACTS = [
  { label: 'Role', value: 'General Virtual Assistant' },
  { label: 'Works across', value: 'Admin, Assistant, Static Website' },
  { label: 'Availability', value: 'Open for a clients' },
  { label: 'Communication', value: 'Zoom , Google Meet , Email' },
]

export default function About() {
  return (
    <section id="about">
      <div className="container about">
        <div className="about__text">
          <div className="eyebrow about__eyebrow">About</div>
          <h2 className="about__title">
            Organized behind the scenes,<br />so your business runs on time.
          </h2>
          <p className="about__p">
            I'm Shinoah Carmona, a virtual assistant who helps founders, coaches, 
            and small businesses stay organized by handling day-to-day administrative tasks.
            I manage emails, calendars, meeting schedules, file organization, and 
            other admin work using Google Workspace, so you can spend more time focusing
            on your business.
          </p>
          <p className="about__p">
            Beyond administrative support, I can also assist with creative and technical task
            s. From editing short-form videos and maintaining websites to building responsive
            frontend pages, I bring a well-rounded skill set that allows me to support 
            different areas of your business. This flexibility means you can rely on one 
            assistant for both everyday operations and digital projects.
          </p>
        </div>

        <div className="about__card">
          {FACTS.map((f) => (
            <div className="about__fact" key={f.label}>
              <span className="about__fact-label">{f.label}</span>
              <span className="about__fact-value">{f.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
