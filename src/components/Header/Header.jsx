import { useEffect, useState } from "react";

import { Container, LogoWrapper, StyledLogo, StyledLogoHovered, StyledBurger, Wrapper, Styledlink, StyledArrow, StyledHeader } from './Header.styled';

const Header = () => {
   const [sticky, setSticky] = useState(false);

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


window.addEventListener("scroll", setSticky)

    return (
        <StyledHeader id="header" className={sticky}>
        <Container >
            <LogoWrapper href='/' aria-label="logo">
                <StyledLogo/>
                <StyledLogoHovered/>
            </LogoWrapper>
            <Wrapper>
                <StyledBurger />
                <Styledlink to="#">Get in touch
                    <StyledArrow />
                </Styledlink>
            </Wrapper>
        </Container>
        </StyledHeader>
    )
}

export default Header;