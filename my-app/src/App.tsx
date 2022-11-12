import React from 'react';

import Layout from './containers/Layout';
import WrapperCard from "./component/cards/WrapperCard";

import Header from "./component/header/Header";
import Main from "./component/main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Entry} from "./component/forms/entrance/Entry";




const App = () => {

    return (
        <>
            <Routes>
               < Route path={"/"} element={<Layout/>}>
                  <Route index element={<Main/>}  />
                   <Route path={"/login"} element={<Entry/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;