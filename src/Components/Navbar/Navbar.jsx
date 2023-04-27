import React, {useState} from 'react'
import hamBurg from "../../assets/hamburger.svg"
import hamBurgCross from "../../assets/ham-cross.svg"
import Logo from "../../assets/logo.svg"
import darkLogo from "../../assets/navbar-scroll--logo.svg"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./Navbar.css"
function Header() {

  const [navHead, setNavHead] = useState(false);
  const [navLink, setNavLink] = useState(false);

  function handleNav(){
    if(window.scrollY >=500){
        setNavHead(true);
        setNavLink(true);
    }
    else{
     setNavHead(false);
     setNavLink(false);
    }
  }
  window.addEventListener("scroll", handleNav )

    return (
        <>
        {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].slice(-1).map((expand) => (
          <Navbar key={expand} bg="light" expand={expand} className={navHead ? "navbar active mb-3" : "mb-3 navbar"}>
            <Container fluid>
              <Navbar.Brand href="#">
                <img className='nav-logo' src={navHead ? darkLogo : Logo } alt="logo" />
              </Navbar.Brand>

              <Nav className="justify-content-end flex-grow-1 nav-items">
                    <Nav.Link className={navHead ? "nav-link act" :"nav-link"} href="#action1">Properties</Nav.Link>
                    <Nav.Link className={navHead ? "nav-link act" :"nav-link"} href="#action2">Brokers</Nav.Link>
                    <Nav.Link className={navHead ? "nav-link act" :"nav-link"} href="#action3">Sellers</Nav.Link>
                    <Nav.Link className={navHead ? "nav-link act" :"nav-link"} href="#action4">Buyers</Nav.Link>
                    <Nav.Link className={navHead ? "nav-link act" :"nav-link"} href="#action5">Login/Sign up</Nav.Link>
                  </Nav>
              <Nav className="justify-content-end flex-grow-1 nav-log">
                    <Nav.Link href="#action2">Login/Sign up</Nav.Link>
                  </Nav>
                  
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3 nav-canvas--link">
                  
                    <Nav.Link href="#action6">Properties</Nav.Link>
                    <Nav.Link href="#action7">Brokers</Nav.Link>
                    <Nav.Link href="#action8">Sellers</Nav.Link>
                    <Nav.Link href="#action9">Buyers</Nav.Link>
                    <Nav.Link href="#action10">Ten-X Dashboard</Nav.Link>
                    <Nav.Link href="#action11">Careers</Nav.Link>
                    <Nav.Link href="#action12">About Us</Nav.Link>
                    <Nav.Link href="#action13">Help Center</Nav.Link>
                    <Nav.Link href="#action14">Contact : <br/> (888) 770-7332 <br/> Mon-Fri 9am8am ET </Nav.Link>
                    <p style={{color:"white", fontSize:"13px"}}>© 2023 CoStar Group</p>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>

    )
}

export default Header