import "./nav-bar.css"
import { Link } from "react-router-dom"
import lightModeSvg from "../assets/photo_gallery/sun-svgrepo-com.svg"
import darkModeSvg from  "../assets/photo_gallery/crescent-moon-svgrepo-com.svg"

const NavBar = ({toggleDarkMode, darkMode}) => {


    return (
        <header className={darkMode && "dark"}>
            <div className="profile-header">
                <h2 className="main-heading">MOHIT YADAV</h2>
                <button className={`toggler ${darkMode && "dark"}`} onClick={toggleDarkMode}>
                    <div className={`toggle-btn ${darkMode && "dark"}`}><img src={darkMode ? darkModeSvg : lightModeSvg} alt="" /></div>
                    <p>{darkMode ? "Dark " : "Light "}mode</p>
                </button>
            </div>
            <div>
            </div>
            <nav>
                <Link className="nav-item" to="/projects">projects</ Link>
                <Link className="nav-item" to="/">about</ Link>
            </nav>
        </header>
    )
}

export default NavBar