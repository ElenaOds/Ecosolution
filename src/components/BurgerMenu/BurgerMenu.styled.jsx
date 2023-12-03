import styled from "@emotion/styled/macro";

import { ReactComponent as BurgerArrow } from '../../assets/icons/burger-arrow.svg';
import { ReactComponent as Cross } from '../../assets/icons/cross.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';

const text = `
  font-family: Fira Sans;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  color: rgba(255, 255, 255, 0.25);
`;


export const StyledBurgerArrow = styled(BurgerArrow)`
      margin-left: 8px;
      & > path {
        stroke: rgba(255, 255, 255, 0.25);
      }
`;

export const Navigation = styled.nav`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: spece-between;
    top: 36px;
    bottom: 36px;
    left: 20px;
    right: 20px;
    max-width: 480px;
    margin: auto;
    z-index: 10;
    padding: 24px;
    background-color: rgba(23, 61, 51, 0.75);
    border-radius: 25px;     
`;

export const StyledCross = styled(Cross)`
    width: 20px;
    height: 20px;
`;

export const CloseButton = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    ${text}
    color: var(--scrollBg);
    margin-bottom: 8px;
    padding: 0;

    @media screen and (min-width: 1280px) {
        font-size: 16px;
        margin-bottom: 6px;
    }

    &:hover {
        color: var(--lightGreen);
    }

    &:hover ${StyledCross} {
        & > path {
            stroke: var(--lightGreen);
        }
    }
`;

export const BurgerList = styled.ul`
    gap: 8px;
    padding-top: 24px;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
    
        background-color: var(--scrollBg);     
        top: 0;
        left: 0;
    }  

    @media screen and (min-width: 1280px) {
        padding-top: 16px;
    }
`;

export const BurgerText = styled.a`
    ${text}
    font-size: 24px;
    text-decoration: none;
`

export const BurgerItem = styled.li`
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover ${BurgerText} {
        color: var(--scrollBg);  
    }

    &:hover ${StyledBurgerArrow} {
        & > path {
            stroke: var(--scrollBg);  
        }
    }
`;

export const StyledFacebook = styled(Facebook)`
    & > path {
        stroke: var(--scrollBg);  
    }
`;

export const StyledInstagram = styled(Instagram)`
    & > path {
        stroke: var(--scrollBg);  
    }
`;

export const Social = styled.div`
    display: flex;
    gap: 8px;
`;

export const SocialLink = styled.a`
    &:hover ${StyledFacebook} {
        & > path {
            stroke: var(--lightGreen);  
        }
    }

    &:hover ${StyledInstagram} {
        & > path {
            stroke: var(--lightGreen);  
        }
    }
`;