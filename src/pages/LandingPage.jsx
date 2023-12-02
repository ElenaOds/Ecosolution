import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import About from '../components/About/About';
import Electricity from '../components/Electricity/Electricity';
import Cases from '../components/Cases/Cases';
import Faq from '../components/Faq/Faq';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

import { Container } from './LandingPage.styled';

const LandingPage = () => {
    return (
      <>
      <Header />
        <Container>
          <Main />
          <About />
          <Electricity />
          <Cases />
          <Faq />
          <Contact />
          <Footer />
        </Container>
      </>
    )
}

export default LandingPage;