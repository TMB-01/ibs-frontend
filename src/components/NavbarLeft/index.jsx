import {
  Logo,
  NavbarStyled,
  NavIcon,
  NavLinkStyled,
  NavName,
  NavsStyled,
} from "./styles";

//Icons
import { ReactComponent as CoursesIcon } from "../../assets/icons/courses.svg";
import { ReactComponent as WebinarsIcon } from "../../assets/icons/webinar.svg";
import { ReactComponent as ForumIcon } from "../../assets/icons/forum.svg";
import { ReactComponent as BlogIcon } from "../../assets/icons/blog.svg";
import { ReactComponent as TestsIcon } from "../../assets/icons/tests.svg";
import { ReactComponent as CareersIcon } from "../../assets/icons/careers.svg";

function NavbarLeft( { left } ) {

  return (
    <NavbarStyled left={ left }>
      <Logo to="/">
        {' IBS '}
      </Logo>
      <NavsStyled>
        <NavLinkStyled to={ "/courses" }>
          <NavIcon><CoursesIcon/></NavIcon>
          <NavName>Курсы</NavName>
        </NavLinkStyled>
        <NavLinkStyled to={ "/webinars" }>
          <NavIcon><WebinarsIcon/></NavIcon>
          <NavName>Вебинары</NavName>
        </NavLinkStyled>
        <NavLinkStyled to={ "/forums" }>
          <NavIcon><ForumIcon/></NavIcon>
          <NavName>Форум</NavName>
        </NavLinkStyled>
        <NavLinkStyled to={ "/blogs" }>
          <NavIcon><BlogIcon/></NavIcon>
          <NavName>Блог</NavName>
        </NavLinkStyled>
        <NavLinkStyled to={ "/tests" }>
          <NavIcon><TestsIcon/></NavIcon>
          <NavName>Тесты</NavName>
        </NavLinkStyled>
        <NavLinkStyled to={ "/careers" }>
          <NavIcon><CareersIcon/></NavIcon>
          <NavName>Карьера</NavName>
        </NavLinkStyled>
      </NavsStyled>
    </NavbarStyled>
  );
}

export default NavbarLeft;