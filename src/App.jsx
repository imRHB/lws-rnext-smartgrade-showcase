// import "./App.css";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Students from "./components/Students";
import { STUDENT_RESULTS } from "./data/results";

function App() {
    console.log(STUDENT_RESULTS);

    return (
        <>
            <Navbar />
            <Hero />
            <Students />
            <Footer />
        </>
    );
}

export default App;
