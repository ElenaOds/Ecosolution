import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import About from '../components/About/About';
import Electricity from '../components/Electricity/Electricity';
import Cases from '../components/Cases/Cases';

import { Container } from './LandingPage.styled';

const LandingPage = () => {
    return (
        <Container>
          <Header />
          <Main/>
          <About />
          <Electricity/>
          <Cases />
        </Container>
    )
}

export default LandingPage;