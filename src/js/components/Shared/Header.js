import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className="App-header">
      <nav className="nav-links">
        <NavLink
          className="nav-link"
          to="/">
          Home
        </NavLink>
        <NavLink
          className="nav-link"
          to="/about">
          About
        </NavLink>
        <NavLink
          className="nav-link"
          to="/help">
          Help
        </NavLink>
      </nav>
    </header>
  );
}
