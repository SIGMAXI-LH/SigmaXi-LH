import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing'
import Detect from './components/Detect'
import Upload from './components/Upload'
import Mood from './components/Mood'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class App extends React.Component{
  render() {
  return (
    <div className="App">
          <Route path="/" exact={true} component={Landing} />
          <Route path="/detect" component={Detect}/>
          <Route path="/upload" component={Upload}/>
          <Route path="/mood" component={Mood}/>

    </div>
  );
  }
}

