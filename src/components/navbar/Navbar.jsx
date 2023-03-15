import React , {useState} from 'react'
import './navbar.css';
import {RiMenuLine, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg';

const Menu = () =>{
  return(
  <>
      <p><a href="#home">Home</a> </p> 
      <p><a href="#wgpt">What is GPT</a> </p> 
      <p><a href="#possibility">OpenAI</a></p> 
      <p><a href="#features">Case Studies</a></p> 
      <p><a href="#blog">Library</a></p> 
  </>
  )
}


/* BEM - Block Element Modifier  
 suppose you have a navigation menu on your website. 
 You could create a block called "nav" and add elements 
 such as "nav__item" and "nav__link". If you wanted to create
  a modifier to change the color of the links when they are hovered 
  over, you could add a modifier called "nav__link--hover".
*/

const Navbar = () => {
  const [toggleMenu, setToggleMenu]= useState(false)
  return (
    <div className='gpt__navbar'>
      <div className="gpt__navbar-links">
      <div className="gpt__navbar-links_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="gpt__navbar-links_container">
        <Menu />
        
    
        
      </div>
      </div>
      <div className="gpt__navbar-sign">
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className="gpt__navbar-menu">
        {toggleMenu
         ? <RiCloseLine color='#fff' size = {27} onClick = {() => setToggleMenu(false)} />
        : <RiMenuLine color='#fff' size = {27} onClick = {() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='gpt__navbar-menu_container scale-up-center'>
            <div className="gpt__navbar-menu_container-links">
              <Menu />
              <div className="gpt__navbar-menu_container-links-sign">
              <p>Sign In</p>
              <button type='button'>Sign Up</button>
      </div>

            </div>
          </div>
        )}

      </div>
      
    </div>
  )
}

export default Navbar