import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {year} Shinoah Carmona</span>
        <span>Virtual Assistant · Remote</span>
      </div>
    </footer>
  )
}
