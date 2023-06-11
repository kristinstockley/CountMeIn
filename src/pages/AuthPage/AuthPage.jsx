import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import { useState } from 'react'
import './AuthPage.css'

export default function AuthPage({ setUser }) {
    const [userWantsLogin, setUserWantsLogin] = useState(true)
    return (
        <>
            <main className="AuthPage">

                <h1> Access your countdowns in 3...2...1</h1>
                {userWantsLogin ?
                    <>
                        <h2>Welcome Back!</h2>
                        <LoginForm setUser={setUser}></LoginForm>
                        <button className="btn btn-outline-danger" onClick={(e) => setUserWantsLogin(false)}>Sign Up before Counting down</button>
                    </>
                    :
                    <>
                        <h3>Welcome to CountMeIn!</h3>

                        <SignUpForm setUser={setUser}></SignUpForm>
                        <button className="btn btn-outline-success" onClick={(e) => setUserWantsLogin(true)}>Already a user? Log in</button>

                    </>
                }
            </main>

        </>
    )
}