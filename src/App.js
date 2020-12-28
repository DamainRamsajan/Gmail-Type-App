import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Mail from "./Mail"
import EmailList from "./EmailList"
import SendMail from './SendMail';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { selectUser } from './features/userSlice';
import Login from './Login';


function App() {

  const setMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);

  return (
    <Router>
      {!user? (
        <Login />
      ):(
        <div className="app">
        <Header />
        <div className = "app__body">
          <Sidebar />
          <Switch>
              <Route path= "/mail">
                  <Mail/>
              </Route>
              <Route path= "/">
                  <EmailList/>
              </Route>
          </Switch>
        </div>
        {setMessageIsOpen && <SendMail/>}
      </div>
      )}
      
    </Router>
     

    
  );
}

export default App;
