import React from 'react';
import { Route ,Switch , BrowserRouter } from "react-router-dom";
// import './App.css';
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import NewSletter from "./Components/NewSletter/NewSletter";

function App() {
  return (
    <div >
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/" exact component={About}/>
                <Route path="/Main"  component={Main}/>
                <Route path="/NewSletter"  component={NewSletter}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
