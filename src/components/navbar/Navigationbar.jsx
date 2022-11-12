import brand from "../../assets/images/brand.svg";
import profile from "../../assets/images/profile.png";
import { FaHome } from "react-icons/fa";
import { FiSettings, FiBarChart } from "react-icons/fi";
import { BiWallet } from "react-icons/bi";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigationbar() {
  return (
      <Navbar expand="lg" className="shadow-sm py-3">
        <Container>
          <Navbar.Brand href="#home">
            <img src={brand} alt="wallet logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="font-jakarta-sans link-item me-5 font-active"><FaHome className="mb-1" /> Home</Nav.Link>
              <Nav.Link href="#link" className="font-jakarta-sans link-item me-5"><FiBarChart className="mb-1"/> Expense</Nav.Link>
              <Nav.Link href="#link" className="font-jakarta-sans link-item me-5"><BiWallet className="mb-1" /> Income</Nav.Link>
              <Nav.Link href="#link" className="font-jakarta-sans link-item me-5"><FiSettings className="mb-1" /> Settings</Nav.Link>
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
