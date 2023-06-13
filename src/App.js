import './App.css';
import Header from "./components/Layout/Header"
import SectionAbout from "./components/Layout/SectionAbout";
import SectionSkills from "./components/Layout/SectionSkills";
import Footer from "./components/Layout/Footer";


function App() {
    return (
        <div className="App">
            <Header/>

            <SectionAbout/>

            <SectionSkills/>

            <Footer/>


        </div>
    );
}

export default App;
