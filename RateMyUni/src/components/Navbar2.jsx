import "./styling/Navbar2.css";
import { Link } from "react-router-dom";

const Navbar2 = () => {
    return (
        <div className="navbar2-page">
            <nav className="navbar2">
                <div className="navbar-logo2">Rate My University</div>
                <ul className="navbar-links2">
                    <li>
                        <Link to="/" className="navbar-link2">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/logout" className="navbar-link2">
                            Logout
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar2;
