import { ArrowDownRight } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="eyebrow hero__eyebrow">
          General Virtual Assistant · Remote Support
        </div>

        <h1 className="hero__title">
          <span className="hero__title-name">Shinoah Carmona</span>
          keeps your inbox, calendar,
          projects, and daily operations
          <span className="hero__title-accent"> running smoothly behind the scenes.</span>
        </h1>

        <p className="hero__sub">
          A reliable General Virtual Assistant helping businesses stay organized through
          email management, scheduling, document organization, project coordination,
          and administrative support with additional skills in video editing and
          frontend web development when needed.
        </p>

        <div className="hero__actions">
          <a href="#contact" className="btn btn-primary">
            Start a project <ArrowDownRight size={16} />
          </a>
          <a href="#skills" className="btn btn-outline-dark">See my toolkit</a>
        </div>

        <div className="hero__status">
          <span className="hero__dot" />
          Available for new clients
        </div>
      </div>
    </section>
  )
}
