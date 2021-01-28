import React from "react";
import {
  AsideBlogCardText,
  AsideBlogCardTitle,
  AsideCardIconBoxGreen,
  AsideCardTitle,
  AsideCircleCardIcon,
  AsideCourseCardBox,
  AsideCourseCardDate,
  AsideCourseCardSubTitle,
  AsideCourseCardText,
  AsideCourseCardTitleAndSub,
  AsideRectCardIcon,
  CommentsBoxTitle,
  CommentsContainer,
  FollowBox,
  FollowButton,
  ForumItemPageAside,
  ForumItemPageAsideContainer,
  ForumItemPageAsideTitle,
  ForumItemPageContainer,
  ForumItemPageStyled,
  ForumTopicImg,
  ForumTopicPage,
  ForumTopicText,
  ForumTopicTextBox,
  ForumTopicUnderText,
  IconTextBox,
  Title,
} from "./styles";

import { HashtagTags } from "../../components/WebinarsItemTextDataSection/styles";
import { Icon, Tag } from "../../components/ForumCard/styles";
import NavbarTop from '../../components/NavbarTop';


//icons
import { ReactComponent as Hashtag } from "../../assets/icons/hashtag-solid.svg";
import { ReactComponent as User } from "../../assets/icons/user-solid.svg";
import { ReactComponent as Clock } from "../../assets/icons/clock-regular.svg";
import { ReactComponent as Like } from "../../assets/icons/like-filled.svg";
import { ReactComponent as Wifi } from "../../assets/icons/wifi-solid.svg";
import { ReactComponent as Eye } from "../../assets/icons/eye.svg";
import { ReactComponent as Calendar } from "../../assets/icons/calendar-alt-regular.svg";

//img
import ForumCommentsInput from "../../components/ForumCommentsInput";
import CommentCardBox from "../../components/CommentCardBox";
import { WebinarIcon, WebinarIconBox, WebinarIconNumber, WebinarIcons } from "../../components/WebinarCard/styles";
import { ReactComponent as Group } from "../../assets/icons/group.svg";
import { ReactComponent as Comments } from "../../assets/icons/comments.svg";

