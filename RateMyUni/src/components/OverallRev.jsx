import PropTypes from "prop-types";
import "./styling/OverallRev.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function OverallRev({ reviews }) {
    if (!reviews.length) {
        return (
            <p className="no-reviews-message">
                No reviews have been made, be the first to leave a review!
            </p>
        );
    }

    const ratingCategories = [
        { key: "food", displayName: "Food" },
        { key: "safety", displayName: "Safety" },
        { key: "greekLife", displayName: "Greek Life" },
        { key: "clubs", displayName: "Clubs" },
        { key: "facilities", displayName: "Facilities" },
        { key: "location", displayName: "Location" },
        { key: "faculty", displayName: "Faculty" },
        { key: "networking", displayName: "Networking" },
    ];

    const categoryAverages = ratingCategories.reduce((acc, category) => {
        const total = reviews.reduce(
            (sum, review) => sum + (review[category.key] || 0),
            0
        );
        acc[category.key] = (total / reviews.length).toFixed(2);
        return acc;
    }, {});

    const overallAverage = (
        Object.values(categoryAverages).reduce(
            (acc, avg) => acc + parseFloat(avg),
            0
        ) / ratingCategories.length
    ).toFixed(2);

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={i <= rating ? "active" : ""}
                />
            );
        }
        return stars;
    };

    return (
        <div className="overall-review-container">
            <div className="rating-box">
                <div className="overall-rating">
                    <p>Overall Rating: {overallAverage}</p>
                </div>
                <div className="category-ratings">
                    <div className="column">
                        {ratingCategories.slice(0, 4).map((category) => (
                            <div key={category.key} className="category">
                                <span>{category.displayName}:</span>
                                <div className="stars">
                                    {renderStars(
                                        Math.round(
                                            categoryAverages[category.key]
                                        )
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="column">
                        {ratingCategories.slice(4).map((category) => (
                            <div key={category.key} className="category">
                                <span>{category.displayName}:</span>
                                <div className="stars">
                                    {renderStars(
                                        Math.round(
                                            categoryAverages[category.key]
                                        )
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

OverallRev.propTypes = {
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
            food: PropTypes.number,
            safety: PropTypes.number,
            greekLife: PropTypes.number,
            clubs: PropTypes.number,
            facilities: PropTypes.number,
            location: PropTypes.number,
            faculty: PropTypes.number,
            networking: PropTypes.number,
        })
    ).isRequired,
};

export default OverallRev;
