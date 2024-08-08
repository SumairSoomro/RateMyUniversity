import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./styling/ReviewList.css";
import { useState, useEffect } from "react";
import { isMyself } from "../utils/isMyself";
import axios from "axios";

const ReviewList = ({ reviews, universityName, setReviews }) => {
    const [editingReviewId, setEditingReviewId] = useState(null);
    const [editFormData, setEditFormData] = useState({});
    const [deleteConfirmId, setDeleteConfirmId] = useState(null);

    useEffect(() => {
        if (deleteConfirmId) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [deleteConfirmId]);

    const handleEditClick = (review) => {
        setEditingReviewId(review._id);
        setEditFormData(review);
    };

    const handleDeleteClick = (reviewId) => {
        setDeleteConfirmId(reviewId);
    };

    const handleDeleteConfirm = async () => {
        try {
            const response = await axios.delete(`http://localhost:8000/api/reviews/${deleteConfirmId}`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (response) {
                const updatedReviews = reviews.filter(
                    (review) => review._id !== deleteConfirmId
                );
                setReviews(updatedReviews);
                setDeleteConfirmId(null);
            } else {
                console.error("Failed to delete review");
            }
        } catch (error) {
            console.error("Error deleting review:", error);
        }
    };

    const handleDeleteCancel = () => {
        setDeleteConfirmId(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditFormData({
            ...editFormData,
            [name]: value,
        });
    };

    const handleRatingChange = (category, value) => {
        setEditFormData((prevData) => ({
            ...prevData,
            [category]: prevData[category] === value ? 0 : value,
        }));
    };

    const handleSaveClick = async () => {
        try {
            const response = await axios.put(`http://localhost:8000/api/reviews/${editingReviewId}`, editFormData, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (response) {
                const updatedReview = await response.data;
                const updatedReviews = reviews.map((review) =>
                    review._id === updatedReview._id ? updatedReview : review
                );
                setReviews(updatedReviews);
                setEditingReviewId(null);
            } else {
                console.error("Failed to update review");
            }
        } catch (error) {
            console.error("Error updating review:", error);
        }
    };

    const renderStars = (rating, category, isEditable) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={
                        i <= rating ? "fa-star review-active" : "fa-star"
                    }
                    onClick={
                        isEditable
                            ? () => handleRatingChange(category, i)
                            : undefined
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
            {reviews.map((review) =>
                editingReviewId === review._id ? (
                    <div key={review._id} className="review-item-container">
                        {
                            isMyself(review.userId) && (
                                <div className="icons">
                                    <FontAwesomeIcon
                                        icon={faEdit}
                                        className="edit-icon"
                                        onClick={() => handleEditClick(review)}
                                    />
                                    <FontAwesomeIcon
                                        icon={faTrashAlt}
                                        className="delete-icon"
                                        onClick={() => handleDeleteClick(review._id)}
                                    />
                                </div>
                            )
                        }
                        <h3 className="review-university-name">
                            {universityName}
                        </h3>
                        <div className="review-rating-columns">
                            <div className="review-rating-column">
                                <div className="review-category">
                                    <label>Food:</label>
                                    <div className="review-stars">
                                        {renderStars(
                                            editFormData.food,
                                            "food",
                                            true
                                        )}
                                    </div>
                                </div>
                                <div className="review-category">
                                    <label>Safety:</label>
                                    <div className="review-stars">
                                        {renderStars(
                                            editFormData.safety,
                                            "safety",
                                            true
                                        )}
                                    </div>
                                </div>
                                <div className="review-category">
                                    <label>Greek Life:</label>
                                    <div className="review-stars">
                                        {renderStars(
                                            editFormData.greekLife,
                                            "greekLife",
                                            true
                                        )}
                                    </div>
                                </div>
                                <div className="review-category">
                                    <label>Clubs:</label>
                                    <div className="review-stars">
                                        {renderStars(
                                            editFormData.clubs,
                                            "clubs",
                                            true
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="review-rating-column">
                                <div className="review-category">
                                    <label>Facilities:</label>
                                    <div className="review-stars">
                                        {renderStars(
                                            editFormData.facilities,
                                            "facilities",
                                            true
                                        )}
                                    </div>
                                </div>
                                <div className="review-category">
                                    <label>Location:</label>
                                    <div className="review-stars">
                                        {renderStars(
                                            editFormData.location,
                                            "location",
                                            true
                                        )}
                                    </div>
                                </div>
                                <div className="review-category">
                                    <label>Faculty:</label>
                                    <div className="review-stars">
                                        {renderStars(
                                            editFormData.faculty,
                                            "faculty",
                                            true
                                        )}
                                    </div>
                                </div>
                                <div className="review-category">
                                    <label>Networking:</label>
                                    <div className="review-stars">
                                        {renderStars(
                                            editFormData.networking,
                                            "networking",
                                            true
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="review-text-container">
                            <textarea
                                name="reviewText"
                                value={editFormData.reviewText}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button
                            className="save-button"
                            onClick={handleSaveClick}
                        >
                            Save
                        </button>
                    </div>
                ) : (
                    <div key={review._id} className="review-item-container">
                        {
                            isMyself(review.userId) && (
                                <div className="icons">
                                    <FontAwesomeIcon
                                        icon={faEdit}
                                        className="edit-icon"
                                        onClick={() => handleEditClick(review)}
                                    />
                                    <FontAwesomeIcon
                                        icon={faTrashAlt}
                                        className="delete-icon"
                                        onClick={() => handleDeleteClick(review._id)}
                                    />
                                </div>
                            )}
                        <h3 className="review-university-name">
                            {universityName}
                        </h3>
                        <div className="review-rating-columns">
                            <div className="review-rating-column">
                                <div className="review-category">
                                    <label>Food:</label>
                                    <div className="review-stars">
                                        {renderStars(
                                            review.food,
                                            "food",
                                            false
                                        )}
                                    </div>
                                </div>
                                <div className="review-category">
                                    <label>Safety:</label>
                                    <div className="review-stars">
                                        {renderStars(
                                            review.safety,
                                            "safety",
                                            false
                                        )}
                                    </div>
                                </div>
                                <div className="review-category">
                                    <label>Greek Life:</label>
                                    <div className="review-stars">
                                        {renderStars(
                                            review.greekLife,
                                            "greekLife",
                                            false
                                        )}
                                    </div>
                                </div>
                                <div className="review-category">
                                    <label>Clubs:</label>
                                    <div className="review-stars">
                                        {renderStars(
                                            review.clubs,
                                            "clubs",
                                            false
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="review-rating-column">
                                <div className="review-category">
                                    <label>Facilities:</label>
                                    <div className="review-stars">
                                        {renderStars(
                                            review.facilities,
                                            "facilities",
                                            false
                                        )}
                                    </div>
                                </div>
                                <div className="review-category">
                                    <label>Location:</label>
                                    <div className="review-stars">
                                        {renderStars(
                                            review.location,
                                            "location",
                                            false
                                        )}
                                    </div>
                                </div>
                                <div className="review-category">
                                    <label>Faculty:</label>
                                    <div className="review-stars">
                                        {renderStars(
                                            review.faculty,
                                            "faculty",
                                            false
                                        )}
                                    </div>
                                </div>
                                <div className="review-category">
                                    <label>Networking:</label>
                                    <div className="review-stars">
                                        {renderStars(
                                            review.networking,
                                            "networking",
                                            false
                                        )}
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
                )
            )}
            {deleteConfirmId && (
                <div className="delete-confirm-container">
                    <p>Are you sure you want to delete this review?</p>
                    <button
                        className="confirm-button"
                        onClick={handleDeleteConfirm}
                    >
                        Yes
                    </button>
                    <button
                        className="cancel-button"
                        onClick={handleDeleteCancel}
                    >
                        No
                    </button>
                </div>
            )}
        </>
    );
};

ReviewList.propTypes = {
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
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
    setReviews: PropTypes.func.isRequired,
};

export default ReviewList;
