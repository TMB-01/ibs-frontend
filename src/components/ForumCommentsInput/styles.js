import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

export const CommentCardBodyAnswerLikeBox = styled.div`
  display: ${ props => props.isOpen || !props.replyToComment ? "none" : "flex" };
`;

export const CommentCardBodyAnswerOrLikeBox = styled.p`
  margin: 0 40px 0 0 ;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  display: flex;
  color: #50667b;
  cursor:pointer;
  svg{
    width: 20px;
    margin: 0 10px;
    color:rgba(80,102,123,.4);
  }
  
  &:hover{
    color: ${ props => props.like ? "#08d092" : "#6588ab" };
    
    svg{
      color: #08d092;
    }
  }
  
  @media only screen and (max-width: 1024px){
    font-size: 13px;
    line-height: 20px;
    
    svg{
      width: 16px;
    }
  }
`;

export const CommentsInputContainer = styled.div`
  width: 100%;
  display: ${ props => !props.isOpen && props.replyToComment ? "none" : "flex" };
`;

export const CommentsInputUserImg = styled.div`
  ${ props => props.replyToComment && "display: none" };
  width: 32px;
  height: 32px;
  margin-right: 12px;
  padding: 4px 0;
  img{
    width: 100%;
    height: auto;
  }
`;

export const CommentsInputMainBox = styled.div`
  width: ${ props => props.replyToComment ? "100%" : "calc(100% - 44px)" };
  //min-height: auto!important;
  //border-radius: 4px;
  //border: 1px solid #ddd;
  //overflow: hidden;
`;

export const CommentsInputBox = styled.div`
  //width: calc(100% - 44px);
  //min-height: auto!important;
  border-radius: 4px;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  //overflow: hidden;
`;

export const CommentsInput = styled( TextareaAutosize )`
  width: 100%;
  //min-height: 70px;
  height: fit-content;
  padding: 8px 8px;
  border: 0;
  resize: none;
  border-radius: 4px;
  
  font-weight: 400;
  font-size:15px;
  line-height: 24px;
  color:#000000;
  
  &:focus{
    outline: 0;    
  }
  
  @media only screen and (max-width: 1024px){
    font-size: 14px;
    line-height: 20px;
  }
`;

export const CommentsInputTools = styled.div`
  width: 100%;
  display: ${ props => props.isOpen ? "flex" : "none" };
  padding: 8px;
  border-top: 1px solid #ddd;
  
`;

export const CommentsInputTool = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 0;
  box-sizing: border-box;
  color: #b7bec5!important;
  svg{
    width: 16px;
    height: 16px;
  }
  
  &:focus{
    outline: 0;
  }
  
  &:hover{
    color: #50667b!important;
  }
`;

export const ButtonsBox = styled.div`
  display: ${ props => props.isOpen ? "flex" : "none" };
  margin: 12px 0;
  color: rgba(80,102,123,.5);
  font-size: 14px;
  text-align: center;
  font-weight: 400;
  user-select: none;
`;

export const SubmitButton = styled.button`
  width: calc(100% - 64px);
  border: 0;
  padding: 14px;
  border-radius: 4px;
  cursor: ${ props => props.enabled ? "pointer" : "not-allowed" }!important;
  background-color:${ props => props.enabled ? "rgb(132, 122, 236)" : "rgb(244, 245, 250)" };
  color:${ props => props.enabled && "white" };
  
  
  
  &:focus{
    outline: 0;
  }
`;

export const CloseButton = styled.button`
  width: 48px;
  height: 48px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  margin-left: 16px;
  border-radius: 4px;
  background-color: rgb(244, 245, 250);
  &:focus{
    outline: 0;
  }
  
  &:hover{
    color: #333;
  }
  svg{
    width: 18px;
    height: 18px;
  }
`;

