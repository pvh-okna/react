import React from 'react';
import styled from 'styled-components';

import {SimpleComponent} from "./components/title/title";
import {UserButton} from "./components/button";
//import {Button} from "./components/button";

const App = () => {
    return(
            <div>
                <SimpleComponent/>
                <UserButton username = "Akhramovich Maryia"/>
            </div>

    )
}

export default App;