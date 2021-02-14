import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import {Route, BrowserRouter} from "react-router-dom";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route render={() => {return <Profile postsData={props.state.postsData}
                                                          postTextOnChange={props.postTextOnChange}
                                                          newPostTextAreaValue={props.state.newPostTextAreaValue}
                                                          addPosts={props.addPost}/>}} path="/profile"/>
                    <Route render={() => {
                        return <Dialogs messagesData={props.state.messagesData} dialogsData={props.state.dialogsData}/>
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
