import brand from "../../assets/images/brand.svg";
import profile from "../../assets/images/profile.png";
import { FaHome } from "react-icons/fa";
import { FiBarChart } from "react-icons/fi";
import { BiWallet } from "react-icons/bi";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";


function Navigationbar() {
  return (
      <Navbar expand="lg" className="py-3">
        <Container>
          <Navbar.Brand href="#home">
            <img src={brand} alt="wallet logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                to="/"
                className={({ isActive}) => isActive ? "font-active font-jakarta-sans link-item me-5 mt-2 text-decoration-none" : "font-jakarta-sans link-item me-5 mt-2 text-decoration-none"
                  }>
                <FaHome className="mb-1" />
                Home
              </NavLink>
              <NavLink
                to="/expense"
                className={({ isActive}) => isActive ? "font-active font-jakarta-sans link-item me-5 mt-2 text-decoration-none" : "font-jakarta-sans link-item me-5 mt-2 text-decoration-none"
                  }>
                <FiBarChart className="mb-1" />
                Expense
              </NavLink>
              <NavLink
                to="/income"
                className={({ isActive}) => isActive ? "font-active font-jakarta-sans link-item me-5 mt-2 text-decoration-none" : "font-jakarta-sans link-item me-5 mt-2 text-decoration-none"
                  }>
                <BiWallet className="mb-1" />
                Income
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        <div className="profile me-5">
          <img src={profile} alt="profile"/>
        </div>
        </Container>
      </Navbar>
  );
}

export default Navigationbar;
