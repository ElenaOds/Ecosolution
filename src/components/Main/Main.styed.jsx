import styled from '@emotion/styled';
import hero from '../../assets/images/hero.webp';

const text = `
  font-family: Fira Sans;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  color: var(--textColor);
`;
export const Container = styled.section`
    padding-top: 126px;
    padding-bottom: 36px;
 
    @media screen and (min-width: 768px) {
        padding-top: 128px;
        padding-bottom: 100px;
    }

    @media screen and (min-width: 1280px) {
        padding-top: 176px;
        padding-bottom: 120px;
    }
`;

export const Title = styled.h1`
  font-family: Oswald;
  font-weight: 400;
  font-size: 36px;
  line-height: 1;
  text-float: left;
  text-transform: uppercase;
  color: var(--textColor);
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    margin-bottom: 0;
}

@media screen and (min-width: 1280px) {
    font-size: 64px;
    margin-bottom: 0;
}
`;

export const Text = styled.p`
    ${text}
    margin-bottom: 24px;
    text-align: justify;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    text-align: start;
}
`;

export const StyledLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    width: 141px;
    height: 39px;
    padding: 0, 4px, 0, 16px;
    border: 1px solid var(--lightGreen);
    border-radius: 500px;
    gap: 12px;
    ${text}
    line-height: 1.125px;

    &:hover {
        border: 1px solid var(--textColor);
        background-color: var(--textColor);
        color: var(--lightGreen);
    }
`;


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;

    @media screen and (min-width: 768px) {
       display: grid;
       grid-template-columns: 300px 370px;
       grid-gap: 0 65px;
   
    
       & > :nth-of-type(1) {
        grid-column-start: 1;  
        grid-row: span 2;
      }

      & > :nth-of-type(3) {
        grid-column-start: 2;
        grid-row-start: 2;
      }

      @media screen and (min-width: 1280px) {
        grid-template-columns: 485px 400px;
        grid-gap: 0 200px;
        
      }
    }   
`;

export const AddressWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 24px;
    margin-bottom: 36px;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: var(--lightGreen);     
        top: 0;
        left: 0;
    }

    @media screen and (min-width: 768px) {
        margin-bottom: 40px;
        padding-top: 16px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      @media screen and (min-width: 1280px) {
        margin-bottom: 36px;
        padding-top: 12px;
      }
`

export const Address = styled.p`
    ${text}
    margin-bottom: 8px;

    @media screen and (min-width: 768px) {
        margin-bottom: 0;
    }
`;

export const CopyRight = styled.p`
    ${text}
    display: none;

    @media screen and (min-width: 768px) {
        display: block;
    }
`;

export const Img = styled.img`
    background-image: url(${hero});
  
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 200px;
    margin-bottom: 36px;


    @media screen and (min-width: 768px) {
        height: 348px;
        margin-bottom: 101px;
    }

    @media screen and (min-width: 1280px) {
        height: 524px;
        margin-bottom: 123px;
    }
`;