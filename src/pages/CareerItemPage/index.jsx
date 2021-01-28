import React, { useState } from "react";
import {
  CareerItemPageHeader,
  CareerItemPageStyled,
  CompanyData,
  CompanyLogo,
  CompanyName,
  CompanySmall,
  DataLeft,
  DataRight,
  FollowButton,
  Website,
  WebsitesBox,
  NavbarBox,
  TextDataContainer,
  AboutText,
  VacancyText,
  WebsitesBoxResponsive, 
  VacanciesList,
} from "./styles";

import { WebinarNavbarNav } from "../WebinarsPage/styles";
import NavbarTop from '../../components/NavbarTop';

//Icons
import { ReactComponent as StarIcon } from "../../assets/icons/star.svg";
import CareerItemVacancyToggle from "../../components/CareerItemVacancyToggle";

//mock
import { pageData } from './mock';

const CareerItemPage = () => {
  const [ activeNav, setActiveNav ] = useState( "vacancy" );
  const [ chosenVacancy, setChosenVacancy ] = useState( 0 );

  return (
    <CareerItemPageStyled>
      <NavbarTop item/>
      <CareerItemPageHeader>
        <DataLeft>
          <CompanyLogo>
            <img
              src={ pageData.logo }
              alt={ "company logo" }/>
          </CompanyLogo>
          <CompanyData>
            <CompanySmall>{ pageData.smallText }</CompanySmall>
            <CompanyName>
              { pageData.companyName }
            </CompanyName>
          </CompanyData>
        </DataLeft>
        <DataRight>
          <FollowButton>
            <span>
              Подписаться
            </span>
            <StarIcon/>
            <span>
              { pageData.numberOfFollowers }
            </span>
          </FollowButton>

          <WebsitesBox>
            {
              pageData.websites.map( ( { img, link } ) =>
                <Website href={ link }>
                  <div>{ img }</div>
                </Website>,
              )
            }
          </WebsitesBox>
        </DataRight>
      </CareerItemPageHeader>
      <WebsitesBoxResponsive>
        {
          pageData.websites.map( ( { img, link } ) =>
            <Website href={ link }>
              <div>{ img }</div>
            </Website>,
          )
        }
      </WebsitesBoxResponsive>
      <NavbarBox>
        <WebinarNavbarNav onClick={ () => setActiveNav( "vacancy" ) } active={ activeNav === "vacancy" }>
          Вакансии
        </WebinarNavbarNav>
        <WebinarNavbarNav onClick={ () => setActiveNav( "about" ) } active={ activeNav === "about" }>
          О компании
        </WebinarNavbarNav>
      </NavbarBox>
      <TextDataContainer>
        {
          activeNav === "about" ?
            <AboutText>
              { pageData.aboutCompany }
              <br/>
              <hr/>
              { pageData.toggleCardData.map( ( { title, body }, index ) =>
                  <VacanciesList onClick={ () => {setChosenVacancy( index ); setActiveNav("vacancy")} }>
                    { title }
                  </VacanciesList>
                ,
              ) }
            </AboutText>
            :
            <VacancyText>
              <CareerItemVacancyToggle
                title={ pageData.toggleCardData[ chosenVacancy ].title }
                body={ pageData.toggleCardData[ chosenVacancy ].body }
              />
            </VacancyText>
        }
      </TextDataContainer>
    </CareerItemPageStyled>
  );
};

export default CareerItemPage;