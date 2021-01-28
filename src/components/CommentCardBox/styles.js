import styled from "styled-components";

export const CommentCardBoxStyled = styled.div`
  margin-top: 32px;
`;

export const CommentCardHeader = styled.div`
  font-size: 15px;
  line-height: 24px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  @media only screen and (max-width: 1024px){
    font-size: 13px;
    line-height: 20px;
  }
`;

export const CommentCardUserImg = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 12px;
  border-radius: 50%;
  overflow: hidden;
  img{
    width: 100%;
  }
`;

export const CommentCardUserName = styled.a`
  white-space: nowrap;
  font-weight: 500;
  color: #50667b;
  
  &:hover{
    color: #6588ab;
  }
  @media only screen and (max-width: 1024px){
    font-size: 13px;
    line-height: 20px;
  }
`;

export const CommentCardDot = styled.span`
  margin: 0 10px;
`;

export const CommentCardDate = styled.span`
  color: rgba(80,102,123,.5);
  margin-right: 30px;
`;

export const CommentCardMenuButton = styled.div`
  height: fit-content;
  color: rgba(80,102,123,.5);
  margin: auto;
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  svg{
    height: 30px;
  }
`;

export const CommentCardBody = styled.div`
  padding: 12px 0 0;
  //margin-bottom: 26px;
`;

export const CommentCardParagraph = styled.p`
  color: #2c2d30;
  font-size: 15px;
  line-height: 24px;
  font-weight: 400;
  
  @media only screen and (max-width: 1024px){
    font-size: 13px;
    line-height: 20px;
  }
`;

// export const CommentCardBodyAnswerLikeBox = styled.div`
//   display: flex;
// `;
//
// export const CommentCardBodyAnswerOrLikeBox = styled.p`
//   margin-right: 40px;
//   font-size: 15px;
//   font-weight: 500;
//   line-height: 24px;
//   display: flex;
//   color: #50667b;
//   cursor:pointer;
//   svg{
//     width: 20px;
//     margin: 0 10px;
//     color:rgba(80,102,123,.4);
//   }
//
//   &:hover{
//     color: ${ props => props.like ? "#08d092" : "#6588ab" };
//
//     svg{
//       color: #08d092;
//     }
//   }
// `;

export const CommentCardFooter = styled.div`
  
`;