
import PropTypes from "prop-types";

function OverallRev({ reviews }) {
    
    const noReturn = () => {
        if (!reviews.length) {
            return <p>No reviews available.</p>;
        }
    };
    
    const ratingCategories = [
        "food",
        "safety",
        "greekLife",
        "clubs",
        "facilities",
        "location",
        "faculty",
        "networking",
    ];

    // Calculate the average rating for each category
    const categoryAverages = ratingCategories.reduce((acc, category) => {
        const total = reviews.reduce(
            (sum, review) => sum + (review[category] || 0),
            0
        );
        acc[category] = (total / reviews.length).toFixed(2);
        return acc;
    }, {});

    // Calculate the overall average rating
    const overallAverage =
        Object.values(categoryAverages).reduce(
            (acc, avg) => acc + parseFloat(avg),
            0
        ) / ratingCategories.length;

    return (
        
        <div className="overall-review">
            
            <h2>Overall Rating</h2>
            {noReturn()}
            <p>Average Rating: {overallAverage.toFixed(2)}</p>
            <h3>Category Averages</h3>
            <ul>
                {ratingCategories.map((category) => (
                    <li key={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}:{" "}
                        {categoryAverages[category]}
                    </li>
                ))}
            </ul>
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
