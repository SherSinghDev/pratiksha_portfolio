import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { close } from "../store/slices/sidebarSlice"
import { beActive } from "../store/slices/menu";

export default function Sidebar() {
    const sidebar = useSelector((state) => state.sidebar)
    const menu = useSelector((state) => state.menu)
    const dispatch = useDispatch()
    let sideClass = !sidebar ? "sidebar side-hidden" : 'sidebar';
    function trickySidebar() {
        if (window.innerWidth < 850) {
            dispatch(close())
        }
    }
    return (
        <>
            <div className={sideClass}>
                <div className="logo">
                    <Link to="/">Pratiksha Thakur</Link>
                </div>
                <div className="menu-bars" onClick={() => dispatch(close())}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <ul className="menu">
                    <li>
                        <NavLink name="home"
                            className={(menu == "home") ? "active" : ''}
                            to="/"
                            onClick={trickySidebar}>
                            <i className="fa-solid fa-house"></i>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink name="about"
                            className={(menu == "about") ? "active" : ''}
                            to="/about"
                            onClick={trickySidebar}>
                            <i className="fa-solid fa-user"></i>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink name="service"
                            className={(menu == "services") ? "active" : ''}
                            to="/services"
                            onClick={trickySidebar}>
                            <i className="fa-solid fa-list"></i>
                            Services
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink name="portfolio"
                            className={(menu == "portfolio") ? "active" : ''}
                            to="/portfolio">
                            <i className="fa-solid fa-briefcase"></i>
                            Portfolio
                        </NavLink>
                    </li> */}
                    <li>
                        <NavLink name="contact"
                            className={(menu == "contact") ? "active" : ''}
                            to="/contact"
                            onClick={trickySidebar}>
                            <i className="fa-solid fa-comments"></i>
                            Contact Me
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}