import CountUp from 'react-countup';

import { Container, SubTitle, Wrapper, Counter, Text } from './Electricity.styled';

const Electricity = () => {
    return (
        <Container>
       <SubTitle>Electricity we produced <br/>for all time</SubTitle>
       <Wrapper>
       <Counter>
       <CountUp end={1134147814} enableScrollSpy={true} duration={5} separator={'.'}/>
       </Counter>
       <Text>kWh</Text>
       </Wrapper>
        </Container>
    )
}

export default Electricity;

