import "./Navbar.css";
import herky2 from "../../Assets/herky2.svg";
import sacstatelogo from "../../Assets/sacstatelogo.png"
import SearchEmps from "../managingEmps/SearchEmps";

const Navbar = ({ sidebarOpen, openSidebar }) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
            <img width="50" src={sacstatelogo} alt="sacstatelogo"/>
            </div>

            <div className="navbar__left">
                <a href="#">Sac Health</a>
            </div>
            <div className="navbar__right">
                <a href="#">
                {/* <i className="fa fa-search"> */}
                    <SearchEmps/>
                {/* </i> */}
                {/* <SearchEmps/> */}
                </a>
                <a href="#">
                    <img width="30" src={herky2} alt="herky2"/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;
