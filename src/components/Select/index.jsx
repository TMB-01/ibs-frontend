import React from "react";

import {
  Option,
  OptionBox,
  OptionDescription,
  OptionTitle,
  SelectBox,
  SelectIcon,
  SelectOptionBox,
  SelectTitle,
  TickIcon,
} from "./styles";
import { ReactComponent as DropDown } from "../../assets/icons/chevron-down-solid.svg";

//icon
import { ReactComponent as Tick } from "../../assets/icons/check-solid.svg";

function Select(
  {
    courseType,
    selectInfoToSearch,
    setSelectInfoToSearch,
    openOption,
    setOpenOption,
    optionData,
    selectIndex,
    courseSelect,
  },
) {

  return (
    <SelectBox courseSelect={ courseSelect }>
      <SelectTitle onClick={ () => setOpenOption( selectIndex === openOption ? '' : selectIndex ) }>
        { courseType }
        <SelectIcon>
          <DropDown/>
        </SelectIcon>
      </SelectTitle>
      <SelectOptionBox isOpen={ openOption === selectIndex }>
        <OptionBox>
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
                  {/*Факультет*/ }
                  { title }
                </OptionTitle>
                <OptionDescription>
                  {/*от 10 месяцев — максимум теории и практического опыта*/ }
                  { description }
                </OptionDescription>
              </div>
            </Option>,
          ) }
        </OptionBox>
      </SelectOptionBox>
    </SelectBox>
  );
}

export default Select;