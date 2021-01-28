import React from "react";
import ForumCard from "../../components/ForumCard";
import {
  CreateTopic,
  ForumPageCards,
  ForumPageNavbar,
  ForumPageStyled,
  PaginationBox,
  PaginationItom,
  PolicyForum,
} from "./styles";

import NavbarTop from '../../components/NavbarTop';
//icon
import { ReactComponent as Plus } from "../../assets/icons/plus-solid.svg";
import { ReactComponent as ArrowLeft } from "../../assets/icons/chevron-left-solid.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/chevron-right-solid.svg";

//img
import Img from "../../assets/images/test-user-img.jpeg";
import FooterMain from "../../components/FooterMain";
import NavbarLeft from "../../components/NavbarLeft";
import EmptyPage from "../EmptyPage";

const ForumPage = () => {

  const forumPageData = [
    {
      title: "Пожелания по улучшению сайта GeekBrains",
      hashtags: [ "баги на сайте", "гикбрейнс", "сайт" ],
      date: "13 ноября 2018 в 13:33",
      img: Img,
      fullName: "Oleksandra Sayenko",
      answeredTime: "Ответил 2 дня назад",
      answers: 1278,
      answerWaiters: 37,
    },
    {
      title: "Пожелания по улучшению сайта GeekBrains",
      hashtags: [ "баги на сайте", "гикбрейнс", "сайт" ],
      date: "13 ноября 2018 в 13:33",
      img: Img,
      fullName: "Oleksandra Sayenko",
      answeredTime: "Ответил 2 дня назад",
      answers: 1278,
      answerWaiters: 37,
    },
    {
      title: "Пожелания по улучшению сайта GeekBrains",
      hashtags: [ "баги на сайте", "гикбрейнс", "сайт" ],
      date: "13 ноября 2018 в 13:33",
      img: Img,
      fullName: "Oleksandra Sayenko",
      answeredTime: "Ответил 2 дня назад",
      answers: 1278,
      answerWaiters: 37,
    },
  ];

  return (
    <ForumPageStyled>
      <NavbarLeft left/>
      <NavbarTop />
      <ForumPageNavbar>
        <CreateTopic>
          <Plus/> <span>Создать тему</span>
        </CreateTopic>
        <PolicyForum>
          Правила форума
        </PolicyForum>
      </ForumPageNavbar>
      <ForumPageCards>
        {
          forumPageData.map( ( { title, hashtags, date, img, fullName, answeredTime, answers, answerWaiters }, index ) =>
            <ForumCard key={ index }
                       title={ title }
                       hashtags={ hashtags }
                       date={ date }
                       img={ img }
                       fullName={ fullName }
                       answeredTime={ answeredTime }
                       answers={ answers }
                       answerWaiters={ answerWaiters }
            />,
          )
        }
      </ForumPageCards>
      <PaginationBox>
        <PaginationItom arrow>
          <ArrowLeft/>
        </PaginationItom>
        <PaginationItom active>
          1
        </PaginationItom>
        <PaginationItom>
          2
        </PaginationItom>
        <PaginationItom>
          3
        </PaginationItom>
        <PaginationItom>
          4
        </PaginationItom>
        <PaginationItom disable>
          ...
        </PaginationItom>
        <PaginationItom>
          5
        </PaginationItom>
        <PaginationItom disable>
          ...
        </PaginationItom>
        <PaginationItom>
          10
        </PaginationItom>
        <PaginationItom arrow>
          <ArrowRight/>
        </PaginationItom>
      </PaginationBox>
      <EmptyPage pageName={"Forums"}/>
      <FooterMain />
    </ForumPageStyled>
  );
};

export default ForumPage;