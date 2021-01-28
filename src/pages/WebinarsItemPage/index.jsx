import React from "react";
import WebinarsItemVideoSection from "../../components/WebinarsItemVideoSection";
import WebinarsItemTextDataSection from "../../components/WebinarsItemTextDataSection";
import { WebinarItemPageStyled } from "./styles";
import NavbarTop from '../../components/NavbarTop';

const WebinarsItemPage = () => {
  const webinarCardInfo = [
    {
      poster: "https://d2xzmw6cctk25h.cloudfront.net/event/3143/image/medium-fb1564d96f6faeaf8d566821e0eb353d.png",
      date: "Вс, 17 янв., 20:00 MSK",
      title: "Охота на уток на чистом HTML/CSS",
      author: "Алексей Кадочников",
    }, {
      poster: "https://d2xzmw6cctk25h.cloudfront.net/event/3143/image/medium-fb1564d96f6faeaf8d566821e0eb353d.png",
      date: "Вс, 17 янв., 20:00 MSK",
      title: "Тестирую с 2-х лет: убедимся, что готовы погрузиться в тестирование",
      author: "Алексей Кадочников",
    }, {
      poster: "https://d2xzmw6cctk25h.cloudfront.net/event/3143/image/medium-fb1564d96f6faeaf8d566821e0eb353d.png",
      date: "Вс, 17 янв., 20:00 MSK",
      title: "Как стать DevOps-инженером",
      author: "Алексей Кадочников",
    }, {
      poster: "https://d2xzmw6cctk25h.cloudfront.net/event/3143/image/medium-fb1564d96f6faeaf8d566821e0eb353d.png",
      date: "Вс, 17 янв., 20:00 MSK",
      title: "Как верстать сайты в 7 раз быстрее",
      author: "Алексей Кадочников",
    }, {
      poster: "https://d2xzmw6cctk25h.cloudfront.net/event/3143/image/medium-fb1564d96f6faeaf8d566821e0eb353d.png",
      date: "Вс, 17 янв., 20:00 MSK",
      title: "Принципы мобильного тестирования",
      author: "Алексей Кадочников",
    }, {
      poster: "https://d2xzmw6cctk25h.cloudfront.net/event/3143/image/medium-fb1564d96f6faeaf8d566821e0eb353d.png",
      date: "Вс, 17 янв., 20:00 MSK",
      title: "Искусственный интеллект. Итоги 2020 года. Часть II",
      author: "Алексей Кадочников",
    }, {
      poster: "https://d2xzmw6cctk25h.cloudfront.net/event/3143/image/medium-fb1564d96f6faeaf8d566821e0eb353d.png",
      date: "Вс, 17 янв., 20:00 MSK",
      title: "Искусственный интеллект. Итоги 2020 года. Часть I",
      author: "Алексей Кадочников",
    }, {
      poster: "https://d2xzmw6cctk25h.cloudfront.net/event/3143/image/medium-fb1564d96f6faeaf8d566821e0eb353d.png",
      date: "Вс, 17 янв., 20:00 MSK",
      title: "Что нужно знать, чтобы стать frontend разработчиком",
      author: "Алексей Кадочников",
    }, {
      poster: "https://d2xzmw6cctk25h.cloudfront.net/event/3143/image/medium-fb1564d96f6faeaf8d566821e0eb353d.png",
      date: "Вс, 17 янв., 20:00 MSK",
      title: "Новогоднее настроение за 60 минут. Создай поздравительную открытку. Вебинар для школьников и их родителей",
      author: "Алексей Кадочников",
    }, {
      poster: "https://d2xzmw6cctk25h.cloudfront.net/event/3143/image/medium-fb1564d96f6faeaf8d566821e0eb353d.png",
      date: "Вс, 17 янв., 20:00 MSK",
      title: "Как стать сетевым инженером",
      author: "Алексей Кадочников",
    },
  ];
  const chosenWebinarData = {
    date: "16 декабря в 16:00 (GMT+03:00) Москва",
    title: "Что такое DevOps и почему о нем важно знать",
    textDataDate: "Сб, 16 янв., 19:00 MSK",
    authorImg: "https://d2xzmw6cctk25h.cloudfront.net/avatar/1070706/attachment/thumb-57402d01568022a88ac70bafd6dc36a3.png",
    author: "Ведущий: Дмитрий Радчук",
    numberOfPeople: 123,
    numberOfComments: 1,
    numberOfLikes: 3,
    paragraphs: [
      {
        strong: "Кому будет полезен вебинар:",
        text: [ "- Тем, кто хочет узнать, чем занимаются DevOps-инженеры и какие проблемы они решают." ],
      }, {
        strong: "На вебинаре рассмотрят:",
        text: [
          "- Стандартные практики управления и администрирования IT-инфраструктуры;",
          "- Проблемы пользователей, связанные с данными практиками;",
          "- Возможности, появляющиеся со сменой подхода;",
          "- Требования к успешной работе инженеров/администраторов.",
        ],
      }, {
        strong: "Техническая информация",
        text: [
          "— Продолжительность 1–1,5 часа.",
          "— Вебинар проводится на Zoom.",
          "— Запись появится на следующий день.",
          "— На вебинаре можно и нужно задавать вопросы.",
        ],
      }, {
        strong: "Ведущий:",
        text: [
          "Дмитрий Радчук, сетевой инженер в Яндексе. Поддерживает и развивает ip/mpls-сети и дата-центры компании. Обладатель сертификатов CCIE.",
        ],
      },
    ],
    hashtags: [ "баги на сайте", "гикбрейнс", "сайт" ],
    attendees: [
      {
        img: "https://d2xzmw6cctk25h.cloudfront.net/images/anonymous.png",
        name: "Андрей Свиридов",
      }, {
        img: "https://d2xzmw6cctk25h.cloudfront.net/avatar/2460959/attachment/thumb-b044048145bc46c940e561cede7d8192.jpg",
        name: "Андрей Свиридов",
      }, {
        img: "https://d2xzmw6cctk25h.cloudfront.net/avatar/2202816/attachment/thumb-d285b0fadda93fcc796270cbe720ba52.jpeg",
        name: "Андрей Свиридов",
      }, {
        img: "https://d2xzmw6cctk25h.cloudfront.net/avatar/1378193/attachment/thumb-3580458dd922218c6f5a4ce920051ac1.jpg",
        name: "Андрей Свиридов",
      }, {
        img: "https://d2xzmw6cctk25h.cloudfront.net/avatar/1390029/attachment/thumb-f38958afa80118aef6ff402fba5bb14b.jpg",
        name: "Андрей Свиридов",
      },{
        img: "https://d2xzmw6cctk25h.cloudfront.net/images/anonymous.png",
        name: "Андрей Свиридов",
      }, {
        img: "https://d2xzmw6cctk25h.cloudfront.net/avatar/2460959/attachment/thumb-b044048145bc46c940e561cede7d8192.jpg",
        name: "Андрей Свиридов",
      }, {
        img: "https://d2xzmw6cctk25h.cloudfront.net/avatar/2202816/attachment/thumb-d285b0fadda93fcc796270cbe720ba52.jpeg",
        name: "Андрей Свиридов",
      }, {
        img: "https://d2xzmw6cctk25h.cloudfront.net/avatar/1378193/attachment/thumb-3580458dd922218c6f5a4ce920051ac1.jpg",
        name: "Андрей Свиридов",
      }, {
        img: "https://d2xzmw6cctk25h.cloudfront.net/avatar/1390029/attachment/thumb-f38958afa80118aef6ff402fba5bb14b.jpg",
        name: "Андрей Свиридов",
      },{
        img: "https://d2xzmw6cctk25h.cloudfront.net/images/anonymous.png",
        name: "Андрей Свиридов",
      }, {
        img: "https://d2xzmw6cctk25h.cloudfront.net/avatar/2460959/attachment/thumb-b044048145bc46c940e561cede7d8192.jpg",
        name: "Андрей Свиридов",
      }, {
        img: "https://d2xzmw6cctk25h.cloudfront.net/avatar/2202816/attachment/thumb-d285b0fadda93fcc796270cbe720ba52.jpeg",
        name: "Андрей Свиридов",
      }, {
        img: "https://d2xzmw6cctk25h.cloudfront.net/avatar/1378193/attachment/thumb-3580458dd922218c6f5a4ce920051ac1.jpg",
        name: "Андрей Свиридов",
      }, {
        img: "https://d2xzmw6cctk25h.cloudfront.net/avatar/1390029/attachment/thumb-f38958afa80118aef6ff402fba5bb14b.jpg",
        name: "Андрей Свиридов",
      },
    ],
  };

  return (
    <WebinarItemPageStyled>
      <NavbarTop item/>
      <WebinarsItemVideoSection time={ chosenWebinarData.date } webinarCardInfo={ webinarCardInfo }/>
      <WebinarsItemTextDataSection webinarInfo={ chosenWebinarData }/>
    </WebinarItemPageStyled>
  );
};

export default WebinarsItemPage;