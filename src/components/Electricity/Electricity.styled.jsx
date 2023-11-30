import styled from '@emotion/styled';

export const Container = styled.section`
    padding-bottom: 36px;

    @media screen and (min-width: 768px) {
        padding-bottom: 100px;
    }

    @media screen and (min-width: 1280px) {
        padding-bottom: 120px;
    }
`;

export const SubTitle = styled.h2`
   font-family: Oswald;
   font-weight: 400;
   font-size: 28px;
   line-height: 1;
   text-align: center;
   text-transform: uppercase;
   color: var(--textColor);
   margin-bottom: 96px;

   @media screen and (min-width: 768px) {
    font-size: 36px;
    margin-bottom: 135px;
}

@media screen and (min-width: 1280px) {
    font-size: 48px;
    margin-bottom: 120px; 
}
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        content: '';
        position: absolute;
        width: 1px;
        height: 48px;
        background-color: var(--lightGreen);     
        top: -70px;
        left: 50%;
    }

    @media screen and (min-width: 768px) {
        &::before {
            height: 87px;
            top: -105px;
        }
    }

    @media screen and (min-width: 1280px) {
        &::before {
            top: -90px;
        }
    }
`;

export const Counter = styled.p`
   font-family: Oswald;
   font-weight: 700;
   font-size: 48px;
   line-height: 1;
   text-align: center;
   color: var(--lightGreen);
   margin-right: 8px;

   @media screen and (min-width: 768px) {
    font-size: 100px;
    margin-right: 24px;
    }

   @media screen and (min-width: 1280px) {
    font-size: 164px;
   }
`;

export const Text = styled.p`
   font-family: Oswald;
   font-weight: 400;
   font-size: 24px;
   line-height: 1;
   text-align: center;
   color: var(--textColor);

   @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 1.7;
    }

    @media screen and (min-width: 1280px) {
        font-size: 48px;
        line-height: 1;
    }
`;