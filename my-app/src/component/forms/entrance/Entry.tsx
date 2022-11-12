import {useState} from "react";
import {Link} from "react-router-dom";
import { SignIn } from "../SignIn/SignIn";
import {SignUp} from "../SignUp/SignUp";

export const Entry = () => {
    const[login, setLogin] = useState(false);

    return(
        <>
            <Link to={'/'}>Back to home</Link>
            <div>
                {login ? <SignIn/> : <SignUp/>}
                <p>
                    {login ? 'Already have an account?' : 'Don’t have an account?'}
                    <span onClick={() => setLogin(login => !login)}>{login ? 'Sign Up' : 'Sign In'}</span>
                </p>
            </div>
        </>
    )




}