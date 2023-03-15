import React from 'react'
import { Navbar,Brand,Cta } from './components/main';
import { Header,Footer,Features,Blog,Possibility,WhatGPT } from './containers/mainContainer';
import './App.css';


const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>
        <Brand />
        <WhatGPT />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
    </div>
  )
}
export default App;