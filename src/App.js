import './App.css';
import Header from "./components/Layout/Header"


function App() {
    return (
        <div className="App">
            <Header/>

            <section className="about">
                <h2 className="about__title">About Me</h2>
                <p className="about__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor augue
                    ac mauris commodo, vel dapibus lorem eleifend.</p>
            </section>

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
