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
            <Link href="#main" aria-label="link to Main section"><StyledArrowTop /></Link>
            <Social>
            <a href="https://www.facebook.com/" target='blank' aria-label="link to Facebook"><StyledFacebook /></a>
            <a href="https://www.instagram.com/" target='blank' aria-label="link to Instagram"><StyledInstagram /></a>
            </Social>
            <Text>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</Text>
            <Text>office@ecosolution.com</Text>
            <Text>ecosolution © 2023</Text>
            </Container>
        ) : (
            <Container>
            <LinksWrapper>
                <LogoWrapper href="#main" aria-label="logo" >
                    <StyledLogo/>
                    <StyledLogoHovered/>
                </LogoWrapper>
                <Link href="#main" aria-label="link to Main section">
                    <StyledArrowTop />
                </Link>
            </LinksWrapper>
        <Social>
            <a href="https://www.facebook.com/" target='blank' aria-label="link to Facebook"><StyledFacebook /></a>
            <a href="https://www.instagram.com/" target='blank' aria-label="link to Instagram"><StyledInstagram /></a>
        </Social>
        <Text>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</Text>
        <Text>office@ecosolution.com</Text>
        <Text>ecosolution © 2023</Text>
        </Container>
        )}
    
          
        
       
        </footer>
    )
}

export default Footer;