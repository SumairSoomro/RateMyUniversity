import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styling/Login.css"; // Assuming you have a corresponding CSS file
import { Link } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submit(e) {
        e.preventDefault();
        try {
            await axios
                .post("http://localhost:8000/api/users/login", {
                    email,
                    password,
                })
                .then((res) => {
                    if (res.status === 200) {
                        // Store the JWT token in local storage
                        localStorage.setItem("token", res.data.token);

                        // Redirect to the home page
                        navigate("/", { state: { id: email } });
                    } else {
                        alert("Invalid credentials");
                    }
                })
                .catch((error) => {
                    alert("Login failed");
                    console.log(error);
                });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="login">
            <div className="login-container">
                <h1>Login</h1>
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
                    <button type="submit">Login</button>
                </form>
                <p>
                    {`Don't have an account?`}{" "}
                    <Link to="/signup">Sign up here</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
