import "./styling/Anon.css";
import myImage from "../assets/mdi--anonymous (1).png";

export default function Anon() {
    return (
        <div className="anon-text-container">
            <img src={myImage} alt="Description" className="anon-image" />
            <p className="anon-text">Your reviews are anonymous</p>
        </div>
    );
}
