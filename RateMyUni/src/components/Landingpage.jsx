import "./styling/Landingpage.css";

function Landingpage() {
    return (
        <div className="centered-content">
            <h1>Rate My University</h1>
            <p>
                Discover and rate universities with Rate My University! Search
                for your school and explore reviews to make informed decisions
                about your education.
            </p>
            <div className="search-container">
                <form action="/search" method="GET">
                    <input
                        type="search"
                        name="q"
                        className="search-box"
                        placeholder="Search for universities..."
                    />
                    <button type="submit" className="search-button">
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Landingpage;
