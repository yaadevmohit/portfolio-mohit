import "./nav-bar.css"
import { Link } from "react-router-dom"
import lightModeSvg from "../assets/photo_gallery/sun-svgrepo-com.svg"
import darkModeSvg from  "../assets/photo_gallery/crescent-moon-svgrepo-com.svg"

const NavBar = () => {
    return (
        <header>
            <div className="profile-header">
                <h2 className="main-heading">MOHIT YADAV</h2>
                <div className="toggler">
                    <div className="toggle-btn"><img src={lightModeSvg} alt="" /></div>
                    <p>Light mode</p>
                </div>
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