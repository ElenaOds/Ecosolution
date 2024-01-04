import { useEffect, useState  } from "react";
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

  const openMenu = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);


window.addEventListener("scroll", setSticky)

useEffect(() => {
  const handleEscape =(event) => {
    if (event.code === "Escape") {
      setOpen(false);
    }
  }
  document.addEventListener('keydown', handleEscape);

  return () => {
    document.removeEventListener('keydown', handleEscape);
  };
}, []);

    return (
        <StyledHeader id="header" className={sticky}>
        <Container >
            <LogoWrapper href='#main' aria-label="logo">
                <StyledLogo/>
                <StyledLogoHovered/>
            </LogoWrapper>
            <Wrapper>
              <Button onClick={openMenu} type="button" aria-label="open burger menu"><StyledBurger /></Button>
                <Styledlink href="#contact" aria-label="link to Contact us section">Get in touch
                    <StyledArrow />
                </Styledlink>
            </Wrapper>
            <BurgerMenu closeMenu={closeMenu} open={open}/>
        </Container>
        </StyledHeader>
    )
}

export default Header;