import "./Navbar.css";
import herky2 from "../../Assets/herky2.svg";

const Navbar = ({ sidebarOpen, openSidebar }) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars"></i>
            </div>
            <div className="navbar__left">
                <a className="active_link" href="#">Admin</a>
                <a href="#">Share Data</a>
                <a href="#">More</a>
            </div>
            <div className="navbar__right">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>
                <a href="#">
                    <i className="fa fa-clock"></i>
                </a>
                <a href="#">
                    <img width="30" src={herky2} alt="herky2"/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;