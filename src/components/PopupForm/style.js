import styled from "styled-components";

export const PopupWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(255, 191, 43, 0.3);
  backdrop-filter: blur(4px);
  z-index: 1000;
`;

export const PopupInner = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display:flex;
  justify-content: center;
  align-items: center;
`;

export const FormSection = styled.div`
  width: 390px;
  height: fit-content;
  margin: 50px;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;
  border-radius: 18px;
  position: relative;
  padding-top: 20px;
  padding-bottom: 30px;
  @media screen and (max-width: 667px) {
    margin-top: 40px;
    margin-left: 0;
    margin-right: 0;
    border-radius: 14px;
  }
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 10px;
  background-color: white;
  border-radius: 50%;

  .close-icon {
    font-size: 20px;
    cursor: pointer;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 450px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const FormSectionText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
`;

export const FormSectionTitle = styled.h1`
  font-size: 22px;
  font-weight: 700;
  color: #000000;
  background-image: linear-gradient(
    transparent 0,
    transparent 55%,
    hsl(4deg 65% 85%) 55%,
    hsl(4deg 65% 85%) 90%,
    transparent 90%,
    transparent 100%
  );
  background-repeat: no-repeat;
  background-size: 90%;
  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }
`;

export const FormSectionDesc = styled.p`
  font-size: 16px;
  color: #000;
  margin-top: 0;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .number-format {
    background-color: white;
    border-radius: 4px;
    width: 80%;
    height: 40px;
    border: none;
    margin: 10px;
    font-family: "Mazzard", sans-serif;
    padding: 5px 10px 5px;
    transition: all 0.3s;
    outline: none;
    ::placeholder {
      font-family: "Mazzard", sans-serif;
    }

    :focus {
      border: 2px solid #ffbf2b;
      outline: none;
    }
  }

  .select {
    width: 85%;
    height: 40px;
    border: none;
    margin: 4px;
    font-family: "Mazzard", sans-serif;
    padding: 5px 10px 5px;
    transition: all 0.3s;
    //outline: none;
    ::placeholder {
      font-family: "Mazzard", sans-serif;
    }

    :focus {
      border: 2px solid #ffbf2b;
      outline: none;
    }
  }
`;

export const FormInput = styled.input`
  background-color: white;
  border-radius: 4px;
  width: 80%;
  height: 40px;
  border: none;
  margin: 5px;
  font-family: "Mazzard", sans-serif;
  transition: 0.5s;
  text-indent: 10px;
  ::placeholder {
    font-family: "Mazzard", sans-serif;
  }

  :focus {
    border: 2px solid #ffbf2b;
    outline: none;
  }
`;

export const MainButton = styled.div`
  display: inline-block;
  font-size: 16px;
  line-height: 1;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  -webkit-border-radius: 6px;
  border-radius: 6px;
  letter-spacing: 0;
  padding: 12px 22px;
  color: #000;
  background-color: #ffbf2b;
  -webkit-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: .5s;
  cursor: pointer;
  &:hover {
    background-color: #A4A4A7;
    color: white;
  }
`;
