import React, { useState } from "react";
import { BlogPageCards, BlogPageNavbar, BlogPageNavBox, BlogPageStyled } from "./styles";
import BlogCard from "../../components/BlogCard";
import { PaginationBox, PaginationItom } from "../ForumPage/styles";
import { ReactComponent as ArrowLeft } from "../../assets/icons/chevron-left-solid.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/chevron-right-solid.svg";
import BlogBottomPopup from "../../components/BlogBottomPopup";
import NavbarTop from '../../components/NavbarTop';
import FooterMain from "../../components/FooterMain";
import NavbarLeft from "../../components/NavbarLeft";
import EmptyPage from "../EmptyPage";


const BlogsPage = () => {

  const navsText = [
    {
      name: "Все статьи",
    }, {
      name: "Программирование",
    }, {
      name: "Маркетинг",
    }, {
      name: "Дизайн",
    }, {
      name: "Управление",
    }, {
      name: "Истории студентов",
    }, {
      name: "GeekUniversity",
    },
  ];

  const [ chosenNav, setChosenNav ] = useState( "Все статьи" );

  const blogCardData = [
    {
      posterImg: "https://hosty.xxx/i/862e000aeeeab23c510a068ce21e3c7247365a80.jpg",
      title: "Компьютерная грамотность — новый курс для детей 6–12 лет",
      description: "Открываем безграничный мир возможностей для саморазвития",
      date: "14 декабря 2020",
      view: 12,
      comment: 0,
    }, {
      posterImg: "https://hosty.xxx/i/862e000aeeeab23c510a068ce21e3c7247365a80.jpg",
      title: "Компьютерная грамотность — новый курс для детей 6–12 лет",
      description: "Открываем безграничный мир возможностей для саморазвития",
      date: "14 декабря 2020",
      view: 12,
      comment: 0,
    }, {
      posterImg: "https://hosty.xxx/i/862e000aeeeab23c510a068ce21e3c7247365a80.jpg",
      title: "Компьютерная грамотность — новый курс для детей 6–12 лет",
      description: "Открываем безграничный мир возможностей для саморазвития",
      date: "14 декабря 2020",
      view: 12,
      comment: 0,
    }, {
      posterImg: "https://hosty.xxx/i/862e000aeeeab23c510a068ce21e3c7247365a80.jpg",
      title: "Компьютерная грамотность — новый курс для детей 6–12 лет",
      description: "Открываем безграничный мир возможностей для саморазвития",
      date: "14 декабря 2020",
      view: 12,
      comment: 0,
    }, {
      posterImg: "https://hosty.xxx/i/862e000aeeeab23c510a068ce21e3c7247365a80.jpg",
      title: "Компьютерная грамотность — новый курс для детей 6–12 лет",
      description: "Открываем безграничный мир возможностей для саморазвития",
      date: "14 декабря 2020",
      view: 12,
      comment: 0,
    }, {
      posterImg: "https://hosty.xxx/i/862e000aeeeab23c510a068ce21e3c7247365a80.jpg",
      title: "Компьютерная грамотность — новый курс для детей 6–12 лет",
      description: "Открываем безграничный мир возможностей для саморазвития",
      date: "14 декабря 2020",
      view: 12,
      comment: 0,
    }, {
      posterImg: "https://hosty.xxx/i/862e000aeeeab23c510a068ce21e3c7247365a80.jpg",
      title: "Компьютерная грамотность — новый курс для детей 6–12 лет",
      description: "Открываем безграничный мир возможностей для саморазвития",
      date: "14 декабря 2020",
      view: 12,
      comment: 0,
    },
  ];

  return (
    <BlogPageStyled>
      <NavbarLeft left/>
      <NavbarTop />
      <BlogPageNavbar>
        { navsText.map( ( { name } ) =>
          <BlogPageNavBox active={ name === chosenNav }
                          onClick={ () => setChosenNav( name ) }
          >
            { name }
          </BlogPageNavBox>,
        ) }
      </BlogPageNavbar>
      <BlogPageCards>
        { blogCardData.map( ( {
                                posterImg,
                                title,
                                description,
                                date,
                                view,
                                comment,
                              } ) =>
          <BlogCard posterImg={ posterImg }
                    title={ title }
                    description={ description }
                    date={ date }
                    view={ view }
                    comment={ comment }/>,
        ) }
      </BlogPageCards>
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
      <BlogBottomPopup/>

      <EmptyPage pageName={"Blogs"}/>

      <FooterMain />
    </BlogPageStyled>
  );
};

export default BlogsPage;