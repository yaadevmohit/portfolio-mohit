import "./nav-bar.css"
import { Link } from "react-router-dom"
import lightModeSvg from "../assets/photo_gallery/sun-svgrepo-com.svg"
import darkModeSvg from  "../assets/photo_gallery/crescent-moon-svgrepo-com.svg"
import { useState } from "react";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin)

interface NavBarProps {
    toggleDarkMode: () => void;
    darkMode: boolean

}

const NavBar = ({toggleDarkMode, darkMode}: NavBarProps) => {
    const [showPopup, setShowPopup] = useState(false);

    useGSAP(() => {
        gsap.to("#projects", {
            duration: 1,
            text: "projects",
            ease: 'elastic.inOut'
        }),
        gsap.to("#about", {
            delay: 0.1,
            duration: 1.8,
            text: "about",
            ease: 'elastic.inOut'
        }),
        gsap.to("#animation", {
            delay: 0.3,
            duration: 1.8,
            text: "animations",
            ease: 'elastic.inOut'
        })
        
    }, [])
    const toggleMode = () => {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 700); // Wait for the animation to complete (0.5s)
    };
  

    return (
        <header className={darkMode ? "dark" : ""}>
            <div className="profile-header">
                <h2 className="main-heading">MOHIT YADAV</h2>
                <button className={`toggler ${darkMode && "dark"}`} onClick={toggleDarkMode}>
                    <div 
                        className={`toggle-btn ${darkMode && "dark"} ${showPopup ? "mode-change-popup" : ""}`}
                        onClick={toggleMode} 
                    >
                        {/* i've to add one pop in and disappear and other one pop out */}
                        <img 
                            src={darkMode ? darkModeSvg : lightModeSvg} 
                            alt=""
                        />
                    </div>
                    <p>{darkMode ? "Dark " : "Light "}mode</p>
                </button>
            </div>
            <nav>
                <Link className="nav-item" id="projects" to="/projects">pr</ Link>
                <Link className="nav-item" id="animation" to="/animations">an</ Link>
                <Link className="nav-item" id="about" to="/">ab</ Link>
            </nav>
        </header>
    )
}

export default NavBar