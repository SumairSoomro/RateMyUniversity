import { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "./styling/Searchbar.css";
import SearchIcon from "@mui/icons-material/Search"; // Updated import for SearchIcon
import CloseIcon from "@mui/icons-material/Close"; // Updated import for CloseIcon

function SearchBar({ placeholder }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [universities, setUniversities] = useState([]);

    useEffect(() => {
        // Fetch the university data from the backend
        const fetchUniversities = async () => {
            try {
                const response = await fetch("http://localhost:8000/api/universities");
                const data = await response.json();
                
                setUniversities(data);
            } catch (error) {
                console.error("Error fetching universities:", error);
            }
        };

        fetchUniversities();
    }, []);

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = universities.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    return (
        <div className="search">
            <div className="searchInputs">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={wordEntered}
                    onChange={handleFilter}
                />
                <div className="searchIcon">
                    {filteredData.length === 0 ? (
                        <SearchIcon />
                    ) : (
                        <CloseIcon id="clearBtn" onClick={clearInput} />
                    )}
                </div>
            </div>
            {filteredData.length !== 0 && (
                <div className="dataResult">
                    {filteredData.slice(0, 15).map((value, key) => {
                        return (
                            <div className="dataItem" key={key}>
                                <p>{value.name}</p>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

// Define prop types for the component
SearchBar.propTypes = {
    placeholder: PropTypes.string.isRequired, // Define the type and requirement of the placeholder prop
};

export default SearchBar;
