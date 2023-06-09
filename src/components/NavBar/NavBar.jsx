import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';


export default function NavBar({ setUser, user }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-bg-body-tertiary navbar-dark navbar-custom fixed-top">
      <div className="container-fluid">
        <div className="navbar-brand d-flex">
          <img
            alt="logo"
            src="/CMIicon.png"
            width="40"
            height="40"
          />&nbsp;
          <Link className="navbar-brand" to="/">
            CountMeIn
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            {user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/events">
                    Your Events
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/events/new">
                    Add Event
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="" onClick={handleLogOut}>
                    Log Out
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link"   >
                    Log In
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

    </nav>

  );
}
