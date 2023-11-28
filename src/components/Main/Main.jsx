import { ReactComponent as ArrowRight } from '../../assets/icons/arrow-right.svg';
import { Container, Title, Text, StyledLink, Wrapper, AddressWrapper, Address, CopyRight, Img, Cover } from './Main.styed';

const Main = () => {
    return (
        <Container>
        <Wrapper>
            <Title>RENEWABLE ENERGY For any task</Title>
            <Cover>
            <Text>Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass</Text>
            <StyledLink to="#">
                Learn more
                <ArrowRight/>
            </StyledLink>
            </Cover> 
        </Wrapper>

        <AddressWrapper>
            <Address>79005, Ukraine, Lviv street. Shota Rustaveli, 7</Address>
            <Text style={{ marginBottom: "0" }}>office@ecosolution.com</Text>
            <CopyRight>ecosolution © 2023</CopyRight>
        </AddressWrapper>
        <Img />
        </Container>
    )
}

export default Main;