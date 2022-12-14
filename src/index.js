import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import  {Provider} from 'react-redux'


ReactDOM.render(
        <BrowserRouter>
             <React.StrictMode>
                 <Provider store={store}>
                <App state={store.getState()}/>
                 </Provider>
            </React.StrictMode>

        </BrowserRouter>,document.getElementById('root')
);




/*store.subscribe(()=> {
    let state = store.getState()
    rerenderEntireTree(state);
});*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
