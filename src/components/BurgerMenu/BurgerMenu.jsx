import { StyledBurgerArrow, Navigation, StyledCross, CloseButton, BurgerList, BurgerItem, BurgerText, Social, StyledFacebook, StyledInstagram, SocialLink } from './BurgerMenu.styled';

const BurgerMenu = ({toggleMenu, open}) => {

    return (
        <>
         <Navigation style={{display: open ? 'block' : 'none'}}>
              <CloseButton onClick={toggleMenu}><StyledCross/>close</CloseButton>
              <BurgerList>
                <BurgerItem>
                  <BurgerText href="#main">Main</BurgerText>
                  <StyledBurgerArrow/>
                </BurgerItem>
                <BurgerItem>
                  <BurgerText href="#about">About</BurgerText>
                  <StyledBurgerArrow/>
                </BurgerItem>
                <BurgerItem>
                  <BurgerText href="#cases">Cases</BurgerText>
                  <StyledBurgerArrow/>
                </BurgerItem>
                <BurgerItem>
                  <BurgerText href="#faq">FAQ</BurgerText>
                  <StyledBurgerArrow/>
                </BurgerItem>
                <BurgerItem>
                  <BurgerText href="#contact">Contact Us</BurgerText>
                  <StyledBurgerArrow/>
                </BurgerItem>
              </BurgerList>

              <Social>
                <SocialLink href="/#"><StyledFacebook/></SocialLink>
                <SocialLink href="/#"><StyledInstagram/></SocialLink>
              </Social>
            </Navigation>
        </>
    )
}

export default BurgerMenu;
