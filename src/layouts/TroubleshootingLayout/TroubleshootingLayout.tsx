import TextLink from '@src/shared/ui/TextLink/TextLink';
import SidebarNav from '@src/components/SidebarNav/SidebarNav';
import SideBarLink from '@src/components/SidebarNav/ui/SideBarLink/SideBarLink';
import { Breadcrumbs } from '@mantine/core';
import { ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import ContactsCard from '@src/components/ContactsCard/ContactsCard';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import HostingInstructions from '@src/pages/instructions/ui/HostingInstructions/HostingInstructions';
import AppInstructionMd from '@src/pages/instructions/ui/AppInstructionMd/AppInstructionMd';
// import ProtocolsInstruction from '@src/pages/instructions/ui/ProtocolsInstruction/ProtocolsInstruction';
import styles from './TroubleshootingLayout.module.scss';
import MdStyledContainer from "@src/components/MdStyledContainer/MdStyledContainer";

const TroubleshootingLayout = () => {
  const [tableOfContents, setTableOfContents] = useState<any[]>([]);
  const { i18n, t } = useTranslation();
  const { instructionId } = useParams();

  useEffect(() => {
    const gitLink = `https://raw.githubusercontent.com/Aftershock669/amnezia-open-docs/master/docs/${i18n.resolvedLanguage}/instructions/tableOfContents.json`;

    const fetchData = async () => {
      const res = await fetch(gitLink);

      if (res.status === 200) {
        const data = await res.json();
        setTableOfContents(data);
      }

      // return fetch(gitLink)
      //   .then((response) => response.json())
      //   .then((data) => {
      //     setTableOfContents(data);
      //   });
    };

    fetchData();
  }, [i18n.resolvedLanguage]);

  const items = [{ title: t('navigation.support'), href: '../support' }].map((item, index) => (
    <TextLink text={item.title} to={item.href} key={index} variant="light" />
  ));

  return (
    <div className={styles.pageLayout}>
      <div className={styles.navCol}>
        <SidebarNav>
          <SideBarLink text="Не работает то" to="/" />
          <SideBarLink text="Не работает это" to="/" />
          <SideBarLink text="Ничего не работает" to="/" />
          <SideBarLink text="Работало, а теперь нет" to="/" />
          {/*{tableOfContents.map((el, i) => (*/}
          {/*  <SideBarLink key={i} text={el.title} to={el.href} />*/}
          {/*))}*/}
        </SidebarNav>
      </div>
      <div className={styles.contentCol}>
        <Breadcrumbs separator={<ChevronRight size={18} strokeWidth={3} color="#494B50" />} mt="xs">
          {items}
        </Breadcrumbs>
        <div className={styles.instructionContent} />
        <MdStyledContainer>
          <h2>Не работает то</h2>
          <p>
            Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий.
          </p>
          <h2>Не работает это</h2>
          <p>
            Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий.
          </p>
          <h2>Ничего не работает</h2>
          <p>
            Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий.
          </p>
          <h2>Работало, а теперь нет</h2>
          <p>
            Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий.
          </p>
        </MdStyledContainer>
        <div className={styles.contactsCardWrapper}>
          <ContactsCard />
        </div>
      </div>
    </div>
  );
};

export default TroubleshootingLayout;
