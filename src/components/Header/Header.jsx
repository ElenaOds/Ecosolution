import { Container, LogoWrapper, StyledLogo, StyledLogoHovered, StyledBurger, Wrapper, Styledlink, StyledArrow } from './Header.styled';

const Header = () => {
    return (
        <Container>
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
    )
}

export default Header;