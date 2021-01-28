import styled from "styled-components";

export const FormWrapper = styled.div`
  @media screen and (max-width: 450px) {
    margin-left: 0;
    margin-right: 0;
  }
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
  @media screen and (max-width: 450px) {
    width: 340px;
  }

  ::before {
    pointer-events: none;
    content: "";
    position: absolute;
    width: 10vw;
    height: 10vw;
    min-width: 75px;
    min-height: 75px;
    border-radius: 100%;
    border: 3px solid #000000;
    z-index: -1;
    right: -14%;
    bottom: -14%;
    @media screen and (max-width: 1024px) {
      display: none;
    }
    @media screen and (max-width: 667px) {
      display: none;
    }
  }

  ::after {
    pointer-events: none;
    content: "";
    position: absolute;
    width: 10vw;
    height: 10vw;
    min-width: 150px;
    min-height: 150px;
    right: -20%;
    bottom: -12%;
    border-radius: 100%;
    background-color: #ffbf2b;
    z-index: -2;
    @media screen and (max-width: 1024px) {
      display: none;
    }
    @media screen and (max-width: 667px) {
      display: none;
    }
  }

  .Intro__svg {
    fill: #000000;
    color: #000000;
    position: absolute;
    height: 200px;
    top: -30px;
    left: -70px;
    z-index: -1;
    @media screen and (max-width: 1024px) {
      display: none;
    }
    @media screen and (max-width: 667px) {
      display: none;
    }
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
    outline: none;
    border: none;
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