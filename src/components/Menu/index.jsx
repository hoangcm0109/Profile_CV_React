import './style.scss';

export default function index({ menuOpen, setMenuOpen }) {
    return (
        <div className={`menu ${menuOpen ? 'active' : ''}`}>
            <ul className="menu-main" onClick={() => setMenuOpen(!menuOpen)}>
                <li className="menu-item">
                    <a href="#intro" className="menu-link">Home</a>
                </li>
                <li className="menu-item">
                    <a href="#portfolio" className="menu-link">Portfolio</a>
                </li>
                <li className="menu-item">
                    <a href="#work" className="menu-link">Work</a>
                </li>
                <li className="menu-item">
                    <a href="#comment" className="menu-link">Comment</a>
                </li>
                <li className="menu-item">
                    <a href="#contact" className="menu-link">Contact</a>
                </li>
            </ul>
            
        </div>
    )
}
