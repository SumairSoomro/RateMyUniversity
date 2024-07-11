import "./styling/Navbar.css";
import logo from "../assets/github-mark.png";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">Rate My University</div>
            <ul className="navbar-links">
                <li>
                    <a href="#">Main</a>
                </li>
                <li>
                    <Link to="/signUp" className="SignupLink">
                        Sign up
                    </Link>
                </li>
                <li>
                    <Link to="/Login" className="LoginLink">
                        Login
                    </Link>
                </li>
                <li>
                    <a href="mailto:sumairsoomro@umass.edu">Contact</a>
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
