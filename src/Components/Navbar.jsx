
import './Navbar.css'
import { useRef } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import  { AiFillCaretDown } from 'react-icons/ai'
import logo from '../assets/logo.webp'
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
                    <a href="/#">Home </a>
                    <a href="/#">about</a>
                    <a href="/#">works</a>
                    <a href="/#">contact</a>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                <button
                    className="nav-btn"
                    onClick={showNavbar}>
                  <span>Explore</span> <AiFillCaretDown/>
                </button>
                <button className='hire'>
                    Enterprise Solutions
                </button>
            </header>
        </>
    )
}

export default Navbar
