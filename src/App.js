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
            <div className='app-wrapper'>
                <Header/>
                <Navbar navbar={props.state.navbar}/>
                <div className='content'>
                        <Route path="/profile"
                               render={() => <Profile
                                   profilePage={props.state.profilePage}
                                   addPost={props.addPost}
                                   updateTextarea={props.updateTextarea}/>}/>
                        <Route path="/dialogs"
                               render={() => <Dialogs
                                   state={props.state.dialogsPage}
                                   addMessage={props.addMessage}
                                   reloadTextarea={props.reloadTextarea}
                                   messageText={props.state.dialogsPage.messageText}/>}/>
                        <Route path="/music"
                               render={() => <Music />}/>
                        <Route path="/news"
                               render={() => <News />}/>
                        <Route path="/settings"
                               render={() => <Settings />}/>
                </div>
            </div>
    );
}


export default App;
