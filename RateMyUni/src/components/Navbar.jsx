import "./styling/Navbar.css";
import logo from "../assets/github-mark.png";
import { Link } from "react-router-dom";
import { isLoggedIn } from "../utils/isLoggedIn";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn())
    const handleLogout = () => {
        localStorage.removeItem("token")
        setIsAuthenticated(false)
    }
    useEffect(() => {
        setIsAuthenticated(isLoggedIn())
    }, [])

    return (
        <nav className="navbar">
            <div className="navbar-logo">Rate My University</div>
            <ul className="navbar-links">
                <li>
                    <a href="#">Main</a>
                </li>
                {!isAuthenticated ? <>
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
                </> : <>
                <li>
                        <button className="LogoutLink" onClick={handleLogout}>
                            Logout
                        </button>
                    </li>
                </>
                }
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
