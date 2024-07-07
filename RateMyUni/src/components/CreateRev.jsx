import { useState } from "react";
import PropTypes from "prop-types";

const CreateRev = ({ universityId }) => {
    const [food, setFood] = useState(0);
    const [safety, setSafety] = useState(0);
    const [greekLife, setGreekLife] = useState(0);
    const [clubs, setClubs] = useState(0);
    const [facilities, setFacilities] = useState(0);
    const [location, setLocation] = useState(0);
    const [faculty, setFaculty] = useState(0);
    const [networking, setNetworking] = useState(0);
    const [reviewText, setReviewText] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const reviewData = {
            universityId,
            food,
            safety,
            greekLife,
            clubs,
            facilities,
            location,
            faculty,
            networking,
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
                setFood(0);
                setSafety(0);
                setGreekLife(0);
                setClubs(0);
                setFacilities(0);
                setLocation(0);
                setFaculty(0);
                setNetworking(0);
                setReviewText("");
            } else {
                console.error("Failed to submit review.");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    return (
        <div>
            <h2>Submit a Review for University ID: {universityId}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Food:</label>
                    <input
                        type="number"
                        value={food}
                        onChange={(e) => setFood(Number(e.target.value))}
                        min="0"
                        max="5"
                        required
                    />
                </div>
                <div>
                    <label>Safety:</label>
                    <input
                        type="number"
                        value={safety}
                        onChange={(e) => setSafety(Number(e.target.value))}
                        min="0"
                        max="5"
                        required
                    />
                </div>
                <div>
                    <label>Greek Life:</label>
                    <input
                        type="number"
                        value={greekLife}
                        onChange={(e) => setGreekLife(Number(e.target.value))}
                        min="0"
                        max="5"
                        required
                    />
                </div>
                <div>
                    <label>Clubs:</label>
                    <input
                        type="number"
                        value={clubs}
                        onChange={(e) => setClubs(Number(e.target.value))}
                        min="0"
                        max="5"
                        required
                    />
                </div>
                <div>
                    <label>Facilities:</label>
                    <input
                        type="number"
                        value={facilities}
                        onChange={(e) => setFacilities(Number(e.target.value))}
                        min="0"
                        max="5"
                        required
                    />
                </div>
                <div>
                    <label>Location:</label>
                    <input
                        type="number"
                        value={location}
                        onChange={(e) => setLocation(Number(e.target.value))}
                        min="0"
                        max="5"
                        required
                    />
                </div>
                <div>
                    <label>Faculty:</label>
                    <input
                        type="number"
                        value={faculty}
                        onChange={(e) => setFaculty(Number(e.target.value))}
                        min="0"
                        max="5"
                        required
                    />
                </div>
                <div>
                    <label>Networking:</label>
                    <input
                        type="number"
                        value={networking}
                        onChange={(e) => setNetworking(Number(e.target.value))}
                        min="0"
                        max="5"
                        required
                    />
                </div>
                <div>
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
