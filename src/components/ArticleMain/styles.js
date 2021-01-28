import styled from 'styled-components';


export const ArticleMainStyled = styled.div`
    width: 55vw;
    display: flex;
    flex-direction: column;
    @media screen and ( max-width: 1180px ) {
        width: 70vw;
    }
    @media screen and ( max-width: 991px ) {
        width: 80vw;
    }
    @media screen and ( max-width: 768px ) {
        width: 90vw;
    }
`;

export const ComponentHolder = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media screen and ( max-width: 768px ) {
        display: flex;
        flex-direction: column;
    }
`;

export const ComponentHolder2 = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Heading = styled.span`
    font-size: 30px;
    font-weight: 600;
    margin-top: 50px;
    @media screen and ( max-width: 710px ) {
        font-size: 20px;
        line-height: 30px;
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 450px;
    background-position: center;
    background-size: cover;
    margin-top: 50px;
    margin-bottom: 50px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        &:hover {
            cursor: zoom-in;
        }
    }
`;

export const ImageReference = styled.div`
    width: 100%;
    height: fit-content;
    font-size: 13px;
    color: grey;
    text-align: center;
    margin-top: 10px;
`;

export const TextWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    margin-bottom: 40px;
`;

export const P = styled.div`
    font-size: 20px;
    line-height: 35px;
    text-align: start;
    font-weight: 300;
    color: #292929;
    margin-top: 10px;
    margin-bottom: 20px;
    @media screen and ( max-width: 710px ) {
        font-size: 16px;
        line-height: 30px;
    }
`;

export const TitleMain = styled.span`
    font-size: 25px;
    line-height: 35px;
    font-weight: 600;
    @media screen and ( max-width: 710px ) {
        font-size: 18px;
        line-height: 30px;
    }
`;

export const TitleSecondary = styled.span`
    font-size: 20px;
    line-height: 32px;
    font-weight: 600;
    margin-top: 20px;
    @media screen and ( max-width: 710px ) {
        font-size: 17px;
        line-height: 30px;
    }
`;

export const Highlighted = styled.span`
    width: fit-content;
    background-color: #CEFCE9;
    &:hover {
        background-color: #24EDA9;
        cursor: pointer;
    }
`;

export const Quote = styled.span`
    font-size: 20px;
    line-height: 25px;
    font-weight: 300;
    color: #292929;
    margin-top: 10px;
    margin-bottom: 20px;
    font-style: italic;
    border-left: 3px solid black;
    margin-left: 5px;
    padding-left: 20px;
    @media screen and ( max-width: 710px ) {
        font-size: 16px;
        line-height: 30px;
    }
`;

export const UnderlinedText = styled.span`
    width: fit-content;
    border-bottom: 1px dotted black;
    &:hover {
        cursor: pointer;
    }
`;

export const TextBold = styled.span`
    font-weight: 600;
`;

export const ItalicBold = styled.span`
    font-style: italic;
    font-weight: 600;
`;

export const HR = styled.hr`
    width: 100%;
    border-bottom: 0.5px solid #EEEEEE;
`;

