import { useState } from "react";
import PropTypes from "prop-types";
import "./styling/CreateRev.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const CreateRev = ({ universityId }) => {
    const [ratings, setRatings] = useState({
        food: 0,
        safety: 0,
        greekLife: 0,
        clubs: 0,
        facilities: 0,
        location: 0,
        faculty: 0,
        networking: 0,
    });
    const [reviewText, setReviewText] = useState("");

    const handleRatingChange = (category, value) => {
        setRatings((prevRatings) => ({
            ...prevRatings,
            [category]: prevRatings[category] === value ? 0 : value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const reviewData = {
            universityId,
            ...ratings,
            reviewText,
        };

        try {
            const response = await fetch("http://localhost:8000/api/reviews", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(reviewData),
            });

            if (response.ok) {
                // Clear the form
                setRatings({
                    food: 0,
                    safety: 0,
                    greekLife: 0,
                    clubs: 0,
                    facilities: 0,
                    location: 0,
                    faculty: 0,
                    networking: 0,
                });
                setReviewText("");
            } else {
                console.error("Failed to submit review.");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    const renderStars = (category) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={
                        i <= ratings[category]
                            ? "fa-star create-active"
                            : "fa-star"
                    }
                    onClick={() => handleRatingChange(category, i)}
                />
            );
        }
        return stars;
    };

    const ratingLabels = {
        food: "Food",
        safety: "Safety",
        greekLife: "Greek Life",
        clubs: "Clubs",
        facilities: "Facilities",
        location: "Location",
        faculty: "Faculty",
        networking: "Networking",
    };

    const ratingCategories = Object.keys(ratingLabels);

    return (
        <div className="create-review-container">
            <h2>Submit a Review!</h2>
            <form onSubmit={handleSubmit}>
                <div className="create-rating-columns">
                    <div className="create-rating-column">
                        {ratingCategories.slice(0, 4).map((category) => (
                            <div
                                key={category}
                                className="create-rating-category"
                            >
                                <label>{ratingLabels[category]}:</label>
                                <div className="create-stars">
                                    {renderStars(category)}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="create-rating-column">
                        {ratingCategories.slice(4).map((category) => (
                            <div
                                key={category}
                                className="create-rating-category"
                            >
                                <label>{ratingLabels[category]}:</label>
                                <div className="create-stars">
                                    {renderStars(category)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="create-review-text">
                    <label>Review Text:</label>
                    <textarea
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

CreateRev.propTypes = {
    universityId: PropTypes.string.isRequired,
};

export default CreateRev;
