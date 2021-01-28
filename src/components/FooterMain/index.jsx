import {
  FooterContent,
  FooterLink,
  FooterLinkBox,
  FooterNavs,
  FooterWrapper,
  SocialMedias,
  SocialMediasIcon,
} from "./styles";

//icons
import { ReactComponent as FaceBook } from "../../assets/icons/facebook-filled.svg";
import { ReactComponent as Vk } from "../../assets/icons/vk-social-logotype.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram-filled.svg";
import { ReactComponent as YouTube } from "../../assets/icons/youtube-filled.svg";
import { ReactComponent as Telegram } from "../../assets/icons/telegram-filled.svg";

function FooterMain() {
  return (
    <FooterWrapper>
      <FooterContent>
        <SocialMedias>
          <SocialMediasIcon>
            <FaceBook/>
          </SocialMediasIcon>
          <SocialMediasIcon>
            <Vk/>
          </SocialMediasIcon>
          <SocialMediasIcon>
            <Instagram/>
          </SocialMediasIcon>
          <SocialMediasIcon>
            <YouTube/>
          </SocialMediasIcon>
          <SocialMediasIcon>
            <Telegram/>
          </SocialMediasIcon>
        </SocialMedias>

        <FooterNavs>
          <FooterLinkBox>
            <FooterLink>
              Отзывы
            </FooterLink>
            <FooterLink>
              Помощь
            </FooterLink>
            <FooterLink>
              О проекте
            </FooterLink>
          </FooterLinkBox>

          <FooterLinkBox>
            <FooterLink>
              Лицензия
            </FooterLink>
            <FooterLink>
              Вакансии
            </FooterLink>
            <FooterLink>
              Компаниям
            </FooterLink>
            <FooterLink>
              Партнерам
            </FooterLink>
            <FooterLink>
              Компаниям
            </FooterLink>
            <span>©</span>
            <span>8 800 700-68-41</span>
          </FooterLinkBox>
        </FooterNavs>
      </FooterContent>
    </FooterWrapper>
  );
}

export default FooterMain;