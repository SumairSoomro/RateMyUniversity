import "./styling/Editing.css";
import myImage from "../assets/la--edit-solid.png";

export default function Editing() {
    return (
        <div className="editing-text-container">
            <img src={myImage} alt="Description" className="editing-image" />
            <p className="editing-text">Create and edit your ratings</p>
        </div>
    );
}
