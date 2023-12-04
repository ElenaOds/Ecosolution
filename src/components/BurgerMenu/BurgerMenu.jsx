import React, { useState, useEffect, useRef } from 'react';
import { StyledBurgerArrow, BurgerWrapper, StyledCross, CloseButton, BurgerList, BurgerItem, BurgerText, Social, StyledFacebook, StyledInstagram, SocialLink, Navigation, Backdrop } from './BurgerMenu.styled';

const BurgerMenu = ({toggleMenu, open}) => {
  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);
  

  useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
          const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
          if (visibleSection) {
            setActiveSection(visibleSection.id);
          }
        });

        const sections = document.querySelectorAll('section');
    
        sections.forEach((section) => {
          observer.current.observe(section);
        });

        return () => {
          sections.forEach((section) => {
            observer.current.unobserve(section);
          });
        };
      }, []);


    return (
        <>
        <Backdrop onClick={toggleMenu} style={{display: open ? 'block' : 'none'}}></Backdrop>
         <BurgerWrapper onClick={toggleMenu} className={open ? 'active' : 'none' }>
              <CloseButton><StyledCross/>close</CloseButton>
              <Navigation >
         
             <BurgerList> 
               <BurgerItem className={activeSection === 'main' ? 'active' : ''}> 
                  <BurgerText href="#main" aria-label="link to Main section">Main</BurgerText>
                  <StyledBurgerArrow/>
                </BurgerItem>
                <BurgerItem className={activeSection === 'about' ? 'active' : ''}>
                  <BurgerText href="#about" aria-label="link to About section">About</BurgerText>
                  <StyledBurgerArrow/>
                </BurgerItem>
                <BurgerItem className={activeSection === 'cases' ? 'active' : ''}>
                  <BurgerText href="#cases" aria-label="link to Cases section">Cases</BurgerText>
                  <StyledBurgerArrow/>
                </BurgerItem>
                <BurgerItem className={activeSection === 'faq' ? 'active' : ''}>
                  <BurgerText href="#faq" aria-label="link to Frequently asked section">FAQ</BurgerText>
                  <StyledBurgerArrow/>
                </BurgerItem>
                <BurgerItem className={activeSection === 'contact' ? 'active' : ''}>
                  <BurgerText href="#contact"  aria-label="link to Contact us section">Contact Us</BurgerText>
                  <StyledBurgerArrow/>
                </BurgerItem> 
               </BurgerList> 
          
              <Social>
                <SocialLink href="https://www.facebook.com/" target='blank' aria-label="link to Facebook"><StyledFacebook/></SocialLink>
                <SocialLink href="https://www.instagram.com/" target='blank'aria-label="link to Instagram"><StyledInstagram/></SocialLink>
              </Social>
              
              </Navigation>
            </BurgerWrapper>
        </>
    )
}

export default BurgerMenu;
