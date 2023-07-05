/* eslint-disable import/no-extraneous-dependencies,import/no-absolute-path */
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import MdStyledContainer from '@src/components/MdStyledContainer/MdStyledContainer';
import TextLink from '@src/shared/ui/TextLink/TextLink';
import { Breadcrumbs } from '@mantine/core';
import SidebarNav from '@src/components/SidebarNav/SidebarNav';
import { ChevronRight } from 'lucide-react';
import SideBarLink from '@src/components/SidebarNav/ui/SideBarLink/SideBarLink';
import styles from './Instruction.module.scss';

function RouterLink({ children, href }: any) {
  return href.match(/^\//) ? (
    <TextLink variant="underline" text={children} to={href} />
  ) : (
    <TextLink variant="underline" text={children} to={href} openInNewTab />
  );
  // return <TextLink variant="underline" text={children} to={href} openInNewTab />;
}

const Instruction1Page = () => {
  const location = useLocation();
  const { i18n } = useTranslation();

  const [read, setRead] = useState('');

  useEffect(() => {
    const instructionHref = `${i18n.language}/${location.pathname}`;

    const instructionName = location.pathname.split('/')[2];

    const gitLink = `https://raw.githubusercontent.com/Aftershock669/amnezia-open-docs/master/docs/${instructionHref}/${instructionName}.md`;

    const fetchData = () => {
      return fetch(gitLink)
        .then((response) => response.text())
        .then((text) => setRead(text));
    };

    fetchData();

    // FETCH FROM FS - WORKING
    // import('/docs/en/manual-install/manual-install.md').then((res) => {
    //   fetch(res.default)
    //     .then((response) => response.text())
    //     .then((text) => setRead(text));
    // });
  }, [location, i18n.language]);

  const sideLinks = [
    { title: 'Как запустить свой VPN с помощью Amnezia', href: '/' },
    { title: 'Автоматическая настройка', href: '/instructions/auto-install' },
    { title: 'Ручная настройка', href: '/instructions/manual-install' },
  ];

  const items = [
    { title: 'Поддержка', href: '/support' },
    { title: 'Инструкции', href: '/instructions' },
  ].map((item, index) => <TextLink text={item.title} to={item.href} key={index} variant="light" />);

  return (
    <div className={styles.pageLayout}>
      <div className={styles.navCol}>
        <SidebarNav>
          {sideLinks.map((el, i) => (
            <SideBarLink key={i} text={el.title} to={el.href} />
          ))}
        </SidebarNav>
      </div>
      <div className={styles.contentCol}>
        <Breadcrumbs separator={<ChevronRight size={18} strokeWidth={3} color="#494B50" />} mt="xs">
          {items}
        </Breadcrumbs>
        <MdStyledContainer>
          <ReactMarkdown components={{ a: RouterLink }} remarkPlugins={[remarkGfm]}>
            {read}
          </ReactMarkdown>
        </MdStyledContainer>
      </div>
    </div>
  );
};

export default Instruction1Page;
