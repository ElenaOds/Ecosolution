import { useState, useEffect } from 'react';
import { Container, StyledLogo, StyledLogoHovered, LogoWrapper, Social, StyledFacebook, StyledInstagram, Text, StyledArrowTop, Link, LinksWrapper, SocialLink } from './Footer.styled';

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
            <SocialLink href="https://www.facebook.com/" rel="noopener noreferrer nofollow" target='_blank' aria-label="link to Facebook"><StyledFacebook /></SocialLink>
            <SocialLink href="https://www.instagram.com/" rel="noopener noreferrer nofollow" target='_blank' aria-label="link to Instagram"><StyledInstagram /></SocialLink>
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
            <SocialLink href="https://www.facebook.com/" rel="noopener noreferrer nofollow" target='_blank' aria-label="link to Facebook"><StyledFacebook /></SocialLink>
            <SocialLink href="https://www.instagram.com/" rel="noopener noreferrer nofollow" target='_blank' aria-label="link to Instagram"><StyledInstagram /></SocialLink>
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