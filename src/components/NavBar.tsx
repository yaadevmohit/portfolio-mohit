import "./nav-bar.css"

const NavBar = () => {
    return (
        <header>
            <div className="profile-header">
                <h2>MOHIT YADAV</h2>
            </div>
            <nav>
                <a className="nav-item" href="">work</a>
                <a className="nav-item" href="">projects</a>
                <a className="nav-item" href="">about</a>
            </nav>
        </header>
    )
}

export default NavBar