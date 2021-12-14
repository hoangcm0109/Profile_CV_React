import './style.scss'
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Header({ menuOpen, setMenuOpen }) {
    return (
        <div className={`header ${menuOpen ? 'active' : '' }`}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">HCM IT</a>
                    <div className="itemContainer">
                        <GitHubIcon className="icon" />
                        <a className="link" href="https://github.com/hoangcm0109" rel="noreferrer" target="_blank">hoangcm0109</a>
                    </div>
                    <div className="itemContainer">
                        <FacebookIcon className="icon" />
                        <a className="link" href="https://www.facebook.com/chuminhhoang19/" rel="noreferrer" target="_blank">Chu Minh Hoàng</a>
                    </div>
                </div>
                <div className="right" >
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
