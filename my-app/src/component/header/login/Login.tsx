import React, {useState} from 'react';
import { Initial } from './style';
import {BiUser} from "react-icons/bi";
import {Link} from "react-router-dom";

const Login = () => {
    const [reg, setReg] = useState(false);
    const handleState = () => {
        setReg(reg => !reg)
    }
    return (
        <>
            <Link onClick={handleState} to={reg ? '/' : '/login'}>
                <Initial> <BiUser/> </Initial>
            </Link>

        </>
    );
};

export default Login;