import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Header from './components/Header';
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons';
import Chats from './components/Chats';
import ChatScreen from './components/ChatScreen';

import './App.css';
import './components/style.min.css';

const App = () => {
  return (
    <Router>
    <div className="App">
      {/* Header */}
        <Switch>
          <Route path="/chats/Олеся">
            <Header backButton = "/chats"></Header>
            <ChatScreen />

          </Route>
          <Route path="/chats">
            <Header backButton = "/"></Header>
            <Chats/>
          </Route>
          <Route path="/">
              <Header/>
            <TinderCards/>
            <SwipeButtons/>
          </Route>
        </Switch>

    </div>
    </Router>
  );
}

export default App;


// {/* Header */}
// <Header/>
// {/* Tinder Cards */}
// {/* Buttons below tinder cards */}
//
// {/* Chats screen */}
//   {/* Individual chat screen */}
