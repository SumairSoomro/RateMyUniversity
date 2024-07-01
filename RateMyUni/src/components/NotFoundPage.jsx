
import { Link } from "react-router-dom";
import "./styling/NotFoundPage.css";

export default function NotFoundPage() {
    return (
        <div className="not-found-container">
            <div className="not-found-message">404 Not Found</div>
            <Link to="/" className="home-link">
                Go back to home page
            </Link>
        </div>
    );
}
