import React, { useState } from "react";
import {
  CareersPageCards,
  CareersPageNavbar,
  CareersPageSearchBox,
  CareersPageSearchContainer,
  CareersPageSearchInput,
  CareersPageSelect,
  CareersPageStyled,
} from "./styles";
import CareersCard from "../../components/CareersCard";
import NavbarTop from '../../components/NavbarTop';

//icons
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import CheckBox from "../../components/CheckBox";
import { WebinarNavbarNav } from "../WebinarsPage/styles";
import NavbarLeft from "../../components/NavbarLeft";
import FooterMain from "../../components/FooterMain";
import EmptyPage from "../EmptyPage";

const CareersPage = () => {

  const [ activeNav, setActiveNav ] = useState( "all" );

  const careersInfo = [
    {
      img: "https://d2xzmw6cctk25h.cloudfront.net/coverimage/2280433/attachment/thumb-e67780f6411e7ebd74f11b2220a74991.jpg",
      company: "Компания",
      title: "SBS Consulting",
      subTitle: "Решай бизнес задачи и развивайся!",
      vacancy: "Вакансии",
      texts: [
        "Преподаватель на Факультет руководителя клиентского сервиса",
        "Автор и преподаватель курса \"Активы и обязательства\" (Финансовая аналитика)",
        "Преподаватель факультета Product Management",
        "Преподаватель на курс по продуктовой аналитике",
        "Преподаватель на Факультет руководителя клиентского сервиса",
        "Автор и преподаватель курса \"Активы и обязательства\" (Финансовая аналитика)",
        "Преподаватель факультета Product Management",
        "Преподаватель на курс по продуктовой аналитике",
      ],
    }, {
      img: "https://d2xzmw6cctk25h.cloudfront.net/coverimage/2280433/attachment/thumb-e67780f6411e7ebd74f11b2220a74991.jpg",
      company: "Компания",
      title: "SBS Consulting",
      subTitle: "Решай бизнес задачи и развивайся!",
      vacancy: "Вакансии",
      texts: [
        "Преподаватель на Факультет руководителя клиентского сервиса",
        "Автор и преподаватель курса \"Активы и обязательства\" (Финансовая аналитика)",
        "Преподаватель факультета Product Management",
        "Преподаватель на курс по продуктовой аналитике",
      ],
    }, {
      img: "https://d2xzmw6cctk25h.cloudfront.net/coverimage/2280433/attachment/thumb-e67780f6411e7ebd74f11b2220a74991.jpg",
      company: "Компания",
      title: "SBS Consulting",
      subTitle: "Решай бизнес задачи и развивайся!",
      vacancy: "Вакансии",
      texts: [
        "Преподаватель на Факультет руководителя клиентского сервиса",
        "Автор и преподаватель курса \"Активы и обязательства\" (Финансовая аналитика)",
        "Преподаватель факультета Product Management",
        "Преподаватель на курс по продуктовой аналитике",
        "Преподаватель на Факультет руководителя клиентского сервиса",
        "Автор и преподаватель курса \"Активы и обязательства\" (Финансовая аналитика)",
        "Преподаватель факультета Product Management",
        "Преподаватель на курс по продуктовой аналитике",
      ],
    }, {
      img: "https://d2xzmw6cctk25h.cloudfront.net/coverimage/2280433/attachment/thumb-e67780f6411e7ebd74f11b2220a74991.jpg",
      company: "Компания",
      title: "SBS Consulting",
      subTitle: "Решай бизнес задачи и развивайся!",
      vacancy: "Вакансии",
      texts: [
        "Преподаватель на Факультет руководителя клиентского сервиса",
        "Автор и преподаватель курса \"Активы и обязательства\" (Финансовая аналитика)",
        "Преподаватель факультета Product Management",
        "Преподаватель на курс по продуктовой аналитике",
      ],
    }, {
      img: "https://d2xzmw6cctk25h.cloudfront.net/coverimage/2280433/attachment/thumb-e67780f6411e7ebd74f11b2220a74991.jpg",
      company: "Компания",
      title: "SBS Consulting",
      subTitle: "Решай бизнес задачи и развивайся!",
      vacancy: "Вакансии",
      texts: [
        "Преподаватель на Факультет руководителя клиентского сервиса",
        "Автор и преподаватель курса \"Активы и обязательства\" (Финансовая аналитика)",
        "Преподаватель на Факультет руководителя клиентского сервиса",
        "Автор и преподаватель курса \"Активы и обязательства\" (Финансовая аналитика)",
        "Преподаватель факультета Product Management",
        "Преподаватель на курс по продуктовой аналитике",
      ],
    }, {
      img: "https://d2xzmw6cctk25h.cloudfront.net/coverimage/2280433/attachment/thumb-e67780f6411e7ebd74f11b2220a74991.jpg",
      company: "Компания",
      title: "SBS Consulting",
      subTitle: "Решай бизнес задачи и развивайся!",
      vacancy: "Вакансии",
      texts: [
        "Преподаватель на Факультет руководителя клиентского сервиса",
        "Автор и преподаватель курса \"Активы и обязательства\" (Финансовая аналитика)",
        "Преподаватель на Факультет руководителя клиентского сервиса",
        "Автор и преподаватель курса \"Активы и обязательства\" (Финансовая аналитика)",
        "Преподаватель факультета Product Management",
        "Преподаватель на курс по продуктовой аналитике",
      ],
    },
  ];

  return (
    <div>
      <CareersPageStyled>
        <NavbarLeft left/>
        <NavbarTop />
        <CareersPageNavbar>
          <WebinarNavbarNav onClick={ () => setActiveNav( "all" ) } active={ activeNav === "all" }>
            Вакансии и стажировки ・1485
          </WebinarNavbarNav>
          <WebinarNavbarNav onClick={ () => setActiveNav( "my" ) } active={ activeNav === "my" }>
            Мои отклики
          </WebinarNavbarNav>
        </CareersPageNavbar>
        <CareersPageSearchContainer>
          <CareersPageSearchBox>
            <SearchIcon />
            <CareersPageSearchInput type={ "search" } placeholder={ 'Поиск по вакансиям и стажировкам' }/>
          </CareersPageSearchBox>
          <CareersPageSelect>
            <option value="company-project" selected>Компании и проекты</option>
            <option value="company" selected>Компании</option>
            <option value="project" selected>Проекты</option>
          </CareersPageSelect>
          <CheckBox name="paid" text="Оплачиваемые"/>
          <CheckBox name="abailable" text="Доступные мне"/>
        </CareersPageSearchContainer>
        <CareersPageCards>
          { careersInfo.map( ( {
                                 img,
                                 company,
                                 title,
                                 subTitle,
                                 vacancy,
                                 texts,
                               } ) =>
            <CareersCard img={ img } company={ company } title={ title } subTitle={ subTitle } vacancy={ vacancy }
                         texts={ texts }/>,
          ) }
        </CareersPageCards>
        <EmptyPage pageName={"Careers"}/>
        <FooterMain />
      </CareersPageStyled>
    </div>
  );
};

export default CareersPage;