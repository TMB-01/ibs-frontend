import React, { useState } from "react";
import {
  CareerItemVacancyToggleStyled,
  RespondToVacancyBtn,
  ToggleBody, ToggleBodyContainer, ToggleBodyText,
  ToggleHeader,
  ToggleHeaderTitle,
  ToggleIcon,
} from "./styles";

//icons
import { ReactComponent as ToggleIconSvg } from "../../assets/icons/toggleIcon.svg";

const CareerItemVacancyToggle = () => {

  const [ isOpen, setIsOpen ] = useState( true );

  const toggleCardData = {
    title: "Автор и преподаватель курса \"Активы и обязательства\" (Финансовая аналитика)",
    body:<div>
      <p><b>Ищем преподавателей на Факультет руководителя клиентского сервиса</b></p>
      <p>
        <b>Чем предстоит заниматься:</b> <br/>
        Преподавать курс вебинаров по готовым методикам или разрабатывать собственный контент; <br/>
        Вырабатывать у студентов профессиональные навыки через полученные знания и умения; <br/>
        Проверять домашние задания, предоставлять обратную связь для студентов; <br/>
        занятия проходят в основном в вечернее время по будням и в дневное по Выходным — тогда, когда удобно
        большинству офисных работников с пятидневкой. <br/>
      </p>
      <p>
        <b>Мы ожидаем от тебя:</b> <br/>
        Умение доступно и просто объяснять сложные вещи, заинтересовать, увлечь аудиторию; <br/>
        Желание делиться своими знаниями; <br/>
        Опыт работы в клиентском сервисе — от 3-4 лет; <br/>
        Глубокое понимание предметной области — для тебя важно, чтобы сервис твоего продукта был огненным, как
        со
        стороны клиента, так и со стороны бизнеса; <br/>
        Опыт преподавания необязателен, мы ищем практиков! Остальному научим :) <br/>
      </p>
      <p>
        <b>Мы предлагаем:</b> <br/>
        Возможность прокачать личный бренд, преподавать уникальный контент, быть наставником и влиять на
        качество
        комьюнити; <br/>
        Удаленный формат сотрудничества (можно совмещать с основной работой, свободный график) <br/>
      </p>
      <p>
        Если вы полны творческих идей и готовы помочь команде Geekbrains делать сильные образовательные
        продукты,
        оставьте отклик на вакансию и мы свяжемся с вами в ближайшее время! <br/>
        Для этого необходимо записать пару минут видеоинтервью по ссылке, ответив на несколько вопросов - <br/>
        <a
          href="https://geekbrains.vcv.ru/r/isem-prepodavatelej">https://geekbrains.vcv.ru/r/isem-prepodavatelej</a>
        <br/>
      </p>
    </div>
  };

  const { title, body } = toggleCardData;

  return (
    <CareerItemVacancyToggleStyled>
      <ToggleHeader onClick={ () => setIsOpen( isOpen ) }>
        <ToggleIcon isOpen={ isOpen }>
          <ToggleIconSvg/>
        </ToggleIcon>
        <ToggleHeaderTitle>
          { title }
        </ToggleHeaderTitle>
      </ToggleHeader>
      <ToggleBody isOpen={ isOpen }>
        <ToggleBodyContainer>
          <ToggleBodyText>
            { body }
          </ToggleBodyText>
          <RespondToVacancyBtn>
            ОТКЛИКНУТЬСЯ
          </RespondToVacancyBtn>
        </ToggleBodyContainer>
      </ToggleBody>
    </CareerItemVacancyToggleStyled>
  );
};

export default CareerItemVacancyToggle;