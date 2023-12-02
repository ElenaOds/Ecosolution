import styled from '@emotion/styled';

export const Container = styled.div`
        padding-left: 20px;
        padding-right: 20px;
        max-width: 480px;
        margin: auto;

    @media screen and (min-width: 768px) {
        padding-left: 30px;
        padding-right: 30px;
        max-width: 768px;
    }

    @media screen and (min-width: 1280px) {
        padding-left: 100px;
        padding-right: 100px;
        max-width: 1280px;
    }
`;