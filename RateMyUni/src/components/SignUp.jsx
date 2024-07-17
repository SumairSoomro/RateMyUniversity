import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styling/SignUp.css"; // Assuming you have a corresponding CSS file

function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submit(e) {
        e.preventDefault();
        try {
            await axios
                .post("http://localhost:8000/api/users", {
                    email,
                    password,
                })
                .then((res) => {
                    if (res.status === 201) {
                        // Check for the status code for successful registration
                        navigate("/login"); // Redirect to the login page
                    } else {
                        alert("User already exists");
                    }
                })
                .catch((error) => {
                    alert("Registration failed");
                    console.log(error);
                });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="signup">
            <div className="signup-container">
                <h1>Signup</h1>
                <form onSubmit={submit}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <button type="submit">Sign Up</button>
                </form>
                <p>
                    Already have an account? <a href="/login">Login here</a>
                </p>
            </div>
        </div>
    );
}

export default Signup;
