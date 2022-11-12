import React from "react"

import {StyledBurger, StyledMenu} from "./style";
import {IconTheme} from "./iconTheme/IconTheme";
import {Link} from "react-router-dom";
export const WrapperNav = ({open, setOpen}:any) => {

    return (
        <>

            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>

                    <StyledMenu open={open} >
                        <div style={{borderBottom: '1px solid #e8e8e8', height:"70px", bottom:"272px"}} onClick={() => setOpen(!open)} >
                            <Link to ={"/"}>
                                Home
                            </Link>
                        </div>
                        <IconTheme />
                    </StyledMenu>
        </>
    );
};
