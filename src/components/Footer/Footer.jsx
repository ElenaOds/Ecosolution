import { useState, useEffect } from 'react';
import { Container, StyledLogo, StyledLogoHovered, LogoWrapper, Social, StyledFacebook, StyledInstagram, Text, StyledArrowTop, Link, LinksWrapper } from './Footer.styled';

const Footer = () => {
    const [isTablet, setTablet] = useState(window.innerWidth > 768);
    const updateMedia = () => {
        setTablet(window.innerWidth > 768);
      };

      useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
      });

    return (
        <footer>
       
        {isTablet ? (
            <Container>
            <LogoWrapper href="#main" aria-label="logo">
            <StyledLogo/>
            <StyledLogoHovered/>
            </LogoWrapper>
            <Link href="#main"><StyledArrowTop /></Link>
            <Social>
                <StyledFacebook />
                <StyledInstagram />
            </Social>
            <Text>79005, Ukraine, Lviv street. Shota Rustaveli, 7</Text>
            <Text>office@ecosolution.com</Text>
            <Text>ecosolution © 2023</Text>
            </Container>
        ) : (
            <Container>
            <LinksWrapper>
                <LogoWrapper href="#main" aria-label="logo">
                    <StyledLogo/>
                    <StyledLogoHovered/>
                </LogoWrapper>
                <Link href="#main">
                    <StyledArrowTop />
                </Link>
            </LinksWrapper>
        <Social>
            <StyledFacebook />
            <StyledInstagram />
        </Social>
        <Text>79005, Ukraine, Lviv street. Shota Rustaveli, 7</Text>
        <Text>office@ecosolution.com</Text>
        <Text>ecosolution © 2023</Text>
        </Container>
        )}
    
          
        
       
        </footer>
    )
}

export default Footer;