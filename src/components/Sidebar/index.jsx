import React from "react";
import { GrPhone, GrMail } from "react-icons/gr";
import { bool } from "prop-types";

import {
  FaTelegram,
  FaTwitter,
  FaFacebook,
} from "react-icons/all";

import {AiFillInstagram} from 'react-icons/ai';


//styles
import {
  MainWrapper,
  SideExtra,
  SideExtraContent,
  SideWrapperInner,
  SideWrapper,
  SideContent,
  SideContentItems,
  SideExtraContentItems,
  SideExtraSpan,
  Buttons,
  SideExtraItems,
  MainButtons,
  SideSocials,
  MainButton
} from "./style";

const styles = {
  cursor: 'pointer'
}

const Sidebar = ({ open, ...props }) => {
  const isHidden = !!open;
  return (
    <MainWrapper open={open} aria-hidden={!isHidden} {...props}>
      <SideWrapper>
        <SideWrapperInner>
          <Buttons>
            <MainButtons>
              <MainButton to="#1" style={{ marginRight: 20, backgroundColor: "#fff" }}>
                Select Course
              </MainButton>
            </MainButtons>
          </Buttons>
          <SideContent>
            <SideContentItems to="/courses">Courses</SideContentItems>
            <SideContentItems to="/blogs">Blogs</SideContentItems>
            <SideContentItems to="/webinars">Webinars</SideContentItems>
          </SideContent>
          <SideExtraContent>
            <SideExtraContentItems to="/tests">Tests</SideExtraContentItems>
            <SideExtraContentItems to="/forums">Forums</SideExtraContentItems>
            <SideExtraContentItems to="/careers">Careers</SideExtraContentItems>
          </SideExtraContent>
          <SideExtra>
            <SideExtraItems>
              <GrPhone style={{ fontSize: 20 }} />
              <SideExtraSpan href="tel:998993696841">+998 99 369 68 41</SideExtraSpan>
            </SideExtraItems>
            <SideExtraItems>
              <GrMail style={{ fontSize: 20 }} />
              <SideExtraSpan>ibs@gmail.com</SideExtraSpan>
            </SideExtraItems>
          </SideExtra>
          <SideSocials>
            <FaFacebook style={styles} className="social-icon" />
            <AiFillInstagram style={styles} className="social-icon" />
            <FaTwitter style={styles} className="social-icon" />
            <FaTelegram style={styles} className="social-icon" />
          </SideSocials>
        </SideWrapperInner>
      </SideWrapper>
    </MainWrapper>
  );
};

Sidebar.propTypes = {
  open: bool.isRequired,
};

export default Sidebar;