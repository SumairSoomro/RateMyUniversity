import Navbar from "./components/Navbar";
import "./App.css";
import LandingPage from "./components/Landingpage";
import Anon from "./components/Anon";
import Editing from "./components/Editing";
import CardsWrapper from "./components/CardsWrapper";
import FeaturesArea from "./components/FeaturesArea";
import Footer from "./components/Footer";
function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="content">
                <LandingPage />
            </div>
            <div className="" >
                <CardsWrapper />
            </div>
            <div>
                <FeaturesArea />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
