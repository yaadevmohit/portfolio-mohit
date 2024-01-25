import "./nav-bar.css"
import { Link } from "react-router-dom"
const NavBar = () => {
    return (
        <header>
            <div className="profile-header">
                <h2>MOHIT YADAV</h2>
            </div>
            <nav>
                <Link className="nav-item" to="/projects">projects</ Link>
                <Link className="nav-item" to="/">about</ Link>
            </nav>
        </header>
    )
}

export default NavBar