export default function NavTabs() {
  return (
    <nav className="nav">
      <ul className="navbar">
        <li className="navbar-item">
          <a className="button" href="/">
            Home
          </a>
        </li>
        <li className="navbar-item">
          <a className="button" href="/projects">
            Projects
          </a>
        </li>
        <li className="navbar-item">
          <a className="button" href="/info">
            Info
          </a>
        </li>
      </ul>
    </nav>
  );
}
