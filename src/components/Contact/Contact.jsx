import Form from '../Form/Form';
import { Container, SubTitle, List, Name, Contacts, StyledPhone, InfoWrapper, Info, StyledEmail, StyledAddress, StyledFacebook, StyledInstagram, Social, Wrapper } from './Contact.styled';

const Contact = () => {

    return (
        <Container id="contact">
            <SubTitle>Contact us</SubTitle>
            <Wrapper>
            <List>
                <li>
                    <Name>Phone:</Name>
                    <InfoWrapper style={{cursor: 'pointer'}}>
                    <StyledPhone style={{marginBottom: '12px'}}/>
                    <Contacts href="tel:+380981234567" style={{marginBottom: '12px'}} aria-label="telephone number">38 (098) 12 34 567</Contacts>
                    </InfoWrapper>
                    <InfoWrapper style={{cursor: 'pointer'}}>
                        <StyledPhone />
                    <Contacts href="tel:+380981234567" aria-label="phone number">38 (093) 12 34 567</Contacts>
                    </InfoWrapper>
                </li>
                <li>
                    <Name>E-mail:</Name>
                    <InfoWrapper style={{cursor: 'pointer'}}>
                        <StyledEmail />
                    <Contacts href="mailto:office@ecosolution.com" aria-label="email">office@ecosolution.com</Contacts>
                    </InfoWrapper>
                </li>
                <li>
                    <Name>Address:</Name>
                    <InfoWrapper>
                        <StyledAddress/>
                    <Info>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</Info>
                    </InfoWrapper>
                </li>
                <li>
                    <Name>Social Networks:</Name>
                    <InfoWrapper>
                        <Social href="https://www.facebook.com/" target='blank' aria-label="link to Facebook"><StyledFacebook/></Social>
                        <Social href="https://www.instagram.com/" target='blank' aria-label="link to Instagram"><StyledInstagram/></Social>
                    </InfoWrapper>
                </li>
            </List>
            <Form/>
            </Wrapper>
            </Container>
    )
}

export default Contact;