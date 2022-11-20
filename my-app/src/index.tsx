import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import styled, {createGlobalStyle} from "styled-components";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import { store } from './store';
const Global = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
`
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
      <BrowserRouter>
          <Provider store={store}>
              <Global/>
              <App />

          </Provider>


      </BrowserRouter>

  </>
);

