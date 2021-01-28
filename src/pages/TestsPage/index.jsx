import React from "react";
import { TestsPageCards, TestsPageStyled } from "./styles";
import TestsCard from "../../components/TestsCard";
import NavbarTop from '../../components/NavbarTop';
import NavbarLeft from "../../components/NavbarLeft";
import FooterMain from "../../components/FooterMain";
import EmptyPage from "../EmptyPage";

const TestsPage = () => {

  const testsCardInfo = [
    {
      icon: "https://d2xzmw6cctk25h.cloudfront.net/category/15/image/831b1bd59854a25f3725b82510cbf98a.png",
      name: "Основы программирования",
      levels: [
        {
          level: "Основы программирования. Начальный уровень",
        }, {
          level: "Основы программирования. Начальный уровень",
        },
      ],
    }, {
      icon: "https://d2xzmw6cctk25h.cloudfront.net/category/15/image/831b1bd59854a25f3725b82510cbf98a.png",
      name: "Основы программирования",
      levels: [
        {
          level: "Основы программирования. Начальный уровень",
        }, {
          level: "Основы программирования. Начальный уровень",
        }, {
          level: "Основы программирования. Начальный уровень",
        },
      ],
    }, {
      icon: "https://d2xzmw6cctk25h.cloudfront.net/category/15/image/831b1bd59854a25f3725b82510cbf98a.png",
      name: "Основы программирования",
      levels: [
        {
          level: "Основы программирования. Начальный уровень",
        }, {
          level: "Основы программирования. Начальный уровень",
        }, {
          level: "Основы программирования. Начальный уровень",
        }, {
          level: "Основы программирования. Начальный уровень",
        }, {
          level: "Основы программирования. Начальный уровень",
        },
      ],
    },
    {
      icon: "https://d2xzmw6cctk25h.cloudfront.net/category/15/image/831b1bd59854a25f3725b82510cbf98a.png",
      name: "Основы программирования",
      levels: [
        {
          level: "Основы программирования. Начальный уровень",
        }, {
          level: "Основы программирования. Начальный уровень",
        },
      ],
    }, {
      icon: "https://d2xzmw6cctk25h.cloudfront.net/category/15/image/831b1bd59854a25f3725b82510cbf98a.png",
      name: "Основы программирования",
      levels: [
        {
          level: "Основы программирования. Начальный уровень",
        }, {
          level: "Основы программирования. Начальный уровень",
        }, {
          level: "Основы программирования. Начальный уровень",
        },
      ],
    }, {
      icon: "https://d2xzmw6cctk25h.cloudfront.net/category/15/image/831b1bd59854a25f3725b82510cbf98a.png",
      name: "Основы программирования",
      levels: [
        {
          level: "Основы программирования. Начальный уровень",
        }, {
          level: "Основы программирования. Начальный уровень",
        }, {
          level: "Основы программирования. Начальный уровень",
        }, {
          level: "Основы программирования. Начальный уровень",
        }, {
          level: "Основы программирования. Начальный уровень",
        },
      ],
    },
  ];

  return (
    <TestsPageStyled>
      <NavbarLeft left/>
      <NavbarTop />
      <TestsPageCards>
        { testsCardInfo.map( ( { icon, name, levels } ) =>
          <TestsCard icon={ icon } name={ name } levels={ levels }/>,
        ) }
      </TestsPageCards>
      {/*<h1>This is <u>Tests</u> page</h1>*/ }
      <EmptyPage pageName={"Tests"}/>
      <FooterMain />
    </TestsPageStyled>
  );
};

export default TestsPage;