import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UniversityDetail() {
    const { id } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                // Assuming your endpoint returns reviews with university details populated
                const response = await fetch(
                    `http://localhost:8000/api/reviews/${id}`
                );
                const data = await response.json();
                setReviews(data);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        };

        fetchReviews();
    }, [id]);
    console.log(reviews);
    // Check if we have reviews to display
    if (!reviews || reviews.length === 0)
        return <div>No reviews or loading...</div>;

    return (
        <div>
            <h1>University Reviews</h1>
            {reviews.map((review, index) => (
                <div key={index}>
                    <h2>{review.universityId.name} - Review</h2>
                    <p>{review.reviewText}</p>
                    <div>
                        <label>Food: {review.food}</label>
                        <label>Safety: {review.safety}</label>
                        <label>Greek Life: {review.greekLife}</label>
                        <label>Clubs: {review.clubs}</label>
                        <label>Facilities: {review.facilities}</label>
                        <label>Location: {review.location}</label>
                        <label>Faculty: {review.faculty}</label>
                        <label>Networking: {review.networking}</label>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default UniversityDetail;
