import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { CompanyLogo, CompanyLogo_fit } from '../images';

function Header() {
    const navigate = useNavigate();
    const mainBtn = () => { navigate('/'); };
    const greetBtn = () => { navigate('/company'); handleToggle(); };
    const itemBtn = () => { navigate('/product'); handleToggle(); };
    const contBtn = () => { navigate('/contact'); handleToggle(); };

    const handleToggle = () => {
        const header_control = document.querySelector('#header_control');
        // console.log(header_control);
    }

    // const clicked_input = document.querySelectorAll('.headerMenu');
    // clicked_input.forEach((element) => {
    //     element.addEventListener("click", (evt) => {
    //         console.log('test');
    //     });
    // })

    // const btn = document.querySelector('.header a');
    // const handleClickBtn = (event) => {
    // }

    // document.addEventListener("click", (event) => {
    //     if (condition) {
    //     }
    //     console.log(event.target);
    // });

  
    document.addEventListener("scroll", () => {
        const navbar = document.querySelector("#header");
        const scrollY = window.scrollY;
        
        if (scrollY > 580) {
            navbar.style.backgroundColor = '#FFFFFF';
            
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        }
        navbar.style.transition = 'all var(--animation-duration) ease-in';
        navbar.style.transitionDuration = '0.4s';
        navbar.style.transitionTimingFunction = 'ease';
    });

    return(
        <Navbar expand='md' id="header" className="header mb-3" fixed="top">
                <Navbar.Brand onClick={mainBtn}>
                    <img className="headerLogo" src={CompanyLogo_fit} alt="HT" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse 
                    id="responsive-navbar-nav"
                    placement="end"
                >
                    <Nav className="headerMenu justify-content-end flex-grow-1 pe-5">
                        <Nav.Link onClick={greetBtn}>회사소개</Nav.Link>
                        <Nav.Link onClick={itemBtn}>제품소개</Nav.Link>
                        <Nav.Link onClick={contBtn}>고객센터</Nav.Link>
                    </Nav>
                </Navbar.Collapse >
        </Navbar>
    );
}

export default Header;