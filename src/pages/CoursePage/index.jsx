import React, { useState } from "react";

import { CourseCards, CoursePageBox } from "./styles";

//comp
import CourseCard from "../../components/CourseCard";
import NavbarLeft from '../../components/NavbarLeft';
import NavbarTop from '../../components/NavbarTop';
import CourseBottomPopup from "../../components/CourseBottomPopup";
import CoursesForm from "../../components/CoursesForm";
import FooterMain from "../../components/FooterMain";
import PopupForm from "../../components/PopupForm";
import CoursesPageFilter from '../../components/CoursesPageFilter';
import EmptyPage from "../EmptyPage";

//mock
import { cardsInfo } from './mock';

function CoursePage() {
  const [ show, setShow ] = useState( false );

  // handleCardClick
  const handleCardClick = () => {
    setShow( true );
  };

  return (
    <>
      <CoursePageBox>
        <NavbarLeft left/>
        <NavbarTop/>
        <CoursesPageFilter/>
        <CourseCards onClick={ handleCardClick }>
          {
            cardsInfo.map( ( {
                               type,
                               guarantee,
                               name,
                               description,
                               icon,
                               duration,
                               discount,
                             } ) =>
              <CourseCard
                type={ type }
                guarantee={ guarantee }
                name={ name }
                description={ description }
                icon={ icon }
                duration={ duration }
                discount={ discount }
              />,
            )
          }
        </CourseCards>
        <EmptyPage pageName={ "Courses" }/>
        <CoursesForm/>
        <CourseBottomPopup setShow={ setShow } popUpName="girls"/>
        <CourseBottomPopup setShow={ setShow } popUpName="new-comer"/>

        <FooterMain/>
      </CoursePageBox>
      {
        show ? ( <PopupForm callback={ () => setShow( false ) }/> ) : null
      }
    </>
  );
}

export default CoursePage;