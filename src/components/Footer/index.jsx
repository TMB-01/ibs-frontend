import React from "react";
import { Gradient } from "react-gradient";

//styles
import {
  FooterSection,
  FooterInfo,
  FooterInfoItem,
  FooterInner,
  FooterMap,
  FooterBottom,
  FooterSocialItem,
  FooterSocialList,
  SocialList,
  FooterDesc,
  SocialItems,
  Heading, 
  Container,
  SectionTitle
} from "./styles";

// React Icons
import { 
  FaTelegram, 
  FaTwitter, 
  FaFacebook 
} from "react-icons/fa";

import {AiFillInstagram} from 'react-icons/ai'

const gradients = [
  ["#9dd777", "#cd4640", "#7e9f4a"],
  ["#90c26f", "#5eafb4", "#7e9f4a"],
  ["#beadbd", "#cfafaf", "#ffbf2b"],
  ["#cfafc4", "#adbeb0"],
  ["#d6a1a1", "#ffbf2b"],
];

const Footer = () => {
  return (
    <FooterSection>
      <Gradient
        gradients={gradients} // required
        property="background"
        duration={3000}
        angle="45deg"
      >
        <Container>
          <SectionTitle>
            <Heading style={{ padding: "20px 0" }}>Контакты</Heading>
          </SectionTitle>
          <FooterInner>
            <FooterInfo>
              <FooterInfoItem>
                <Heading>Адреc</Heading>
                <FooterDesc>г.Ташкент, ул. Университетская, 4</FooterDesc>
              </FooterInfoItem>
              <FooterInfoItem>
                <Heading>График работы</Heading>
                <FooterDesc>Понедельник-Суббота 09:00 - 18:00</FooterDesc>
                <FooterDesc>Воскресенье ВЫХОДНОЙ</FooterDesc>
              </FooterInfoItem>
              <FooterInfoItem>
                <Heading>Телефон</Heading>
                <FooterDesc>+998 71 200-06-10</FooterDesc>
              </FooterInfoItem>
              <FooterInfoItem>
                <Heading>Email</Heading>
                <FooterDesc>ba@napa.uz</FooterDesc>
              </FooterInfoItem>
            </FooterInfo>
            <FooterMap>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1504.7249565669138!2d70.06567147459076!3d41.03728926050029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAyJzE2LjAiTiA3MMKwMDMnNTYuMyJF!5e0!3m2!1sru!2s!4v1607530088200!5m2!1sru!2s"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="map"
              />
            </FooterMap>
          </FooterInner>
          <FooterBottom>
            <FooterSocialList>
              <SocialList>
                <FooterSocialItem>
                  <SocialItems>
                    <FaTelegram />
                  </SocialItems>
                </FooterSocialItem>
                <FooterSocialItem>
                  <SocialItems>
                    <FaTwitter />
                  </SocialItems>
                </FooterSocialItem>
                <FooterSocialItem>
                  <SocialItems>
                    <FaFacebook />
                  </SocialItems>
                </FooterSocialItem>
                <FooterSocialItem>
                  <SocialItems>
                    <AiFillInstagram />
                  </SocialItems>
                </FooterSocialItem>
              </SocialList>
            </FooterSocialList>
          </FooterBottom>
        </Container>
      </Gradient>
    </FooterSection>
  );
};

export default Footer;
