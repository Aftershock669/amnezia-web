import TextLink from '@src/shared/ui/TextLink/TextLink';
import SidebarNav from '@src/components/SidebarNav/SidebarNav';
import tableOfContents from '@src/pages/instructions/config/tableOfContents';
import SideBarLink from '@src/components/SidebarNav/ui/SideBarLink/SideBarLink';
import { Breadcrumbs } from '@mantine/core';
import { ChevronRight } from 'lucide-react';
import { ReactNode } from 'react';
import ContactsCard from '@src/components/ContactsCard/ContactsCard';
import { useTranslation } from 'react-i18next';
import styles from './InstructionLayout.module.scss';

interface InstructionLayoutProps {
  children?: ReactNode;
}

const InstructionLayout = ({ children }: InstructionLayoutProps) => {
  const { t } = useTranslation();

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
        <ContactsCard />
      </div>
    </div>
  );
};

export default InstructionLayout;
