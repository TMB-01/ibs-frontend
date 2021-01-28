import styled from "styled-components";

export const CommentCardFooterAnswersToggle = styled.div`
  display: flex;
  align-items: center;
  color: #6f64e9!important;
  font-size: 15px;
  line-height: 24px;
  font-weight: 400;
  cursor: pointer;
  margin-top: 12px;
  svg{
    width: 18px;
    margin-right: 4px;
  }
  
  @media only screen and (max-width: 1024px){
    font-size: 13px;
    line-height: 20px;
    
    svg{
      width: 14px;
      height: 14px;
    }
  }
`;

export const AnswerBox = styled.div`
  border-left: 1px solid rgba(164,175,221,.2);
  padding-left: 16px;
  margin-top: 24px;
  ${ props => !props.isOpen && "display : none" }
`;