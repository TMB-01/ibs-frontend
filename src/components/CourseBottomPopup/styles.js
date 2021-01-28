import styled from "styled-components";

//img
import BgImg from "../../assets/images/bottomPopupBg.svg";
import BgImgSmall from "../../assets/images/bottomPopupBgSmall.svg";

export const BottomPopupStyled = styled.div`
  position: fixed;
  margin: auto;
  background-color: ${ props => props.popUpName === "girls" ? "#00e4e3" : props.popUpName === "new-comer" ? "#fdcf00" : "" };
  border-radius: 8px;
  width: calc(100% - 120px);
  max-width: 1080px;
  height: 112px;
  bottom: 36px;
  left: 0;
  right: 0;
  //background-image: url(${ BgImg });
  background-position: right center;
  //background-size: 1080px;
  background-repeat: no-repeat;
  box-shadow: rgba(80, 102, 123, 0.24) 0 4px 24px, rgba(80, 102, 123, 0.16) 0 4px 4px;
  padding: 10px 48px;
  display: flex;
  align-items: center;
  //margin: auto;
  ${ props => !props.isOpen && "display:none" };
  span{
    position: relative;
    display: flex;align-items: center;
    width: 100%;
    height: 100%;
  }
  
  @media only screen and (max-width: 1024px){
    width: calc(100% - 64px);
    bottom: 32px;
  }
  
  @media only screen and (max-width: 768px){
    width: calc( 100% - 32px );
    height: 138px;
    // background-image: url(${ BgImgSmall });
    background-size: 100%;
    background-position: unset;
    bottom: 16px;
    span{
      display: flex;
      padding: 4px 0;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export const TextsBox = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  color: white;
  h1{
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    color: white;
    margin: 0;
  }
  div{
    height: 120px;
    font-size: 16px;
    line-height: 24px;
    max-width: 280px;
    margin-top: 0;
    margin-left: 20px;
    margin-bottom: 0;
    img{
      padding:10px;
      width: auto;
      height: 100%;
      display: block;
    }
  }
  
  @media only screen and (max-width: 1024px){
    flex-direction: column;
    align-items: unset;
    h1{
      font-size: 17px;
      line-height: 24px;
    }
    div{
      max-width: unset;
      font-size: 15px;
      line-height: 22px;
      display: inline-block;
      margin-top: 4px;
      margin-left: 0;
      color: rgb(255, 226, 226);
      line-break: unset;
    }
  }
  
  @media only screen and (max-width: 768px){
  width: fit-content;
    h1{
      width: 200px;
      text-align: center;
      font-size: 16px;
      line-height: 21px;
    }
    div{
      display: none;
    }
  }

`;

export const ImgGadgets = styled.img`
  display: block;
  height: 100%;
  width: auto;
  margin: 0 auto;
  
  @media only screen and (max-width: 768px){
    display: none;
  }
`;

export const ButtonPopup = styled.button`
  font-size: 15px;
  line-height: 24px;
  padding: 8px 30px;
  color: rgb(255, 255, 255);
  background-color: ${ props => props.popUpName === "new-comer" ? "#00e4e3" : props.popUpName === "girls" ? "#fdcf00" : "" };
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  
  &:focus{
    outline: 0;
  }
  
  @media only screen and (max-width: 1024px){
    margin: 0;
  }
  
  @media only screen and (max-width: 768px){
    width: 200px;
  }
  
  

`;

export const CancelButton = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: absolute;
  top: 6px;
  right: -32px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  outline: none;
  cursor: pointer;
  color: rgb(218, 218, 218);
  svg{
    width: 16px;
    height: 16px;
    padding: 3px;
  }
  
  &:focus{
    outline: 0;
  }
`;