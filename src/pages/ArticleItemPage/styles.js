import styled from 'styled-components';


export const ArticlePageStyled = styled.div`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    padding: 0;
    margin: 0;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`;

export const AsideLeft = styled.div`
    width: 25vw;
    height: 150vw;
    @media screen and ( max-width: 1190px ) {
        width: 15vw;
    }
    @media screen and ( max-width: 991px ) {
        width: 10vw;
    }
    @media screen and ( max-width: 768px ) {
        width: 5vw;
    }
`;

export const AsideRight = styled.div`
    width: 25vw;
    height: 2000px;
    @media screen and ( max-width: 1180px ) {
        width: 15vw;
    }
    @media screen and ( max-width: 991px ) {
        width: 10vw;
    }
    @media screen and ( max-width: 768px ) {
        width: 5vw;
    }
`;
