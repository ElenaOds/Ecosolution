import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import About from '../components/About/About';
import Electricity from '../components/Electricity/Electricity';

import { Container } from './LandingPage.styled';

const LandingPage = () => {
    return (
        <Container>
          <Header />
          <Main/>
          <About />
          <Electricity/>
        </Container>
    )
}

export default LandingPage;