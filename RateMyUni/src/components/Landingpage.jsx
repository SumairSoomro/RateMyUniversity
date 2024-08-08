import "./styling/Landingpage.css";
import SearchBar from "./Searchbar";

function Landingpage() {
    return (
        <div className="centered-content">
            <h1 style={{fontSize:"4rem"}}>Rate My University</h1>
            <p>
                Discover and rate universities with Rate My University! Search
                for your school and explore reviews to make informed decisions
                about your education.
            </p>
            <div className="search-container">
                <SearchBar placeholder="Enter university name" />
            </div>
        </div>
    );
}

export default Landingpage;
