import './App.css';
import Header from "./components/Layout/Header"
import HeaderContent from "./components/Content/HeaderContent";

import SectionAbout from "./components/Layout/SectionAbout";
import AboutContent from "./components/Content/AboutContent";
import SectionSkills from "./components/Layout/SectionSkills";
import SkillsContent from "./components/Content/SkillsContent";

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

            <footer className="footer">
                <p className="footer__text">&copy; 2023 My Website. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
