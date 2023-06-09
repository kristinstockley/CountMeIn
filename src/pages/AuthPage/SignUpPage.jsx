import SignUpForm from "../../components/SignUpForm/SignUpForm"
import './AuthPage.css';
import { Link } from 'react-router-dom';



export default function SignUpPage({ setUser }) {
    return (
        <main className="SignUpPage">
            <h1>Sign Up</h1>
            <SignUpForm setUser={setUser} />
            <br />
            <Link className="link-no-underline" to="/login">
                <button className="btn btn-outline-primary">Already a user? Log in </button>
            </Link>
        </main>
    )
}