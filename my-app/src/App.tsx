import React from 'react';

import Layout from './containers/Layout';
import Main from "./component/main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Entry} from "./component/forms/entrance/Entry";
import { ActivationRoute } from './component/forms/activate/ActivateRoute';




const App = () => {

    return (
        <>
            <Routes>
               < Route path={"/"} element={<Layout/>}>
                  <Route index element={<Main/>}  />
                   <Route path={"/login"} element={<Entry/>}/>
                </Route>
                <Route path={"/activate/:uid/:token"} element={<ActivationRoute/>}/>
            </Routes>
        </>
    );
};

export default App;