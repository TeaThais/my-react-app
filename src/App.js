import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {Route, BrowserRouter} from "react-router-dom";


const App = (props) => {  //App is a function that returns layout
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='content'>
                        <Route path="/profile" render={() => <Profile avatarPic={props.avatarPic} backgroundPic={props.backgroundPic} postItems={props.postItems}/>}/>
                        <Route path="/dialogs" render={() => <Dialogs dialogs={props.dialogs} messagesData={props.messagesData}/>}/>
                        <Route path="/music" render={() => <Music />}/>
                        <Route path="/news" render={() => <News />}/>
                        <Route path="/settings" render={() => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
