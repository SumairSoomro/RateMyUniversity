import Navbar from "./components/Navbar";
import "./App.css";
import LandingPage from "./components/Landingpage";
import Anon from "./components/Anon";
import Editing from "./components/Editing";
function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="content">
                <LandingPage />
            </div>
            <div className="anonPicture">
                <Anon />
            </div>
            <div className="editingPicture">
                <Editing />
            </div>
        </div>
    );
}

export default App;
