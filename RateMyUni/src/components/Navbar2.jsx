import "./styling/Navbar2.css";
import { Link, useNavigate } from "react-router-dom";


const Navbar2 = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        localStorage.removeItem("token");

        // Redirect to the login page
        navigate("/");
    };

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
                        {/* Changed from Link to button or div that calls handleLogout on click */}
                        <a 
                            onClick={handleLogout}
                            className="navbar-link2"
                            style={{ cursor: "pointer" }}
                        >
                            Logout
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar2;
