import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./styling/Searchbar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

function SearchBar({ placeholder }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [universities, setUniversities] = useState([]);
    const [pendingNavigationId, setPendingNavigationId] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchUniversities = async () => {
            try {
                const response = await fetch(
                    "http://localhost:8000/api/universities"
                );
                const data = await response.json();
                setUniversities(data);

                // Navigate if there was a pending navigation
                if (pendingNavigationId) {
                    navigate(`/university/${pendingNavigationId}`);
                    setPendingNavigationId(null); // Clear pending navigation ID
                }
            } catch (error) {
                console.error("Error fetching universities:", error);
            }
        };

        fetchUniversities();
    }, [pendingNavigationId, navigate]);

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

    const handleClick = (id) => {
        // Check if data has been loaded before navigating
        if (universities.length > 0) {
            navigate(`/university/${id}`);
        } else {
            // Set pending navigation if data is not yet available
            setPendingNavigationId(id);
        }
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
                    {filteredData.slice(0, 15).map((value, key) => (
                        <div
                            className="dataItem"
                            key={key}
                            onClick={() => handleClick(value._id)}
                        >
                            <p className="uni-name">{value.name}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

SearchBar.propTypes = {
    placeholder: PropTypes.string.isRequired,
};

export default SearchBar;
