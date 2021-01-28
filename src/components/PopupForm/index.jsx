import React, { useState } from "react";

//styles
import {
  PopupWrapper,
  PopupInner,
  FormSection,
  FormSectionText,
  FormSectionTitle,
  FormSectionDesc,
  Form,
  FormInput,
  FormWrapper,
  CloseIcon,
  MainButton
} from "./style";

// packages
import Reward from "react-rewards";
import NumberFormat from "react-number-format";
import Select from "react-select";
import { AiOutlineClose } from "react-icons/ai";

const options = [
  { value: "frontend development", label: "Frontend Development" },
  { value: "backend development", label: "Backend Development" },
  { value: "Android development", label: "Android Development" },
];

const PopupForm = ({ callback }) => {
  const [active, setActive] = useState(false);

  let reward;
  const handleClick = () => {
    setActive(!active);
    reward.rewardMe();
  };

  return (
    <PopupWrapper>
      <PopupInner>
        <FormWrapper>
          <FormSection>
            <CloseIcon>
              <AiOutlineClose onClick={callback} className="close-icon" />
            </CloseIcon>
            <FormSectionText>
              <FormSectionTitle>Course you want 🤔</FormSectionTitle>
              <FormSectionDesc>IBS School</FormSectionDesc>
            </FormSectionText>
            <Form>
              <FormInput type="text" required placeholder="Name" />
              <NumberFormat
                format="+998 (##) ###-##-##"
                mask="_"
                className="number-format"
                placeholder="Phone"
              />
              <FormInput
                type="email"
                required
                placeholder="Email (optional)"
                className="message"
              />
              <Select options={options} className="select" />
              <Reward
                ref={(ref) => {
                  reward = ref;
                }}
                type="confetti"
                config={{
                  spread: 100,
                  lifetime: 250,
                  startVelocity: 35,
                  elementCount: 100,
                  colors: ["#ffbf2b", "#fff", "#000"],
                }}
              >
                <MainButton
                  disabled
                  style={{ marginTop: 20, padding: "15px 62px" }}
                  onClick={handleClick}
                >
                  {!active ? "Submit ✌🏽" : "Success 🥳"}
                </MainButton>
              </Reward>
            </Form>
          </FormSection>
        </FormWrapper>
      </PopupInner>
    </PopupWrapper>
  );
};

export default PopupForm;