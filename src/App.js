import React from 'react'
import './App.css';
import Navbar from './navigation/navbar'
import Home from './Home/home';
import HowItWorks from './howItWork/how'



class App extends React.Component{
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <HowItWorks/>
        

        </div>
        
    )
  }
}

export default App;
