import './App.css';
import Header from "./components/Layout/Header"
import HeaderContent from "./components/Content/HeaderContent";

import SectionAbout from "./components/Layout/SectionAbout";
import AboutContent from "./components/Content/AboutContent";
import SectionSkills from "./components/Layout/SectionSkills";
import SkillsContent from "./components/Content/SkillsContent";
import Footer from "./components/Layout/Footer";

function App() {
    return (
        <div className="App">
            <Header>
                <HeaderContent/>
            </Header>

            <SectionAbout>
                <AboutContent/>
            </SectionAbout>

            <SectionSkills>
                <SkillsContent/>
            </SectionSkills>

            <Footer>
                <p className="footer__text">&copy; 2023 My Website. All rights reserved.</p>
            </Footer>
        </div>
    );
}

export default App;
