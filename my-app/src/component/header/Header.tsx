import React from 'react';
import { HeaderBlock} from "./style";
import {Navigation} from "./burger/NavBar";
import Search from "./search/Search";
import Login from "./login/Login";



const Header = () => {
    return (
            <HeaderBlock>

                <Navigation/>
                <Search/>
                <Login/>

            </HeaderBlock>



    );
};

export default Header;