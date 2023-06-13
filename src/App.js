import './App.css';
import Header from "./components/Layout/Header"
import HeaderContent from "./components/Content/HeaderContent";

import SectionAbout from "./components/Layout/SectionAbout";
import AboutContent from "./components/Content/AboutContent";

function App() {
    return (
        <div className="App">
            <Header>
                <HeaderContent/>
            </Header>

            <SectionAbout>
                <AboutContent/>
            </SectionAbout>

            <section className="skills">
                <h2 className="skills__title">My Skills</h2>
                <ul className="skills__list">
                    <li className="skills__item">HTML</li>
                    <li className="skills__item">CSS</li>
                    <li className="skills__item">JavaScript</li>
                </ul>
            </section>

            <footer className="footer">
                <p className="footer__text">&copy; 2023 My Website. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
