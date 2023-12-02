import { Container, StyledLogo, StyledLogoHovered, LogoWrapper, Social, StyledFacebook, StyledInstagram, Text } from './Footer.styled';

const Footer = () => {
   
    return (
        <footer>
        <Container>
        <LogoWrapper href='/#header' aria-label="logo">
            <StyledLogo/>
            <StyledLogoHovered/>
        </LogoWrapper>
        <Social>
            <StyledFacebook />
            <StyledInstagram />
        </Social>
        <Text>79005, Ukraine, Lviv street. Shota Rustaveli, 7</Text>
        <Text>office@ecosolution.com</Text>
        <Text>ecosolution © 2023</Text>
      
        </Container>
        </footer>
    )
}

export default Footer;