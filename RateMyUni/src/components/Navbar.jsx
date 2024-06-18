import './Navbar.css'
import logo from "../assets/github-mark.png";
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">Rate My University</div>
            <ul className="navbar-links">
                <li>
                    <a href="#">Main</a>
                </li>
                <li>
                    <a href="#">Sign up</a>
                </li>
                <li>
                    <a href="#">Login</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
            <div className="navbar-icon">
                <a href="https://github.com/SumairSoomro/RateMyUniversity">
                    <img
                        src={logo}
                        alt="Navbar Logo"
                        className="navbar-logo-img"
                    />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
