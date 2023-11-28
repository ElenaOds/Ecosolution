import styled from '@emotion/styled';

export const Container = styled.section`
    margin-bottom: 63px;

    @media screen and (min-width: 768px) {
        margin-bottom: 100px;
    }

    @media screen and (min-width: 1280px) {
        margin-bottom: 120px;
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
`;

export const Text = styled.p`
    ${text}
    margin-bottom: 36px;
    text-align: justify;

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

    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 100px;
    }

    @media screen and (min-width: 1280px) {
        margin-bottom: 122px;
    }

`
