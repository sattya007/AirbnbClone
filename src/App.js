import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Switch } from '@mui/material';

function App() {
  return (
    <div className="app">
      <Router>
      <Header />
        <Routes>
          <Route key="search" path="/search" Component={()=><SearchPage />}>
            {/*  */}
          </Route>
          <Route path="/" key="home" Component={()=><Home/>}>

          {/* <Home /> */}
          </Route>
        </Routes>

        
        {/* <Switch>  */}
        {/* */}
        {/* </Switch> */}
        
        <Footer />

      </Router>
    </div>
  )
}

export default App;
