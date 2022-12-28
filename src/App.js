import React from 'react';
import Header from './component/Header';
import Profile from './component/Profile';
import About from './component/About';
import Footer from './component/Footer';
import styles from './component/App.css';





function App() {
  return (
   <div className='App' >
    <Header/>
    <Profile />
    <About />
    <Footer />
    </div>
  )
}

export default App