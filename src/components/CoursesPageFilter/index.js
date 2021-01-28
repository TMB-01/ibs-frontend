import React, { useState } from 'react';

import {
  CleanSearch,
  CoursePageSearchBox,
  GuaranteeSearch,
  ToggleCoursesIcon,
  ToggleCoursesList,
  ToggleCoursesName,
  ToggleFilterBox,
  ToggleFilterButton,
  ToggleFilterButtonSearch,
  ToggleFilterClose,
  ToggleFilterContainer,
  ToggleFilterFooter,
  ToggleFilterTittle
} from "./styles";

//Styles
import {
  Option,
  OptionBox,
  OptionDescription,
  OptionTitle,
  SelectTitle,
  TickIcon,
} from "../Select/styles";

//Icon
import { ReactComponent as Tick } from "../../assets/icons/check-solid.svg";
import { ReactComponent as Close } from "../../assets/icons/cancel.svg";

//com
import Select from "../Select";

// mock
import { selectInfo } from './mock';
import { allDirections } from './mock';


const CoursesPageFilter = () => {
  const [ selectedDirection, setSelectedDirection ] = useState( "Все направления" );
  const [ isDirectionOpen, setIsDirectionOpen ] = useState( false );
  const [ openOption, setOpenOption ] = useState();
  const [ selectInfoToSearch, setSelectInfoToSearch ] = useState( [] );
  const [ isToggleFilterOpen, setIsToggleFilterOpen ] = useState( false );

  return (
    <CoursePageSearchBox>
      {
        selectInfo.map( ( { courseType, optionData }, selectIndex ) =>
          <Select
            key={ selectIndex }
            courseType={ courseType }
            selectInfoToSearch={ selectInfoToSearch }
            setSelectInfoToSearch={ setSelectInfoToSearch }
            openOption={ openOption }
            setOpenOption={ setOpenOption }
            selectIndex={ selectIndex }
            optionData={ optionData }
            courseSelect
          />,
        )
      }
      <GuaranteeSearch chosen={ selectInfoToSearch.includes( "С гарантией трудоустройства" ) }
        onClick={ () => setSelectInfoToSearch( prevState => prevState.includes( "С гарантией трудоустройства" ) ? [ ...prevState.filter( e => e !== "С гарантией трудоустройства" ) ] : [ ...prevState, "С гарантией трудоустройства" ] ) }>
        С гарантией трудоустройства
      </GuaranteeSearch>

      <CleanSearch clean={ selectInfoToSearch.length === 0 } onClick={ () => setSelectInfoToSearch( '' ) }>
        Сбросить фильтры
      </CleanSearch>
      <ToggleFilterButton onClick={ () => setIsDirectionOpen( !isDirectionOpen ) }>
        { selectedDirection }
      </ToggleFilterButton>
      <ToggleFilterBox isOpen={ isDirectionOpen }>
        <ToggleFilterClose onClick={ () => setIsDirectionOpen( !isDirectionOpen ) }>
          <Close/>
        </ToggleFilterClose>
        <ToggleFilterTittle>
          Выберите направление
        </ToggleFilterTittle>
        { 
          allDirections.map( ( { icon, name } ) =>
            <ToggleCoursesList onClick={ () => {
              setSelectedDirection( name );
              setIsDirectionOpen( !isDirectionOpen );
            } }>
              <ToggleCoursesIcon>
                <img
                  src={ icon }
                  alt="" className="mob-menu-image"/>
              </ToggleCoursesIcon>
              <ToggleCoursesName>{ name }</ToggleCoursesName>
            </ToggleCoursesList>,
          )}
      </ToggleFilterBox>
      <ToggleFilterButton onClick={ () => setIsToggleFilterOpen( !isToggleFilterOpen ) } filter>
        <span>Фильтры</span>
        <img
          src="https://assets.website-files.com/5f75b134a1a14b83f4e06dfc/5f85586954b3fcd3e8f667be_settings--adjust.svg"
          loading="lazy" alt="" className="image-24"/>
      </ToggleFilterButton>
      <ToggleFilterBox isOpen={ isToggleFilterOpen }>
        <ToggleFilterContainer>
          <ToggleFilterClose onClick={ () => setIsToggleFilterOpen( !isToggleFilterOpen ) }>
            <Close/>
          </ToggleFilterClose>
          <ToggleFilterTittle>
            Фильтры
          </ToggleFilterTittle>
          { selectInfo.map( (
            {
              courseType,
              optionData,
            },
            selectIndex ) =>
            <>
              <SelectTitle>
                { courseType }
              </SelectTitle>
              <OptionBox last={ selectIndex + 1 === selectInfo.length }>
                { optionData.map( ( { title, description }, index ) =>
                  <Option key={ index }
                    onClick={
                      () => setSelectInfoToSearch(
                        prevState => !prevState.includes( selectIndex + "," + index ) ?
                          [ ...prevState, selectIndex + ',' + index ] :
                          [ ...prevState.filter( e => e !== selectIndex + ',' + index ) ],
                      )
                    }
                  >
                    <TickIcon chosen={ selectInfoToSearch.includes( selectIndex + "," + index ) }>
                      <Tick/>
                    </TickIcon>
                    <div>
                      <OptionTitle>
                        { title }
                      </OptionTitle>
                      <OptionDescription>
                        { description }
                      </OptionDescription>
                    </div>
                  </Option>,
                ) }
              </OptionBox>
            </>,
          ) }
        </ToggleFilterContainer>
        <ToggleFilterFooter>
          <CleanSearch toggle onClick={ () => setSelectInfoToSearch( '' ) }>
            Сбросить фильтры
          </CleanSearch>
          <ToggleFilterButtonSearch onClick={ () => setIsToggleFilterOpen( !isToggleFilterOpen ) }>
            Применить
          </ToggleFilterButtonSearch>
        </ToggleFilterFooter>
      </ToggleFilterBox>
    </CoursePageSearchBox>
  )
};

export default CoursesPageFilter;