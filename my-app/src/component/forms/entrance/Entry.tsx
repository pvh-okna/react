import {useState} from "react";
import {Link} from "react-router-dom";
import { SignIn } from "../SignIn/SignIn";
import {SignUp} from "../SignUp/SignUp";
import {RedistrBlock, WrapperSpan} from "./style";

export const Entry = () => {
    const[login, setLogin] = useState(false);

    return(
        <RedistrBlock>
            <Link to={'/'}>Back to home</Link>
            <div>
                {login ? <SignUp/> : <SignIn/>}
                <p>
                    {login ? 'Already have an account?' : 'Don’t have an account?'}
                    <WrapperSpan onClick={() => setLogin(login => !login)}>{login ? 'Sign In' : 'Sign Up'}</WrapperSpan>
                </p>
            </div>
        </RedistrBlock>
    )




}