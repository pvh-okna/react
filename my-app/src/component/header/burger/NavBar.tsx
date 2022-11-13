import React, {useState} from 'react';
import {NavBar} from "./style";

import {WrapperNav} from "./WrapperNav";

export const Navigation = ({props}:any) => {
    const [open, setOpen] = useState(false);
    return (
        <NavBar>
            <WrapperNav open={open} setOpen={setOpen}/>
        </NavBar>
    );
};
