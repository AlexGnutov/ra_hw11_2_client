import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Route, Routes, Navigate, HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./services/store/store";
import EditPage from "./services/pages/edit-page";
import ServicesPage from "./services/pages/services-page";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="/services" replace={true}/>}
                    />
                    <Route path="/services" element={<ServicesPage/>}/>
                    <Route path="/services/:id" element={<EditPage/>}/>
                </Routes>
            </HashRouter>
        </Provider>
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
