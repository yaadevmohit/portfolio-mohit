import "./nav-bar.css"
import { Link } from "react-router-dom"
import lightModeSvg from "../assets/photo_gallery/sun-svgrepo-com.svg"
import darkModeSvg from  "../assets/photo_gallery/crescent-moon-svgrepo-com.svg"
import { useState } from "react";

interface NavBarProps {
    toggleDarkMode: () => void;
    darkMode: boolean

}

const NavBar = ({toggleDarkMode, darkMode}: NavBarProps) => {
    const [showPopup, setShowPopup] = useState(false);

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
                <Link className="nav-item" to="/projects">projects</ Link>
                <Link className="nav-item" to="/">about</ Link>
            </nav>
        </header>
    )
}

export default NavBar