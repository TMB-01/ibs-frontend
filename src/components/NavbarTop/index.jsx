import React, { useState } from 'react';

import {
  CloseIcon,
  Header,
  NavbarTopNavsAndUserStyled,
  NavbarTopStyled,
  NavLink,
  NavsStyled,
  PageName,
  SearchBox,
  SearchIcon,
  SearchInput,
  SearchResult,
  SearchWrapper,
  ToggleNavbarBox,
  ToggleNavbarHeader,
  User,
  Logo, UnderHeader, MenuBarIcon
} from "./styles";

//Icons
import { ReactComponent as VoiceOfMarketing } from "../../assets/icons/voice-of-marketing.svg";
import { ReactComponent as Search } from "../../assets/icons/search-icon.svg";
import { ReactComponent as Notification } from "../../assets/icons/notification.svg";
import { ReactComponent as Like } from "../../assets/icons/like.svg";
import { ReactComponent as Messages } from "../../assets/icons/messages.svg";
import { ReactComponent as Dots } from "../../assets/icons/three-dots.svg";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import { ReactComponent as Cancel } from "../../assets/icons/cancel.svg";
import { ReactComponent as Menu } from "../../assets/icons/bars-solid.svg";

//User Image
import UserImg from "../../assets/images/user.png";
import NavbarLeft from "../NavbarLeft";

const NavbarTop = ( { setPageName, pageName, item } ) => {

  const [ searchPressed, setSearchPressed ] = useState( false );
  const [ isNavbarOpen, setIsNavbarOpen ] = useState( false );

  return (
    <Header>
      <NavbarTopStyled>
        <PageName>
          { pageName }
          {/*Вебинары*/ }
        </PageName>
        <NavbarTopNavsAndUserStyled>
          <NavsStyled>
            <NavLink>
              <VoiceOfMarketing/>
            </NavLink>
            <NavLink onClick={ () => setSearchPressed( !searchPressed ) }>
              <Search/>
            </NavLink>
            <NavLink>
              <Notification/>
            </NavLink>
            <NavLink>
              <Like/>
            </NavLink>
            <NavLink>
              <Messages/>
            </NavLink>
          </NavsStyled>
          <User>
            <img src={ UserImg } alt=""/>
            <Dots style={{height: '32px', width: 'auto'}} />
          </User>
          <MenuBarIcon onClick={ () => setIsNavbarOpen( !isNavbarOpen ) }>
            <Menu/>
          </MenuBarIcon>
        </NavbarTopNavsAndUserStyled>
      </NavbarTopStyled>

      {/*Search Things*/ }

      <SearchWrapper open={ searchPressed } item={item}>
        <SearchBox>
          <SearchIcon>
            <Search/>
          </SearchIcon>
          <SearchInput placeholder="Search"/>
          <CloseIcon onClick={ () => setSearchPressed( !searchPressed ) }>
            <Close/>
          </CloseIcon>
        </SearchBox>
        <SearchResult>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet consectetur deleniti eius incidunt
          minus quasi qui recusandae reprehenderit. Ab ad cupiditate deserunt distinctio excepturi illo iusto quod vitae
          voluptatum.
        </SearchResult>
      </SearchWrapper>

      <ToggleNavbarBox open={ isNavbarOpen }>
        <ToggleNavbarHeader>
          <SearchIcon search onClick={ () => {setSearchPressed( !searchPressed ); setIsNavbarOpen(!isNavbarOpen)}}>
            <Search/>
          </SearchIcon>
          <Logo to="/">
            IBS
          </Logo>
          <SearchIcon cancel onClick={ () => setIsNavbarOpen( !isNavbarOpen ) }>
            <Cancel/>
          </SearchIcon>
        </ToggleNavbarHeader>
        <UnderHeader>
          <NavLink>
            <Like/>
          </NavLink>
          <NavLink>
            <Messages/>
          </NavLink>
          <NavLink>
            <Notification/>
          </NavLink>
        </UnderHeader>
        <NavbarLeft setPageName={ setPageName }/>
      </ToggleNavbarBox>
    </Header>
  );
};

export default NavbarTop;