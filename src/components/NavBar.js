import logo from '../images/logo.jpeg';
import { useNavigate } from 'react-router-dom';
function Navbar() {

    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="/" className="nav-link">
                        Raiven
                    </a>
                </li>
                <li className="navbar-logo">
                    <img src={logo} alt="Logo" />
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