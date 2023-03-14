import logo from '../images/logo.jpeg';

function Navbar() {
    return (
        <nav className="navbar">
            <a href="/" className="navbar-logo">
                <img src={logo} alt="Logo" />
            </a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="/" className="nav-link">
                        Raiven
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/about" className="nav-link">
                        Try It
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/contact" className="nav-link">
                        About Us
                    </a>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;