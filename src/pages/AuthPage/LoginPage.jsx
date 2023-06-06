import LoginForm from '../../components/LoginForm/LoginForm';
// import SignUpForm from '../../components/SignUpForm/SignUpForm';
// import { useState } from 'react';
// import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  // const location = useLocation();
  // const [showSignUp, setShowSignUp] = useState(location.pathname === '/signup');

  return (
    <main className="AuthPage">
      <h1>Login</h1>
          <LoginForm setUser={setUser} />
            <br />
      <Link className="link-no-underline" to="/signup">
      <button className="btn btn-outline-primary">SignUp </button>
        </Link>
    </main>
  );
}
