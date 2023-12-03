import styled from "@emotion/styled/macro";
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as LogoHovered } from '../../assets/icons/logo_hover.svg';
import { ReactComponent as Burger } from '../../assets/icons/burger.svg';
import { ReactComponent as ArrowDown } from '../../assets/icons/arrow_down.svg';


export const StyledHeader = styled.header`
    &.sticky {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    background-color: #fff;
    transition: .3s ease-in-out;
 }
`;


export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    max-width: 480px;
    margin: auto;
    
    @media screen and (min-width: 768px) {
        padding: 36px 30px;
        max-width: 768px;
    }

    @media screen and (min-width: 1280px) {
        padding: 24px 100px;
        max-width: 1280px;
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
`;

export const StyledBurger = styled(Burger)`
    display: block;
    cursor: pointer;
    fill: var(--burgerBgColor);

    &:hover {
        fill: var(--lightGreen);
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px; 
`;

export const StyledArrow = styled(ArrowDown)`
    display: none;
    position: absolute;
    top: 15px;
    right: 14px;
    z-index: 1;
`;

export const Styledlink = styled.a`
    display: none;
    
    @media screen and (min-width: 768px) {
        display: block;
        position: relative;
        width: 140px;
        height: 39px;
        background-color: var(--lightGreen);
        padding: 10px 12px 10px 16px;
        gap: 12px;
        border-radius: 500px;
        box-sizing: border-box;
        font-family: Fira Sans;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.2;
        color: var(--textColor);
        text-decoration: none;
        cursor: pointer;
        scroll-behavior: smooth;

        &::after {
            content: '';
            position: absolute;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background-color: var(--textColor);     
            top: 12px;
            right: 12px;
        }  
    }

    &:hover {
        background-color: var(--textColor);
        color: var(--lightGreen);

        &::after {
            background-color: var(--lightGreen); 
        }

        &:hover ${StyledArrow} {
            display: block;
        }
    }
`;

export const Button = styled.button`
    outline: none;
    border: none;
    background-color: transparent;
`;

