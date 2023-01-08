import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {Route, BrowserRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";




const App = (props) => {  //App is a function that returns layout
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar navbar={props.state.navbar}/>
                <div className='content'>
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer
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
                               render={()=> <UsersContainer/>}/>
                </div>
            </div>
    );
}


export default App;
