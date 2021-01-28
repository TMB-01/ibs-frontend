import styled from 'styled-components';


export const WriterInfoStyled = styled.div`
    width: 300px;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 1;
    flex-grow: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Avatar = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 100px;
    border-top: 1px solid green;
    border-bottom: 2px solid green;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    &:hover {
        cursor: pointer;
    }
`;

export const ImageWrapper = styled.div`
    width: 90%;
    height: 90%;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    border-radius: 100px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const TextWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`;

export const AuthorInfo = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
`;

export const AuthorName = styled.div`
    font-size: 13px;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

export const AuthorPlace = styled.div`
    font-size: 13px;
    margin-left: 5px;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

export const PublishInfo = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
`;

export const PublishDate = styled.div`
    font-size: 13px;
    color: grey;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

export const ReadTime = styled.div`
    font-size: 13px;
    color: grey;
    margin-left: 5px;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
`;

export const IconWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    margin-left: 5px;
    img {
        width: 12px;
        height: 12px;
        margin-bottom: 5px;
    }
`;
