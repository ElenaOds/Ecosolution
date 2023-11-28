import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

import { Container } from './LandingPage.styled';

const LandingPage = () => {
    return (
        <Container>
          <Header />
          <Main/>
        </Container>
    )
}

export default LandingPage;