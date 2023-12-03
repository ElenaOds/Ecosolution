import { useEffect, useState } from "react";
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { Container, LogoWrapper, StyledLogo, StyledLogoHovered, StyledBurger, Wrapper, Styledlink, StyledArrow, StyledHeader, Button } from './Header.styled';

const Header = () => {
   const [sticky, setSticky] = useState(false);
   const [open, setOpen] = useState(false);

   useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
  
    const header = document.getElementById("header");
    
    const sticky = header.offsetTop;
  
    if (window.scrollY > sticky) {
      setSticky("sticky");
    } else {
      setSticky("");
    }
  };

  const toggleMenu = () => {
    setOpen(!open);
  };


window.addEventListener("scroll", setSticky)

    return (
        <StyledHeader id="header" className={sticky}>
        <Container >
            <LogoWrapper href='/' aria-label="logo">
                <StyledLogo/>
                <StyledLogoHovered/>
            </LogoWrapper>
            <Wrapper>
              <Button onClick={toggleMenu}><StyledBurger /></Button>
                <Styledlink href="#contact" aria-label="link to Contact us section">Get in touch
                    <StyledArrow />
                </Styledlink>
            </Wrapper>
            <BurgerMenu toggleMenu={toggleMenu} open={open}/>
        </Container>
        </StyledHeader>
    )
}

export default Header;