import { useNavigate, useParams } from "react-router-dom";
import Navbar2 from "./Navbar2";
import useFetchReviews from "../hooks/useFetchReviews";
import useFetchNames from "../hooks/useFetchNames"; // Import the new hook
import { useState, useEffect } from "react";
import "./styling/UniversityDetail.css";
import OverallRev from "./OverallRev";
import CreateRev from "./CreateRev";
import ReviewList from "./ReviewList"; // Import the new component
import { isLoggedIn } from "../utils/isLoggedIn";

function UniversityDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const {
        reviews: initialReviews = [],
        loading: reviewsLoading,
        error: reviewsError,
    } = useFetchReviews(id);
    const {
        universityName,
        loading: nameLoading,
        error: nameError,
    } = useFetchNames(id); // Use the new hook

    const [reviews, setReviews] = useState(initialReviews);
    const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn())

    useEffect(() => {
        if (!isLoggedIn()) {
            navigate("/Login");
        }
        setIsAuthenticated(isLoggedIn())
    }, [])


    useEffect(() => {
        setReviews(initialReviews);
    }, [initialReviews]);

    if (reviewsLoading || nameLoading) return <p>Loading...</p>;
    if (reviewsError) return <p>Error: {reviewsError}</p>;
    if (nameError) return <p>Error: {nameError}</p>;

    return (
        <div>
            <Navbar2 />
            <h2 className="name-Top">{universityName}</h2>{" "}
            {/* Display the university name */}
            <OverallRev reviews={reviews} />
            <CreateRev
                universityId={id}
                setReviews={setReviews}
                reviews={reviews}
            />
            <ReviewList
                reviews={reviews}
                universityName={universityName}
                setReviews={setReviews}
            />
            {/* Pass the university name and setReviews as props */}
        </div>
    );
}

export default UniversityDetail;
