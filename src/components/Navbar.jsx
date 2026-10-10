import {Link, useLocation} from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.svg";

const Navbar = () => {
    const location = useLocation();
    const links =[
        {name: "Signup", path: "/signup"},
        {name: "About", path: "/about"},
        {name: "Products", path: "/products"},
        {name: "Pricing", path: "/pricing"},
        {name: "Support", path: "/support"},
    ];

  return (
    <div className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
                <img src={logo} alt="Zerodha" className="logo-img" />
            </Link>
            <ul className="navbar-links">
                {links.map((link) => (
                    <li key={link.name}>
                        <Link
                            to={link.path}
                            className={location.pathname === link.path ? "active" : ""}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
