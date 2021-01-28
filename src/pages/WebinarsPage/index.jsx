import React, { useState } from "react";
import WebinarCard from "../../components/WebinarCard";

import { 
  BesideMainCard, 
  WebinarNavbar, 
  WebinarNavbarNav, 
  WebinarPageStyled, 
  WebinarsPageWrapper 
} from "./styles";

import useWindowDimensions from "../../hooks/useWindowDimensions";
import NavbarTop from '../../components/NavbarTop';
import NavbarLeft from "../../components/NavbarLeft";
import FooterMain from "../../components/FooterMain";
import EmptyPage from "../EmptyPage";

const WebinarsPage = () => {

  let secondCard = {};
  const webinarCards = [
    {
      posterImg: "https://hosty.xxx/i/862e000aeeeab23c510a068ce21e3c7247365a80.jpg",
      tillWebinar: "1 ч 33 м",
      date: "Чт, 10 дек., 19:00 MSK",
      title: "Как зарабатывать на разработке мобильных приложений? Как запустить свой стартап?",
      author: "Александр Аникин",
      numberOfPeople: 107,
      numberOfComments: 0,
      numberOfLikes: 0,
    }, {
      posterImg: "https://hosty.xxx/i/862e000aeeeab23c510a068ce21e3c7247365a80.jpg",
      tillWebinar: "1 ч 33 м",
      date: "Чт, 10 дек., 19:00 MSK",
      title: "Как зарабатывать на разработке мобильных приложений? Как запустить свой стартап?",
      author: "Александр Аникин",
      numberOfPeople: 107,
      numberOfComments: 0,
      numberOfLikes: 0,
    }, {
      posterImg: "https://hosty.xxx/i/862e000aeeeab23c510a068ce21e3c7247365a80.jpg",
      tillWebinar: "1 ч 33 м",
      date: "Чт, 10 дек., 19:00 MSK",
      title: "Как зарабатывать на разработке мобильных приложений? Как запустить свой стартап?",
      author: "Александр Аникин",
      numberOfPeople: 107,
      numberOfComments: 0,
      numberOfLikes: 0,
    }, {
      posterImg: "https://hosty.xxx/i/862e000aeeeab23c510a068ce21e3c7247365a80.jpg",
      tillWebinar: "1 ч 33 м",
      date: "Чт, 10 дек., 19:00 MSK",
      title: "Как зарабатывать на разработке мобильных приложений? Как запустить свой стартап?",
      author: "Александр Аникин",
      numberOfPeople: 107,
      numberOfComments: 0,
      numberOfLikes: 0,
    }, {
      posterImg: "https://hosty.xxx/i/862e000aeeeab23c510a068ce21e3c7247365a80.jpg",
      tillWebinar: "1 ч 33 м",
      date: "Чт, 10 дек., 19:00 MSK",
      title: "Как зарабатывать на разработке мобильных приложений? Как запустить свой стартап?",
      author: "Александр Аникин",
      numberOfPeople: 107,
      numberOfComments: 0,
      numberOfLikes: 0,
    }, {
      posterImg: "https://hosty.xxx/i/862e000aeeeab23c510a068ce21e3c7247365a80.jpg",
      tillWebinar: "1 ч 33 м",
      date: "Чт, 10 дек., 19:00 MSK",
      title: "Как зарабатывать на разработке мобильных приложений? Как запустить свой стартап?",
      author: "Александр Аникин",
      numberOfPeople: 107,
      numberOfComments: 0,
      numberOfLikes: 0,
    },
  ];
  const [ activeNav, setActiveNav ] = useState( "all" );

  const width = useWindowDimensions().width;

  return (
    <WebinarsPageWrapper>
      <NavbarLeft left/>
      <NavbarTop/>
      <WebinarNavbar>
        <WebinarNavbarNav onClick={ () => setActiveNav( "all" ) } active={ activeNav === "all" }>
          Все вебинары・1576
        </WebinarNavbarNav>
        <WebinarNavbarNav onClick={ () => setActiveNav( "my" ) } active={ activeNav === "my" }>
          Участвую
        </WebinarNavbarNav>
      </WebinarNavbar>
      <WebinarPageStyled>
        { webinarCards.map(
          ( {
              posterImg,
              tillWebinar,
              date,
              title,
              author,
              numberOfPeople,
              numberOfComments,
              numberOfLikes,
            }, index ) => {

            if ( index === 0 ) {
              return ( <WebinarCard
                mainFirstCard
                posterImg={ posterImg }
                tillWebinar={ tillWebinar }
                date={ date }
                title={ title }
                author={ author }
                numberOfPeople={ numberOfPeople }
                numberOfComments={ numberOfComments }
                numberOfLikes={ numberOfLikes }
              /> );
            } else if ( index === 1 && width > 1024 ) {
              secondCard = {
                posterImg: posterImg,
                tillWebinar: tillWebinar,
                date: date,
                title: title,
                author: author,
                numberOfPeople: numberOfPeople,
                numberOfComments: numberOfComments,
                numberOfLikes: numberOfLikes,
              };
            } else if ( index === 2 && width > 1024 ) {

              return (
                <BesideMainCard>
                  <WebinarCard
                    fullWidth
                    posterImg={ secondCard.posterImg }
                    tillWebinar={ secondCard.tillWebinar }
                    date={ secondCard.date }
                    title={ secondCard.title }
                    author={ secondCard.author }
                    numberOfPeople={ secondCard.numberOfPeople }
                    numberOfComments={ secondCard.numberOfComments }
                    numberOfLikes={ secondCard.numberOfLikes }
                  />
                  <WebinarCard
                    fullWidth
                    posterImg={ posterImg }
                    tillWebinar={ tillWebinar }
                    date={ date }
                    title={ title }
                    author={ author }
                    numberOfPeople={ numberOfPeople }
                    numberOfComments={ numberOfComments }
                    numberOfLikes={ numberOfLikes }
                  />
                </BesideMainCard>
              );
            } else {
              return (
                <WebinarCard
                  posterImg={ posterImg }
                  tillWebinar={ tillWebinar }
                  date={ date }
                  title={ title }
                  author={ author }
                  numberOfPeople={ numberOfPeople }
                  numberOfComments={ numberOfComments }
                  numberOfLikes={ numberOfLikes }
                />
              );
            }
          },
        ) }
      </WebinarPageStyled>
      <EmptyPage pageName={"Webinars"}/>
      <FooterMain />
    </WebinarsPageWrapper>
  );
};

export default WebinarsPage;