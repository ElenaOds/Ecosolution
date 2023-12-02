import styled from "@emotion/styled/macro";

import { ReactComponent as Phone } from '../../assets/icons/phone.svg';
import { ReactComponent as Email } from '../../assets/icons/email.svg';
import { ReactComponent as Address } from '../../assets/icons/address.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';

export const Container = styled.section`
    padding-bottom: 36px;

    @media screen and (min-width: 768px) {
        padding-bottom: 100px;
    }

    @media screen and (min-width: 1280px) {
        padding-bottom: 120px;
    }
`;

const text = `
  font-family: Fira Sans;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  color: var(--textColor);
`;

export const SubTitle = styled.h2`
   font-family: Oswald;
   font-weight: 400;
   font-size: 28px;
   line-height: 1;
   text-align: center;
   text-transform: uppercase;
   color: var(--textColor);
   margin-bottom: 24px;

   @media screen and (min-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
}

@media screen and (min-width: 1280px) {
    font-size: 48px;
    margin-bottom: 120px; 
}
`;

export const List = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 24px;

    @media screen and (min-width: 768px) {
        margin-bottom: 0;
    }

    @media screen and (min-width: 1280px) {
        gap: 32px;
    }
`;

export const Name = styled.p`
    ${text}
    margin-bottom: 8px;

    @media screen and (min-width: 1280px) {
        margin-bottom: 16px;
    }
`;

export const Contacts = styled.a`
    ${text}
    font-size: 20px;
    text-decoration: none;

    
    @media screen and (min-width: 1280px) {
        font-size: 24px;
    }
`;

export const Info = styled.p`
    ${text}
    font-size: 20px;

    
    @media screen and (min-width: 1280px) {
        font-size: 24px;
    }
`;

export const Social = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;

`;

export const StyledPhone = styled(Phone)`
    width: 24px;
    height: 24px;
`;

export const StyledEmail = styled(Email)`
    width: 24px;
    height: 24px;
`;

export const StyledAddress = styled(Address)`
    width: 24px;
    height: 24px;
`;

export const StyledFacebook = styled(Facebook)`
    width: 24px;
    height: 24px;

    &:hover  {
         & > path {
        stroke: var(--lightGreen);
        }
    }
`;

export const StyledInstagram = styled(Instagram)`
    width: 24px;
    height: 24px;

    &:hover  {
         & > path {
        stroke: var(--lightGreen);
        }
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

   
    &:hover ${StyledPhone} {
        & > path {
        stroke: var(--lightGreen);
        }
    }

    &:hover ${StyledEmail} {
        & > path {
        stroke: var(--lightGreen);
        }
    }
`;

export const Wrapper = styled.div`
    @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0 24px;
    }

    @media screen and (min-width: 1280px) {
        gap: 0 48px;
    }
`