import styled from "styled-components";

export const BlogCardStyled = styled.div`
  width: 32%;
  margin-bottom: 32px;
  cursor: pointer;
  transition: 0.5s;
  padding: 10px;
  &:hover {
    box-shadow: 8px 8px 20px 8px rgba(55, 84, 170, 0.15);
    transform: scale(1.02);
    cursor: pointer;
    border-radius: 10px;
    .blog-card-title {
      color: #00E4E3;
    }
  }
  @media only screen and (max-width: 1024px){
    width: 48%;
  }
  @media only screen and (max-width: 768px){
    width: 100%;
  }
`;

export const BlogCardPoster = styled.div`
  width: 100%;
  margin-bottom: 10px;
  img{
    width: 100%;
  }
`;

export const BlogCardData = styled.div`
  
`;

export const BlogCardTitle = styled.p`
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
  color: #3f5368;
  transition: 0.5s;
  @media only screen and (max-width: 1024px){
    font-size: 15px;
  }
`;

export const BlogCardDescription = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: rgba(80,102,123,.5);
  @media only screen and (max-width: 1024px){
    font-size: 12px;
  }
`;

export const BlogCardDate = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: rgba(80,102,123,.5);
  margin-top: 5px;
  @media only screen and (max-width: 1024px){
    font-size: 12px;
  }
`;

export const BlogCardIcons = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: rgba(80,102,123,.5);
  margin-top: 4px;
  display: flex;
  flex-wrap: wrap;
`;

export const BlogCardIconBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 16px;
`;

export const BlogCardIcon = styled.p`
  width: 16px;
  margin: 0 4px 0 0;
  display: flex;
  svg{
    width: 16px;
  }
`;

export const BlogCardIconNumber = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  @media only screen and (max-width: 1024px){
    font-size: 13px;
  }
`;