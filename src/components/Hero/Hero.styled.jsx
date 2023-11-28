import styled from '@emotion/styled';

export const Container = styled.div`
    padding: 36px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 768px) {
        padding: 36px 30px;
    }

    @media screen and (min-width: 1280px) {
        padding: 24px 100px;
    }
`;