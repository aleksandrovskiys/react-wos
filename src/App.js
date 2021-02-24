import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

import {BrowserRouter, Route} from "react-router-dom";
import React from "react";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route render={() => {
                        return <Profile
                            store={props.store}/>
                    }} path="/profile"/>
                    <Route render={() => {
                        return <DialogsContainer
                            store={props.store}
                        />
                    }} path="/dialogs"/>
                    <Route component={News} path="/news"/>
                    <Route component={Music} path="/music"/>
                    <Route component={Settings} path="/settings"/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
