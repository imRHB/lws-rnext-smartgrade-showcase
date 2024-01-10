// import "./App.css";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Students from "./components/Students";

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Students />
            <Footer />
            {/* <h1 className="text-3xl font-bold">
                SmartGrade Showcase | Learn with Sumit
            </h1> */}
        </div>
    );
}

export default App;
