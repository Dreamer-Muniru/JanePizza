import './App.css'

import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Link, Switch, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomeScreen from './Screens/HomeScreen';
import cartScreen from './Screens/cartScreen';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
          
            <Route path="/" exact component={HomeScreen} />
            <Route path="/cartScreen" exact component={cartScreen} />
        
        </BrowserRouter>

    </div>
  );
}

export default App;
