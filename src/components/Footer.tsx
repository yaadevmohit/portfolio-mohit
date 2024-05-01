import "./footer.css"

interface FooterProps {
    darkMode: boolean
}

const Footer = ({darkMode}: FooterProps) => {


    return(
        <footer className={darkMode ? "dark" : ""}>
            <a href="https://github.com/yaadevmohit" target="blank">github</a>
            <a href="https://www.linkedin.com/in/mohityaadev/" target="blank">linkedIn</a>
            <a href="https://leetcode.com/mohityaadev/" target="blank">leetcode </a>
        </footer>
    )
}

export default Footer