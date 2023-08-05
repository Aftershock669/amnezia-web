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
import styles from './InstructionLayout.module.scss';

const InstructionLayout = () => {
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

  const items = [
    { title: t('navigation.support'), href: '../support' },
    { title: t('instructionsPage.header.text'), href: '../instructions' },
  ].map((item, index) => <TextLink text={item.title} to={item.href} key={index} variant="light" />);

  const switchInstructionsRoute = () => {
    if (instructionId === 'starter-guide') return <HostingInstructions />;
    // if (instructionId === 'protocols') return <ProtocolsInstruction />;
    return <AppInstructionMd instructionId={instructionId} />;
  };

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
        <div className={styles.instructionContent}>{switchInstructionsRoute()}</div>
        <div className={styles.contactsCardWrapper}>
          <ContactsCard />
        </div>
      </div>
    </div>
  );
};

export default InstructionLayout;
