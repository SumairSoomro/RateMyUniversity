// useFetchReviews.js
import { useState, useEffect } from 'react';

function useFetchReviews(id) {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/reviews/${id}`);
                if (!response.ok) throw new Error('Network response was not ok');

                const data = await response.json();
                setReviews(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchReviews();
    }, [id]); // Refetch when id changes

    return { reviews, loading, error };
}

export default useFetchReviews;
