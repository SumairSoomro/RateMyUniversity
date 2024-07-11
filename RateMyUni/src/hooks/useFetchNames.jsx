import { useState, useEffect } from "react";

const useFetchNames = (universityId) => {
    const [universityName, setUniversityName] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchName = async () => {
            try {
                const response = await fetch(
                    `http://localhost:8000/api/universities/${universityId}`
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch university name");
                }
                const data = await response.json();
                setUniversityName(data.name);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        if (universityId) {
            fetchName();
        }
    }, [universityId]);

    return { universityName, loading, error };
};

export default useFetchNames;
