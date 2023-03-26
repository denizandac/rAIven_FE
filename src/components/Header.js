import { useHref } from "react-router-dom";

function Header() {
    return (
        <div className="intro">
            <h2 className="intro-text"><span>Your Personal</span><br></br>Travel Assistant</h2>
            <a className="intro-btn" href="#UseTheRaiven">Try It</a>
        </div>

    );
}

export default Header;