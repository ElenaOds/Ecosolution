// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

import carousel1 from '../../assets/images/carousel-img1.webp';
import carousel2 from '../../assets/images/carousel-img2.webp';
import carousel3 from '../../assets/images/carousel-img3.webp';
import carousel4 from '../../assets/images/carousel-img4.webp';
import carousel5 from '../../assets/images/carousel-img5.webp';


import { Container, SubTitle, Wrapper, StyledArrowLeft, StyledArrowRight, NavWrapper, ButtonWrapper, ItemNumber, Button, StyledArrowCarousel, Card, TitleWrapper, TextWrapper, CardTitle, CardText, Img } from './Cases.styled';

const Cases = () => {

    return (
        <Container>
            <Wrapper>
            <SubTitle>Successful cases of our company</SubTitle>
            <NavWrapper>
                <ItemNumber>01<span>/05</span></ItemNumber>
                <ButtonWrapper>
                    <Button><StyledArrowLeft/></Button>
                    <Button><StyledArrowRight/></Button>
                </ButtonWrapper>
            </NavWrapper>
            </Wrapper>
            <div>
                <Card>
                    <Img src={carousel1} alt='wind power'/>
                    <TitleWrapper>
                        <CardTitle>Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”</CardTitle>
                        <StyledArrowCarousel />
                    </TitleWrapper>
                    <TextWrapper>
                        <CardText>Wind Power for auto field irrigation</CardText>
                        <CardText>July 2023</CardText>
                    </TextWrapper>
                </Card>

                <Card>
                    <Img src={carousel2} alt='solar panels'/>
                    <TitleWrapper>
                        <CardTitle>Zhytomyr city Private Enterprise “Bosch”</CardTitle>
                        <StyledArrowCarousel />
                    </TitleWrapper>
                    <TextWrapper>
                        <CardText>Solar Panels for industrial use</CardText>
                        <CardText>November 2023</CardText>
                    </TextWrapper>
                </Card>

                <Card>
                    <Img src={carousel3} alt='thermal modules'/>
                    <TitleWrapper>
                        <CardTitle>Zhytomyr city Private Enterprise “Bosch”</CardTitle>
                        <StyledArrowCarousel />
                    </TitleWrapper>
                    <TextWrapper>
                        <CardText>Thermal modules</CardText>
                        <CardText>October 2023</CardText>
                    </TextWrapper>
                </Card>

                <Card>
                    <Img src={carousel4} alt='wind power'/>
                    <TitleWrapper>
                        <CardTitle>Kherson city Private Enterprise “HealthyFarm”</CardTitle>
                        <StyledArrowCarousel />
                    </TitleWrapper>
                    <TextWrapper>
                        <CardText>Wind power</CardText>
                        <CardText>September 2021</CardText>
                    </TextWrapper>
                </Card>

                <Card>
                    <Img src={carousel5} alt='mini nuclear stations'/>
                    <TitleWrapper>
                        <CardTitle>Zaporizhia city Private Enterprise “Biotech”</CardTitle>
                        <StyledArrowCarousel />
                    </TitleWrapper>
                    <TextWrapper>
                        <CardText>Mini nuclear stations</CardText>
                        <CardText>May 2021</CardText>
                    </TextWrapper>
                </Card>
            </div>
        </Container>
    )
}

export default Cases;