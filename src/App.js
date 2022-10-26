import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {Route, BrowserRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";



const App = (props) => {  //App is a function that returns layout
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar navbar={props.state.navbar}/>
                <div className='content'>
                        <Route path="/profile"
                               render={() => <Profile
                                   profilePage={props.state.profilePage}/>}/>
                        <Route path="/dialogs"
                               render={() => <DialogsContainer/>}/>
                        <Route path="/music"
                               render={() => <Music />}/>
                        <Route path="/news"
                               render={() => <News />}/>
                        <Route path="/settings"
                               render={() => <Settings />}/>
                        <Route path="/users"
                               render={()=> <Users/>}/>
                </div>
            </div>
    );
}


export default App;
