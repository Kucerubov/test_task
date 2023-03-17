import React, { createContext } from 'react';
import App from './App';
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";


const root = document.querySelector("#root");

createRoot(root).render(<div>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
</div>)

