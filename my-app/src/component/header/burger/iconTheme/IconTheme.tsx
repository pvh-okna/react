import React, {useState} from 'react';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';
import { IconMoon, Icon, IconSun, BtnLogOut, WrapperBtn } from './style';
import {Link} from "react-router-dom";

const IconTheme = () => {
    const [light, setLight] = useState(true);
    const [login, setLogin] = useState(false);
    const handleState = () => {
        setLogin(login => !login)
    }
    return (
        <>
            <Icon>
                <IconSun light={light} onClick={() => setLight(!light)}>
                    <HiOutlineSun/>
                </IconSun>
                <IconMoon light={light} onClick={() => setLight(!light)}>
                    <HiOutlineMoon/>
                </IconMoon>
            </Icon>
            <WrapperBtn>
                <Link onClick={handleState} to={login ? '/' : '/login'}>
                <BtnLogOut onClick={() => setLogin(login => !login)}>{login ? 'Log out' : 'Sign Up'}</BtnLogOut>
            </Link>

            </WrapperBtn>


        </>
    );
};

export {IconTheme};