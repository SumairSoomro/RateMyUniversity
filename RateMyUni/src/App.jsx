import Navbar from "./components/Navbar";
import "./App.css";
import LandingPage from "./components/Landingpage";

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="content">{<LandingPage />}</div>
        </div>
    );
}

export default App;
