import TextLink from '@src/shared/ui/TextLink/TextLink';
import SidebarNav from '@src/components/SidebarNav/SidebarNav';
import SideBarLink from '@src/components/SidebarNav/ui/SideBarLink/SideBarLink';
import { Breadcrumbs } from '@mantine/core';
import { ChevronRight } from 'lucide-react';
import { ReactNode, useEffect, useState } from 'react';
import ContactsCard from '@src/components/ContactsCard/ContactsCard';
import { useTranslation } from 'react-i18next';
import styles from './InstructionLayout.module.scss';

interface InstructionLayoutProps {
  children?: ReactNode;
}

const InstructionLayout = ({ children }: InstructionLayoutProps) => {
  const [tableOfContents, setTableOfContents] = useState<any[]>([]);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const gitLink = `https://raw.githubusercontent.com/Aftershock669/amnezia-open-docs/master/docs/${i18n.resolvedLanguage}/instructions/tableOfContents.json`;

    const fetchData = () => {
      return fetch(gitLink)
        .then((response) => response.json())
        .then((data) => {
          setTableOfContents(data);
        });
    };

    fetchData();
  }, []);

  const items = [
    { title: t('navigation.support'), href: '../support' },
    { title: t('instructionsPage.header.text'), href: '../instructions' },
  ].map((item, index) => <TextLink text={item.title} to={item.href} key={index} variant="light" />);

  return (
    <div className={styles.pageLayout}>
      <div className={styles.navCol}>
        <SidebarNav>
          {tableOfContents.map((el, i) => (
            <SideBarLink key={i} text={el.title} to={el.href} />
          ))}
        </SidebarNav>
      </div>
      <div className={styles.contentCol}>
        <Breadcrumbs separator={<ChevronRight size={18} strokeWidth={3} color="#494B50" />} mt="xs">
          {items}
        </Breadcrumbs>
        <div className={styles.instructionContent} />
        {children}
        <div className={styles.contactsCardWrapper}>
          <ContactsCard />
        </div>
      </div>
    </div>
  );
};

export default InstructionLayout;
