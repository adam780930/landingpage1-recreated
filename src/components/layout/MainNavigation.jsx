import { Link, NavLink } from 'react-router-dom';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">AT</Link>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/adam780930"
          className={classes.github}
        >
          <FontAwesomeIcon icon={faGithub} className={classes.github} />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/adam-yilin-tsai"
          className={classes.linkedin}
        >
          <FontAwesomeIcon icon={faLinkedin} className={classes.linkedin} />
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => isActive ? classes.activeLink : undefined}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? classes.activeLink : undefined}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => isActive ? classes.activeLink : undefined}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
