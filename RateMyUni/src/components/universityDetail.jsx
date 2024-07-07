// UniversityDetail.jsx
import { useParams } from "react-router-dom";
import Navbar2 from "./Navbar2";
import useFetchReviews from "../hooks/useFetchReviews";
import "./styling/UniversityDetail.css"; // Assuming you have a CSS file for styling
import OverallRev from "./OverallRev";
import CreateRev from "./CreateRev";

function UniversityDetail() {
    const { id } = useParams();
    const { reviews, loading, error } = useFetchReviews(id);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <Navbar2 />
            <OverallRev reviews={reviews} /> {/* Pass reviews as a prop */}
            <CreateRev universityId={id}/>
        </div>
    );
}

export default UniversityDetail;
