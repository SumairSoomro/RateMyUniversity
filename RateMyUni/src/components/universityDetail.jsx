import { useParams } from "react-router-dom";
import Navbar2 from "./Navbar2";
import useFetchReviews from "../hooks/useFetchReviews";
import { useState, useEffect } from "react";
import "./styling/UniversityDetail.css";
import OverallRev from "./OverallRev";
import CreateRev from "./CreateRev";
import ReviewList from "./ReviewList";

function UniversityDetail() {
    const { id } = useParams();
    const { reviews: initialReviews, loading, error } = useFetchReviews(id);
    const [reviews, setReviews] = useState(initialReviews);

    useEffect(() => {
        setReviews(initialReviews);
    }, [initialReviews]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <Navbar2 />
            <OverallRev reviews={reviews} />
            <CreateRev
                universityId={id}
                setReviews={setReviews}
                reviews={reviews}
            />
            <ReviewList reviews={reviews} />
        </div>
    );
}

export default UniversityDetail;
