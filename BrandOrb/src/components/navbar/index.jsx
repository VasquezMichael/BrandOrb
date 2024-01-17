import {
  Container,
  Wrapper,
  Menu,
  MenuItem,
  LogoContainer,
  MobileIcon,
} from "./style.js";

import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Logo from "../../assets/LogoOrb.png";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container className={scrolled ? "scrolled" : ""}>
      <Wrapper>
        <LogoContainer className="Logo-Container">
          <img src={Logo} alt="" />
        </LogoContainer>
        <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <Menu open={showMobileMenu} className={scrolled ? "scrolled" : ""}>
          <MenuItem>
            <Link
              className="Link"
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              Home
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              className="Link"
              activeClass="active"
              to="servicios"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              Servicios
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              className="Link"
              activeClass="active"
              to="our-team"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              Equipo
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              className="Link"
              activeClass="active"
              to="our-jobs"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              Galeria
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              className="Link"
              activeClass="active"
              to="footer"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              Contacto
            </Link>
          </MenuItem>
        </Menu>
      </Wrapper>
    </Container>
  );
};
export default Navbar;
