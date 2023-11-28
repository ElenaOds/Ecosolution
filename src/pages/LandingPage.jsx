import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';

import { Container } from './LandingPage.styled';

const LandingPage = () => {
    return (
        <Container>
          <Header />
          <Hero/>
        </Container>
    )
}

export default LandingPage;