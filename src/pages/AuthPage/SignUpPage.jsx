import SignUpForm from "../../components/SignUpForm/SignUpForm"
import './AuthPage.css';


export default function SignUpPage ({ setUser }) {
    return (
        <main className="SignUpPage">
            <h1>SignUp</h1>
            <SignUpForm setUser={setUser} />
        </main>
    )
}