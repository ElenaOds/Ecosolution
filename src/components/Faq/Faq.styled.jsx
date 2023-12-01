import styled from "@emotion/styled/macro";
import { ReactComponent as ArrowDown } from '../../assets/icons/arrow_down.svg';
import { ReactComponent as Minus } from '../../assets/icons/minus.svg';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';


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
  font-size: 18px;
  line-height: 1.2;
  color: var(--textColor);
  text-align: justify;
`;

export const SubTitle = styled.h2`
   font-family: Oswald;
   font-weight: 400;
   font-size: 28px;
   line-height: 1;
   text-align: left;
   text-transform: uppercase;
   color: var(--textColor);
   margin-bottom: 24px;

   @media screen and (min-width: 768px) {
    font-size: 36px;
    margin-bottom: 0;
}

    @media screen and (min-width: 1280px) {
        font-size: 48px;
}
`;

export const StyledArrow = styled(ArrowDown)`
    display: none;
    position: absolute;
    top: 15px;
    right: 14px;
    z-index: 1;
`;

export const Styledlink = styled.a`
        position: relative;
        display: block;
        align-items: center;
        width: 130px;
        height: 39px;
        background-color: var(--lightGreen);
        padding: 10px 12px 10px 16px;
        gap: 12px;
        border-radius: 500px;
        box-sizing: border-box;
        ${text}
        font-size: 16px;
        text-decoration: none;
        cursor: pointer;
        margin-left: auto;
        margin-right: auto;
    

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

export const List = styled.ul`
    margin: 0 0 18px 0;
    padding: 0;

    @media screen and (min-width: 768px) {
        margin: 0;
    }
`;

export const Item = styled.li`
    position: relative;
    padding-top: 12px;
    padding-bottom: 12px;
    cursor: pointer;

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
        padding-top: 16px;
        padding-bottom: 16px;
    }

    @media screen and (min-width: 1280px) {
        padding-top: 24px;
        padding-bottom: 24px;
    }
`;

export const Question = styled.p`
    ${text}
    @media screen and (min-width: 1280px) {
        font-size: 24px;
    }
`;

export const Answer = styled.p`
    ${text}
    font-size: 14px;
    margin-top: 16px;
    margin-left: 24px;

    @media screen and (min-width: 768px) {
        margin-left: 44px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 16px;
    }
`;

export const Text = styled.p`
    ${text}
    text-align: center;
    margin-bottom: 12px;

    @media screen and (min-width: 1280px) {
        font-size: 24px;
    }
`;

export const StyledMinus = styled(Minus)`
    @media screen and (min-width: 768px) {
        width: 28px;
        height: 28px;
    }   
`;
export const StyledPlus = styled(Plus)`
    @media screen and (min-width: 768px) {
        width: 28px;
        height: 28px;
    }
`;

export const QuestionWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    @media screen and (min-width: 768px) {
        gap: 16px;
    }
`