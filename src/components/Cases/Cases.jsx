import { useRef, useCallback} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/pagination';

import carousel1 from '../../assets/images/carousel-img1.webp';
import carousel2 from '../../assets/images/carousel-img2.webp';
import carousel3 from '../../assets/images/carousel-img3.webp';
import carousel4 from '../../assets/images/carousel-img4.webp';
import carousel5 from '../../assets/images/carousel-img5.webp';

import { Container, SubTitle, Wrapper, StyledArrowLeft, StyledArrowRight, NavWrapper, ButtonWrapper, Button, ItemNumber, StyledArrowCarousel, Card, TitleWrapper, TextWrapper, CardTitle, CardText, Img } from './Cases.styled';


const Cases = () => {
    const breakpoints = {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: '24px',
        },
        1280: {
            slidesPerView: 2,
            spaceBetween: '48px',
          },
      };

      const swiperRef = useRef(null);

      const handlePrev = useCallback(() => {
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slidePrev();
      }, []);
    
      const handleNext = useCallback(() => {
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slideNext();
      }, []);
    
 

    return (
        <Container id='cases'>
            <Wrapper>
            <SubTitle>Successful cases of our company</SubTitle>
            <NavWrapper>
                <ItemNumber className="custom-pagination"></ItemNumber>
                <ButtonWrapper>
                    <Button onClick={handlePrev}><StyledArrowLeft /></Button>
                    <Button onClick={handleNext}><StyledArrowRight /></Button>
                </ButtonWrapper>
            </NavWrapper>
            </Wrapper> 
            
            <Swiper
                breakpoints={breakpoints}
                modules={[ Pagination]}
                pagination={{
                    el: '.custom-pagination',
                    type: 'fraction',
                }}
                loop={true}
                className="mySwiper"
                ref={swiperRef}
            >
            
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
          
            </Swiper>
        </Container>
    )
}

export default Cases;