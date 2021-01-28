import React from "react";
import { useHistory } from 'react-router-dom';
import Fade from 'react-reveal/Fade'

//styles
import {
  FacultiesContent,
  FacultiesEachItem,
  FacultiesItemIcon,
  FacultiesItemIconImage,
  FacultiesItemInner,
  FacultiesItems,
  FacultiesAction,
  FacultiesDesc,
  BtnGroups,
  MainButton,
  Heading
} from "./style";

// icons
import ComputerIcon from "../../assets/icons/computer.png";
import PaintIcon from "../../assets/icons/paint.png";
import GroupIcon from "../../assets/icons/group.png";
import XRayIcon from "../../assets/icons/x-ray.png";

const items = [
  {
    id: 1,
    icon: ComputerIcon,
    content: "Programming",
    paragraph:
      "Html, CSS, Javascript, PHP, Laravel, Mysql, Android, Java, JavaScript, Python.",
  },
  {
    id: 2,
    icon: PaintIcon,
    content: "Design",
    paragraph: "UI/UX дизайн, Adobe Photoshop/Adobe Illustrator/Figma.",
  },
  {
    id: 3,
    icon: GroupIcon,
    content: "Business",
    paragraph:
      "Корпоративная культура, стандарты, мотивация, стимулирование, основы управления персоналом, рекрутмент.",
  },
  {
    id: 4,
    icon: XRayIcon,
    content: "Languages",
    paragraph:
      "Контент-маркетинг, маркетинг влияния, интернет-реклама, Wordpress, Opencart, SEO, SMM.",
  },
];

const FacultiesItem = () => {

  const history = useHistory()
  const togglePopup = () => {
      history.push('/courses')
  }

  return items.map((item) => {
    return (
      <FacultiesItems key={item.id}>
        <FacultiesEachItem>
          <FacultiesItemInner>
            <Fade top>
              <FacultiesItemIcon>
                <FacultiesItemIconImage>
                  <img src={item.icon} alt="globe" />
                </FacultiesItemIconImage>
              </FacultiesItemIcon>
            </Fade>
            <Fade top>
              <FacultiesContent>
                <Heading>{item.content}</Heading>
                <FacultiesDesc>{item.paragraph}</FacultiesDesc>
              </FacultiesContent>
            </Fade>
          </FacultiesItemInner>
          <Fade top>
            <FacultiesAction>
              <BtnGroups>
                <MainButton style={{ padding: "20px 40px" }} onClick={togglePopup}>
                  Выбрать 
                  <span>😁</span>
                </MainButton>
              </BtnGroups>
            </FacultiesAction>
          </Fade>
        </FacultiesEachItem>
      </FacultiesItems>
    );
  });
};

export default FacultiesItem;