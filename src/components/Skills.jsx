import {
  Mail, CalendarDays, HardDrive, Palette, Clapperboard, Video, Code2,
  FileSpreadsheet, MessagesSquare, Kanban, ListTodo, ClipboardList,
} from 'lucide-react'
import './Skills.css'

const TOOLS = [
  { icon: Mail, label: 'Gmail' },
  { icon: CalendarDays, label: 'Google Calendar' },
  { icon: HardDrive, label: 'Google Drive' },
  { icon: FileSpreadsheet, label: 'Docs & Sheets' },
  { icon: Video, label: 'Zoom' },
  { icon: MessagesSquare, label: 'Google Meet' },
  { icon: Palette, label: 'Canva' },
  { icon: Clapperboard, label: 'CapCut' },
  { icon: Kanban, label: 'Trello' },
  { icon: ListTodo, label: 'Asana' },
  { icon: ClipboardList, label: 'ClickUp' },
  { icon: Code2, label: 'Frontend Dev' },
]

const CATEGORIES = [
  {
    title: 'Administrative Support',
    note: 'Daily business operations',
    items: [
      'Email and inbox management (Gmail)',
      'Calendar scheduling and appointment coordination',
      'Document creation using Google Docs and Sheets',
      'File organization and cloud storage management',
      'Meeting scheduling and virtual meeting support',
    ],
  },
  {
    title: 'Communication & Coordination',
    note: 'Keeping teams connected',
    items: [
      'Client and team communication',
      'Meeting coordination through Zoom and Google Meet',
      'Follow-ups and task reminders',
      'Professional email correspondence',
      'Accurate data entry and online research',
    ],
  },
  {
    title: 'Project & Task Management',
    note: 'Organized workflows',
    items: [
      'Task management using Trello, Asana, and ClickUp',
      'Progress tracking and deadline monitoring',
      'Project organization and workflow support',
      'Daily, weekly, and monthly task planning',
    ],
  },
  {
    title: 'Technical Support',
    note: 'Additional digital skills',
    items: [
      'Responsive frontend websites using HTML, CSS, JavaScript, and React',
      'Website updates and basic maintenance',
      'Short-form video editing with CapCut',
      'Basic Canva editing for presentations and simple social media content',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="eyebrow skills__eyebrow">Skills & Toolkit</div>
        <h2 className="skills__title">
          One assistant, every tab open.
        </h2>
        <p className="skills__sub">
          Reliable virtual assistance backed by the tools businesses use every day 
          from email and calendar management to project coordination, documentation,
          and technical support.
        </p>

        <div className="dock" aria-label="Tools I work in">
  <div className="dock__track">
    {[...TOOLS, ...TOOLS].map(({ icon: Icon, label }, index) => (
      <div
        className="dock__tab"
        role="listitem"
        key={`${label}-${index}`}
      >
        <Icon size={18} strokeWidth={1.75} />
        <span>{label}</span>
      </div>
    ))}
  </div>
</div>

        <div className="skills__grid">
          {CATEGORIES.map((cat) => (
            <div className="skill-card" key={cat.title}>
              <span className="skill-card__note">{cat.note}</span>
              <h3 className="skill-card__title">{cat.title}</h3>
              <ul className="skill-card__list">
                {cat.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
