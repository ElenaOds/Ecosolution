import styled from '@emotion/styled';
import pic1 from '../../assets/images/about1.webp';
import pic2 from '../../assets/images/about2.webp';

import { ReactComponent as Icon1 } from '../../assets/icons/about1.svg';
import { ReactComponent as Icon2 } from '../../assets/icons/about2.svg';
import { ReactComponent as Icon3 } from '../../assets/icons/about3.svg';
import { ReactComponent as Icon4 } from '../../assets/icons/about4.svg';


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

const text = `
  font-family: Fira Sans;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  color: var(--textColor);
  text-align: justify;
`;

export const Text = styled.p`
    ${text}
    margin-bottom: 36px;
    

  @media screen and (min-width: 768px) {
    position: relative;
    margin-bottom: 0;
    width: 380px;

    &::before {
        content: '';
        position: absolute;
        width: 1px;
        height: 100%;
        background-color: var(--lightGreen);     
        top: 0;
        left: -11px;
    }
}

    @media screen and (min-width: 1280px) {
        width: 486px;

        &::before {
            left: -140px;
        }
}
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 36px;
    position: relative;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 100px;
    }

    @media screen and (min-width: 1280px) {
        margin-bottom: 122px;
    }

`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin: 0;
    padding: 0;


    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);

        & > :nth-of-type(3) {
            grid-column-start: 3;  
            grid-column: span 2;
        }
        & > :nth-of-type(4) {
            grid-column-start: 1;  
            grid-column: span 2;
        }
`;

export const ListItem = styled.li`
    padding: 13px 12px 12px 12px;
    background-color: var(--secondaryBgColor);

    @media screen and (min-width: 768px) {
        padding: 12px;
    }

    @media screen and (min-width: 1280px) {
        padding: 48px 24px;
    }
`;

export const ListHeader = styled.div`
   display: flex;
   justify-content: left;
   align-items: center;
   margin-bottom: 46px;

   @media screen and (min-width: 768px) {
        margin-bottom: 64px;
    }


    @media screen and (min-width: 1280px) {
        margin-bottom: 119px;
    }
`;

export const StyledIcon1 = styled(Icon1)`
    width: 16px;
    height: 16px;

    @media screen and (min-width: 1280px) {
        width: 24px;
        height: 24px;
    }
`;

export const StyledIcon2 = styled(Icon2)`
    width: 16px;
    height: 16px;

    @media screen and (min-width: 1280px) {
        width: 24px;
        height: 24px;
    }
`;

export const StyledIcon3 = styled(Icon3)`
    width: 16px;
    height: 16px;

    @media screen and (min-width: 1280px) {
        width: 24px;
        height: 24px;
    }
`;

export const StyledIcon4 = styled(Icon4)`
    width: 16px;
    height: 16px;

    @media screen and (min-width: 1280px) {
        width: 24px;
        height: 24px;
    }
`;

export const ListTitle = styled.h3`
  font-family: Oswald;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-transform: uppercase;
  color: var(--textColor);
  margin-left: 8px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.3;
  }

  @media screen and (min-width: 1280px) {
    font-size: 32px;
    line-height: 1.5;
  }
`;

export const ListText = styled.p`
    ${text}
    position: relative;
    font-size: 14px;

    @media screen and (min-width: 1280px) {
        font-size: 16px;
      }

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: var(--lightGreen);     
        top: -12px;
        left: 0;
    }

    @media screen and (min-width: 1280px) {
        &::before {
            top: -24px;
        }
      }
`;

export const Img = styled.img`
    display: none;
    background-image: url(${pic1});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (min-width: 768px) {
        display: block;
        height: 197px;
        width: 100%;
    }

    @media screen and (min-width: 1280px) {
        height: 403px;
    }
`;

export const StyledImg = styled.img`
    display: none;
    background-image: url(${pic2});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (min-width: 768px) {
        display: block;
        height: 197px;
        width: 100%;
    }

    @media screen and (min-width: 1280px) {
        height: 403px;
    }
`;

