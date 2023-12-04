import styled from "@emotion/styled/macro";
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as LogoHovered } from '../../assets/icons/logo_hover.svg';
import { ReactComponent as ArrowTop } from '../../assets/icons/arrow-top.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';

export const Container = styled.div`
    position: relative;
    padding-top: 24px;
    padding-bottom: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


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
        padding-top: 40px;
        padding-bottom: 40px;
        display: grid;
        grid: auto-flow / 2fr 1fr 1fr;
        row-gap: 16px;
        column-gap: 24px;

        & > :nth-of-type(2) {
            grid-column-start: 3;  
            grid-row-start: 1;
        }

        & > :nth-child(3) {
            grid-column-start: 2;  
            grid-row-start: 1;
        }

        & > :nth-child(4) {
            grid-column-start: 1;  
            grid-row-start: 2;
        }

        & > :nth-child(5) {
            grid-column-start: 2;  
            grid-row-start: 2;
        }

        & > :nth-child(6) {
            grid-column-start: 3;  
            grid-row-start: 2;
        }

        @media screen and (min-width: 1280px) { 
            grid: auto-flow / 3fr 1fr 1fr;
            column-gap: 50px;
        }
`;

export const StyledLogo = styled(Logo)`
    display: block;
`;

export const StyledLogoHovered = styled(LogoHovered)`
    display: none;
`;

export const LogoWrapper = styled.a`
    text-decoration: none;
    cursor: pointer;
   
    

    &:hover ${StyledLogo} {
        display: none;
    }

    &:hover ${StyledLogoHovered} {
        display: block;
    }

    @media screen and (min-width: 768px) {
        margin-bottom: 0;
    }
`;

export const StyledArrowTop = styled(ArrowTop)`
    &:hover  {
        & > rect {
            fill: var(--textColor);
        }
    
         & > path {
        stroke: var(--lightGreen);
        }
    }
`;

export const Link = styled.a`
    cursor: pointer; 

    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: flex-end;
    }
`;

export const LinksWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
`;

export const Social = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 24px;

    @media screen and (min-width: 768px) {
        margin-bottom: 0;
    }
`;

export const StyledFacebook = styled(Facebook)`
    width: 24px;
    height: 24px;
    cursor: pointer;

    &:hover  {
         & > path {
        stroke: var(--lightGreen);
        }
    }
`;

export const StyledInstagram = styled(Instagram)`
    width: 24px;
    height: 24px;
    cursor: pointer;

    &:hover  {
         & > path {
        stroke: var(--lightGreen);
        }
    }
`;

export const Text = styled.p`
    font-family: Fira Sans;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.2;
    color: var(--textColor);
    margin-bottom: 16px;
    text-decoration: none;

    &:last-of-type {
        margin-bottom: 0;    
    }

    @media screen and (min-width: 768px) {
        margin-bottom: 0;
        &:last-of-type {
            text-align: end;
        }
    }
`;

