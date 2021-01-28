import styled from "styled-components";

export const RecCardBox = styled.div`
  width: 100%;
  padding: 8px 16px 8px 32px;
  display: flex;
`;

export const RecCardPoster = styled.div`
  width: 114px;
  margin-right: 16px;
  img{
    width: 100%;
  }
`;

export const RecCardData = styled.div`
  width: calc(100% - 114px);
`;

export const RecCardDate = styled.p`
  font-size: 12px;
  line-height: 12px;
  font-weight: 500;
  margin-right: 16px;
  margin-bottom: 8px;
  color: #08d092;
`;

export const RecCardTitle = styled.p`
  color: #f4f5fa;
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
  margin-bottom: 5px;
  @media only screen and (max-width: 1024px){
    font-size: 15px;
  }
`;

export const RecCardAuthor = styled.p`
  color: #fff;
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
  opacity: .5;
  @media only screen and (max-width: 1024px){
    font-size: 12px;
    line-height: 16px;
  }
`;

