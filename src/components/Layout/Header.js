function Header(){
    return (
        <header className="header">
            <h1 className="header__title">Welcome to My Web Page!</h1>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item"><a href="#" className="header__nav-link">Home</a></li>
                    <li className="header__nav-item"><a href="#" className="header__nav-link">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header