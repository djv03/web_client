
import './Navbar.css'
import { useRef } from 'react'
import { FaTimes } from 'react-icons/fa'
import  {AiOutlineMenu } from 'react-icons/ai'
import logo from '../assets/Logo.jpg'
function Navbar() {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };
    return (
        <>
            <header>
				<div>
                <img src={logo} alt="profile pic" />
				</div>
                <nav ref={navRef}>
                    <a href="#home">Home </a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                <button
                    className="nav-btn"
                    id='ham'
                    onClick={showNavbar}>
                  <AiOutlineMenu />
                </button>
                {/* <button className='hire'>
                    Enterprise Solutions
                </button> */}
            </header>
        </>
    )
}

export default Navbar
