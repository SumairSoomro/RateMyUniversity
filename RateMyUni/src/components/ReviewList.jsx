import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./styling/ReviewList.css";

const ReviewList = ({ reviews, universityName }) => {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={
                        i <= rating ? "fa-star review-active" : "fa-star"
                    }
                />
            );
        }
        return stars;
    };



    if (!reviews || reviews.length === 0) {
        return null;
    }

    return (
        <>
            {reviews.map((review, index) => ( 
                
                <div key={index} className="review-item-container">
                    <h3 className="review-university-name">{universityName}</h3>
                    <div className="review-rating-columns">
                        <div className="review-rating-column">
                            <div className="review-category">
                                <label>Food:</label>
                                <div className="review-stars">
                                    {renderStars(review.food)}
                                </div>
                            </div>
                            <div className="review-category">
                                <label>Safety:</label>
                                <div className="review-stars">
                                    {renderStars(review.safety)}
                                </div>
                            </div>
                            <div className="review-category">
                                <label>Greek Life:</label>
                                <div className="review-stars">
                                    {renderStars(review.greekLife)}
                                </div>
                            </div>
                            <div className="review-category">
                                <label>Clubs:</label>
                                <div className="review-stars">
                                    {renderStars(review.clubs)}
                                </div>
                            </div>
                        </div>
                        <div className="review-rating-column">
                            <div className="review-category">
                                <label>Facilities:</label>
                                <div className="review-stars">
                                    {renderStars(review.facilities)}
                                </div>
                            </div>
                            <div className="review-category">
                                <label>Location:</label>
                                <div className="review-stars">
                                    {renderStars(review.location)}
                                </div>
                            </div>
                            <div className="review-category">
                                <label>Faculty:</label>
                                <div className="review-stars">
                                    {renderStars(review.faculty)}
                                </div>
                            </div>
                            <div className="review-category">
                                <label>Networking:</label>
                                <div className="review-stars">
                                    {renderStars(review.networking)}
                                </div>
                            </div>
                        </div>
                    </div>
                    {review.reviewText && (
                        <div className="review-text-container">
                            <p>{review.reviewText}</p>
                        </div>
                    )}
                </div>
            ))}
        </>
    );
};

ReviewList.propTypes = {
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
            reviewText: PropTypes.string,
        })
    ),
    universityName: PropTypes.string.isRequired,
};

export default ReviewList;