const ForumItemPage = () => {

  const hashtags = [ "баги на сайте", "гикбрейнс", "сайт" ];

  const comments = [
    {
      userImg: "https://d2xzmw6cctk25h.cloudfront.net/avatar/1113932/attachment/thumb-51480090439bb1e0e6003022449b3e2a.jpg",
      userName: "Сергей Гильманов",
      date: "13 ноября 2018 в 14:29",
      texts: [
        "Адаптив под мобильные устройства!",
        "- Комментарии при наборе текста вместо пробела копирует введённые значения ранее.",
        "- Многие страницы не адаптированы вообще например форма заполнения рюземе. Это самое что кидается мне в глаза остальное так по-мелочи.",
      ],
      numberOfLikes: 3,
      answers: [
        {
          userImg: "https://d2xzmw6cctk25h.cloudfront.net/avatar/1113932/attachment/thumb-51480090439bb1e0e6003022449b3e2a.jpg",
          userName: "Сергей Гильманов",
          date: "13 ноября 2018 в 14:29",
          texts: [
            "Адаптив под мобильные устройства!",
            "- Комментарии при наборе текста вместо пробела копирует введённые значения ранее.",
            "- Многие страницы не адаптированы вообще например форма заполнения рюземе. Это самое что кидается мне в глаза остальное так по-мелочи.",
          ],
          numberOfLikes: 3,
          answers: [
            {
              userImg: "https://d2xzmw6cctk25h.cloudfront.net/avatar/1113932/attachment/thumb-51480090439bb1e0e6003022449b3e2a.jpg",
              userName: "Сергей Гильманов",
              date: "13 ноября 2018 в 14:29",
              texts: [
                "Адаптив под мобильные устройства!",
                "- Комментарии при наборе текста вместо пробела копирует введённые значения ранее.",
                "- Многие страницы не адаптированы вообще например форма заполнения рюземе. Это самое что кидается мне в глаза остальное так по-мелочи.",
              ],
              numberOfLikes: 3,
              answers: [],
            },
            {
              userImg: "https://d2xzmw6cctk25h.cloudfront.net/avatar/1113932/attachment/thumb-51480090439bb1e0e6003022449b3e2a.jpg",
              userName: "Сергей Гильманов",
              date: "13 ноября 2018 в 14:29",
              texts: [
                "Адаптив под мобильные устройства!",
                "- Комментарии при наборе текста вместо пробела копирует введённые значения ранее.",
                "- Многие страницы не адаптированы вообще например форма заполнения рюземе. Это самое что кидается мне в глаза остальное так по-мелочи.",
              ],
              numberOfLikes: 3,
              answers: [],
            },
          ],
        },
      ],
    }, {
      userImg: "https://d2xzmw6cctk25h.cloudfront.net/avatar/1113932/attachment/thumb-51480090439bb1e0e6003022449b3e2a.jpg",
      userName: "Сергей Гильманов",
      date: "13 ноября 2018 в 14:29",
      texts: [
        "Адаптив под мобильные устройства!",
        "- Комментарии при наборе текста вместо пробела копирует введённые значения ранее.",
        "- Многие страницы не адаптированы вообще например форма заполнения рюземе. Это самое что кидается мне в глаза остальное так по-мелочи.",
      ],
      numberOfLikes: 3,
      answers: [],
    },
  ];

  const courseAside = [
    {
      icon: "https://d2xzmw6cctk25h.cloudfront.net/basiccourse/120/image/small-3da81d569204eac82864007d65f6c78c.png",
      title: "Интенсив “Основы программирования",
      subtitle: "Онлайн-курс",
      dateDay: 20,
      dateMonth: "декабря",
    }, {
      icon: "https://d2xzmw6cctk25h.cloudfront.net/basiccourse/120/image/small-3da81d569204eac82864007d65f6c78c.png",
      title: "Интенсив “Основы программирования",
      subtitle: "Онлайн-курс",
      dateDay: 20,
      dateMonth: "декабря",
    }, {
      icon: "https://d2xzmw6cctk25h.cloudfront.net/basiccourse/120/image/small-3da81d569204eac82864007d65f6c78c.png",
      title: "Интенсив “Основы программирования",
      subtitle: "Онлайн-курс",
      dateDay: 20,
      dateMonth: "декабря",
    },
  ];

  const blogAside = [
    {
      icon: "https://d2xzmw6cctk25h.cloudfront.net/post/2488/image/medium-16e367ea803dbbf00651a850895e95f9.png",
      title: "Performance-маркетинг: что это такое?",
      numberOfView: 123,
      numberOfComments: 123,
      numberOfLikes: 123,

    }, {
      icon: "https://d2xzmw6cctk25h.cloudfront.net/post/2488/image/medium-16e367ea803dbbf00651a850895e95f9.png",
      title: "Performance-маркетинг: что это такое?",
      numberOfView: 123,
      numberOfComments: 123,
      numberOfLikes: 123,

    }, {
      icon: "https://d2xzmw6cctk25h.cloudfront.net/post/2488/image/medium-16e367ea803dbbf00651a850895e95f9.png",
      title: "Performance-маркетинг: что это такое?",
      numberOfView: 123,
      numberOfComments: 123,
      numberOfLikes: 123,

    },
  ];

  const webinarAside = [
    {
      icon: "https://d2xzmw6cctk25h.cloudfront.net/event/3175/image/medium-1778bdc7bfbf0a3b49a9514bae75b6c0.png",
      title: "Performance-маркетинг: что это такое?",
      date: "31 января",
      numberOfPeople: 23,
      numberOfLikes: 3,
    }, {
      icon: "https://d2xzmw6cctk25h.cloudfront.net/event/3175/image/medium-1778bdc7bfbf0a3b49a9514bae75b6c0.png",
      title: "Performance-маркетинг: что это такое?",
      date: "31 января",
      numberOfPeople: 23,
      numberOfLikes: 3,
    }, {
      icon: "https://d2xzmw6cctk25h.cloudfront.net/event/3175/image/medium-1778bdc7bfbf0a3b49a9514bae75b6c0.png",
      title: "Performance-маркетинг: что это такое?",
      date: "31 января",
      numberOfPeople: 23,
      numberOfLikes: 3,
    },
  ];

  const newTopicAside = [
    {
      icon: "https://d2xzmw6cctk25h.cloudfront.net/avatar/1264580/attachment/thumb-73725d3f6b7fd88bf898bae75ade8af3.jpg",
      subTitle: "Корольковская Виктория",
      title: "Какова цена разработки самописного кода",
      numberOfAnswers: 3,
    }, {
      icon: "https://d2xzmw6cctk25h.cloudfront.net/avatar/1264580/attachment/thumb-73725d3f6b7fd88bf898bae75ade8af3.jpg",
      subTitle: "Корольковская Виктория",
      title: "Какова цена разработки самописного кода",
      numberOfAnswers: 3,
    }, {
      icon: "https://d2xzmw6cctk25h.cloudfront.net/avatar/1264580/attachment/thumb-73725d3f6b7fd88bf898bae75ade8af3.jpg",
      subTitle: "Корольковская Виктория",
      title: "Какова цена разработки самописного кода",
      numberOfAnswers: 3,
    },
  ];

  return (
    <>
    <NavbarTop item/>
      <ForumItemPageStyled>
        <ForumItemPageContainer>
          <Title>Пожелания по улучшению сайта GeekBrains</Title>
          <HashtagTags>
            <Icon><Hashtag/></Icon>
            {
              hashtags.map( ( hashtag, index ) =>
                <React.Fragment key={ index }>
                  <Tag>{ hashtag }</Tag>
                  { index !== hashtags.length - 1 && <small>,</small> }
                </React.Fragment>,
              )
            }
          </HashtagTags>

          <ForumTopicPage>
            <ForumTopicImg>
              <img
                src="https://d2xzmw6cctk25h.cloudfront.net/avatar/1137531/attachment/thumb-223ad061760cb5ba82df471578d71519.jpg"
                alt="Дарья Грач"/>
            </ForumTopicImg>
            <ForumTopicTextBox>
              <ForumTopicText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi autem consequuntur culpa deserunt
                explicabo harum nisi, odit optio perferendis, quas quibusdam quis quisquam soluta voluptatibus. Dolores et
                repellendus ullam.
              </ForumTopicText>
              <ForumTopicUnderText>
              <span>
              <IconTextBox>
                <User/>
                Дарья Грач
              </IconTextBox>
              <IconTextBox>
                <Clock/>
                13 ноября 2018 в 13:33
              </IconTextBox>
                </span>
                <IconTextBox right>
                  Спасибо
                  <Like/>
                  21
                </IconTextBox>

              </ForumTopicUnderText>
            </ForumTopicTextBox>
          </ForumTopicPage>

          <FollowBox>
            <FollowButton>
              <Wifi/>
              Подписаться
            </FollowButton>
            <p>
              38 чел.
            </p>
          </FollowBox>

          <CommentsContainer>
            <CommentsBoxTitle>
              Комментарии <span>• 1231</span>
            </CommentsBoxTitle>

            <ForumCommentsInput/>

            { comments.map( (
              {
                userImg,
                userName,
                date,
                texts,
                numberOfLikes,
                answers,
              } ) =>
              <CommentCardBox
                userImg={ userImg }
                userName={ userName }
                date={ date }
                texts={ texts }
                numberOfLikes={ numberOfLikes }
                answers={ answers }
              />,
            ) }

          </CommentsContainer>
        </ForumItemPageContainer>

        <ForumItemPageAside>
          <ForumItemPageAsideContainer>
            <ForumItemPageAsideTitle>
              Ближайшие курсы
            </ForumItemPageAsideTitle>

            { courseAside.map(
              ( {
                  icon,
                  title,
                  subtitle,
                  dateDay,
                  dateMonth,
                } ) =>
                <AsideCourseCardBox>
                  <AsideCircleCardIcon>
                    <img alt="Интенсив “Основы программирования”" className="aside-item__img"
                        src={ icon }/>
                  </AsideCircleCardIcon>
                  <AsideCourseCardText>
                    <AsideCourseCardTitleAndSub>
                      <AsideCardTitle>{ title }</AsideCardTitle>
                      <AsideCourseCardSubTitle>{ subtitle }</AsideCourseCardSubTitle>
                    </AsideCourseCardTitleAndSub>

                    <AsideCourseCardDate>
                      <p>{ dateDay }</p>
                      <div>{ dateMonth }</div>
                    </AsideCourseCardDate>

                  </AsideCourseCardText>
                </AsideCourseCardBox>,
            ) }
          </ForumItemPageAsideContainer>
          <ForumItemPageAsideContainer>
            <ForumItemPageAsideTitle>
              Новые статьи
            </ForumItemPageAsideTitle>
            { blogAside.map( (
              {
                icon,
                title,
                numberOfView,
                numberOfComments,
                numberOfLikes,
              },
              ) =>
                <AsideCourseCardBox>
                  <AsideRectCardIcon>
                    <img
                      src={ icon }
                      alt={ "blog" }/>
                  </AsideRectCardIcon>
                  <AsideBlogCardText>
                    <AsideCardTitle mb={ 8 }>
                      { title }
                    </AsideCardTitle>
                    <WebinarIcons>
                      <WebinarIconBox>
                        <WebinarIcon><Eye/></WebinarIcon>
                        <WebinarIconNumber>
                          { numberOfView }
                        </WebinarIconNumber>
                      </WebinarIconBox>
                      <WebinarIconBox>
                        <WebinarIcon><Comments/></WebinarIcon>
                        <WebinarIconNumber>
                          { numberOfComments }
                        </WebinarIconNumber>
                      </WebinarIconBox>
                      <WebinarIconBox>
                        <WebinarIcon><Like/></WebinarIcon>
                        <WebinarIconNumber>
                          { numberOfLikes }
                        </WebinarIconNumber>
                      </WebinarIconBox>
                    </WebinarIcons>
                  </AsideBlogCardText>
                </AsideCourseCardBox>,
            ) }
          </ForumItemPageAsideContainer>
          <ForumItemPageAsideContainer>
            <ForumItemPageAsideTitle>
              Новые вебинары
            </ForumItemPageAsideTitle>
            { webinarAside.map( (
              {
                icon,
                title,
                date,
                numberOfPeople,
                numberOfLikes,
              },
              ) =>

                <AsideCourseCardBox>
                  <AsideRectCardIcon>
                    <img alt="Пишем сайт с криптовалютой за час"
                        src={ icon }/>
                  </AsideRectCardIcon>
                  <AsideBlogCardText>
                    <AsideBlogCardTitle mb={ 8 }>
                      { title }
                    </AsideBlogCardTitle>
                    <WebinarIcons>
                      <AsideCardIconBoxGreen>
                        <WebinarIcon><Calendar/></WebinarIcon>
                        <WebinarIconNumber>
                          { date }
                        </WebinarIconNumber>
                      </AsideCardIconBoxGreen>
                      <WebinarIconBox>
                        <WebinarIcon><Group/></WebinarIcon>
                        <WebinarIconNumber>
                          { numberOfPeople }
                        </WebinarIconNumber>
                      </WebinarIconBox>
                      <WebinarIconBox>
                        <WebinarIcon><Like/></WebinarIcon>
                        <WebinarIconNumber>
                          { numberOfLikes }
                        </WebinarIconNumber>
                      </WebinarIconBox>
                    </WebinarIcons>
                  </AsideBlogCardText>
                </AsideCourseCardBox>,
            ) }
          </ForumItemPageAsideContainer>

          <ForumItemPageAsideContainer>
            <ForumItemPageAsideTitle>
              Новые темы
            </ForumItemPageAsideTitle>
            { newTopicAside.map( ( {
                                    icon,
                                    subTitle,
                                    title,
                                    numberOfAnswers,
                                  } ) =>
              <AsideCourseCardBox>
                <AsideCircleCardIcon>
                  <img className="aside-item__img" alt="Корольковская Виктория"
                      src={ icon }/>
                </AsideCircleCardIcon>
                <AsideCourseCardText>
                  <AsideCourseCardTitleAndSub>
                    <AsideCourseCardSubTitle>{ subTitle }</AsideCourseCardSubTitle>
                    <AsideCardTitle>{ title }</AsideCardTitle>
                  </AsideCourseCardTitleAndSub>

                  <AsideCourseCardDate>
                    <p>{ numberOfAnswers }</p>
                    <p>ответа</p>
                  </AsideCourseCardDate>

                </AsideCourseCardText>
              </AsideCourseCardBox>,
            ) }
          </ForumItemPageAsideContainer>
        </ForumItemPageAside>
      </ForumItemPageStyled>
    </>
  );
};

export default ForumItemPage;