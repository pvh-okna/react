import React, {useState} from 'react';
import { Initial } from './style';
import {BiUser} from "react-icons/bi";
import {Link} from "react-router-dom";

const Login = () => {
    const [login, setLogin] = useState(false);
    const handleState = () => {
        setLogin(login => !login)
    }
    return (
        <>
            <Link onClick={handleState} to={login ? '/' : '/login'}>
                <Initial> <BiUser/> </Initial>
            </Link>

        </>
    );
};

export default Login;