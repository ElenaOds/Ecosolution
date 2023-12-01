import styled from '@emotion/styled';
import { ReactComponent as ArrowLeft } from '../../assets/icons/arrow_left.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow_right.svg';
import { ReactComponent as ArrowCarousel } from '../../assets/icons/arrow-carousel.svg';

export const Container = styled.section`
    padding-bottom: 36px;

    & > .swiper .swiper-wrapper {
        position: relative;
        bottom: 0;    
    }
 
    @media screen and (min-width: 768px) {
        padding-bottom: 107px;
    }

    @media screen and (min-width: 1280px) {
        padding-bottom: 127px;
    }
`;

const text = `
  font-family: Fira Sans;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.2;
  color: var(--textColor);
`;

export const SubTitle = styled.h2`
   font-family: Oswald;
   font-weight: 400;
   font-size: 28px;
   line-height: 1;
   text-float: left;
   text-transform: uppercase;
   color: var(--textColor);
   margin-bottom: 24px;

   @media screen and (min-width: 768px) {
    font-size: 36px;
    margin-bottom: 0;
    width: 272px;
}

@media screen and (min-width: 1280px) {
    font-size: 48px;
    width: 365px;
}
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 26px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 38px;
}

    @media screen and (min-width: 1280px) {
        margin-bottom: 114px;
        &::after {
            height: 96px;
        }
    }
`;

export const StyledArrowLeft = styled(ArrowLeft)`
        @media screen and (min-width: 1280px) {
        width: 84px;
        height: 84px;
    }

    &:hover {
        & > rect,
        & > path {
            stroke: rgba(151, 210, 139, 1);
    }
`;

export const StyledArrowRight = styled(ArrowRight)`
    @media screen and (min-width: 1280px) {
        width: 84px;
        height: 84px;
    }

    &:hover {
        & > rect,
        & > path {
            stroke: rgba(151, 210, 139, 1);
    }
`;

export const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;

     @media screen and (min-width: 768px) {
        position: relative;
        width: 50%;

        &::before {
            content: '';
            position: absolute;
            width: 1px;
            height: 65px;
            background-color: var(--lightGreen);     
            top: 0;
            left: 0;

            @media screen and (min-width: 1280px) {
                height: 96px;
            }
        }
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;

    @media screen and (min-width: 768px) {
        gap: 12px;
    }

    @media screen and (min-width: 1280px) {
        gap: 24px;
    }
`;

export const ItemNumber = styled.p`
    font-family: Fira Sans;
    font-weight: 300;
    font-size: 28px;
    line-height: 1.2;
    color: rgba(23, 61, 51, 0.25);

    & > .swiper-pagination-current {
        color: var(--textColor);
    }


    @media screen and (min-width: 768px) {
        margin-left: 8px;
    }

    @media screen and (min-width: 1280px) {
        margin-left: 161px;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 68px;
    height: 68px;
    padding: 4px;
    border: none;
    background-color: transparent;
    outline: none;

    @media screen and (min-width: 1280px) {
        width: 88px;
        height: 88px;
    }
`;

export const StyledArrowCarousel = styled(ArrowCarousel)`
    cursor: pointer;
    &:hover {
        & > rect {
        fill: var(--textColor);
        }
        & > path {
            stroke: var(--lightGreen)
        }
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 12px;
    background-color: var(--secondaryBgColor);

    @media screen and (min-width: 768px) {
        height: 322px;
        padding-bottom: 36px;
    }

    @media screen and (min-width: 1280px) {
        height: 480px;
        padding-bottom: 36px;
    }
`;

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 24px 12px 0 12px;
    margin-bottom: 21px;

    @media screen and (min-width: 768px) {
        margin-bottom: auto;
    }

    @media screen and (min-width: 1280px) {
        padding: 36px 48px 0 48px;
        margin-bottom: auto;
    }
`;

export const TextWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 12px 12px 0 12px;

    &::before {
        content: '';
        position: absolute;
        width: 95%;
        height: 1px;
        background-color: var(--lightGreen);     
        top: 0;
        left: 12px;
    }
    
    @media screen and (min-width: 1280px) {
        padding: 24px 48px 0 48px;
        &::before {
            width: 85%;
            left: 48px;
        }
    }
`;

export const CardTitle = styled.p`
    ${text}
    font-size: 18px;
    text-align: left;
    width: 200px;

    @media screen and (min-width: 768px) {
        font-size: 20px;
        width: 270px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 24px;
        width: 375px;
        text-align: left;
    }

`;

export const CardText = styled.p`
    ${text}
    @media screen and (min-width: 768px) {
        font-size: 14px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 16px;
    }
`;

export const Img = styled.img`
    width: 100%;
`;
