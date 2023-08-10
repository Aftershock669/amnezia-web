import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import MD5 from 'crypto-js/md5';
import MdStyledContainer from '@src/components/MdStyledContainer/MdStyledContainer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import usePageDecoration from '@src/shared/hooks/usePageDecoration/usePageDecoration';
import { ChevronRight } from 'lucide-react';
import { Breadcrumbs } from '@mantine/core';
import TextLink from '@src/shared/ui/TextLink/TextLink';
import ContactsCard from '@src/components/ContactsCard/ContactsCard';
// import AccordionItemV2 from '@src/shared/ui/AccordeonV2/ui/AccordionItemV2/AccordionItemV2';
import styles from './FaqPage.module.scss';
import faqOldDataRu from "@src/pages/support/ui/FaqOld/faqOldDataRu";
import faqDataEn from "@src/pages/support/ui/FaqOld/faqOldDataEn";
import Accordion from "@src/shared/ui/Accordeon/Accordion";
import DocsHeader from "@src/components/DocsHeader/DocsHeader";

const FaqPage = () => {
  usePageDecoration('dark');
  const { t, i18n } = useTranslation(['translation', 'support-page']);
  const [mdData, setMdData] = useState('');
  const [status, setStatus] = useState('loading');
  // const [openItem, setOpenItem] = useState('');

  // const HeaderAnchor = ({ children }: any) => {
  //   return <h3 id={`${MD5(children[0]).toString()}`}>{children}</h3>;
  // };

  // const GenerateAccordionItem = ({ children }: any) => {
  //   return (
  //     <AccordionItemV2
  //       key={children[1].props.children[0]}
  //       onToggle={() => {
  //         if (openItem === children[1].props.children[0]) return setOpenItem('');
  //         return setOpenItem(children[1].props.children[0]);
  //       }}
  //       active={openItem === children[1].props.children[0]}
  //       value={children[1].props.children[0]}
  //       label={children[1].props.children[0]}
  //     >
  //       <MdStyledContainer>
  //         {openItem === children[1].props.children[0] ? children : undefined}
  //       </MdStyledContainer>
  //     </AccordionItemV2>
  //   );
  // };

  useEffect(() => {
    const gitLinkAbout = `https://raw.githubusercontent.com/Aftershock669/amnezia-open-docs/master/docs/${i18n.resolvedLanguage}/faq/about.md`;
    const gitLinkUsage = `https://raw.githubusercontent.com/Aftershock669/amnezia-open-docs/master/docs/${i18n.resolvedLanguage}/faq/usage.md`;
    const gitLinkAccTest = `https://raw.githubusercontent.com/Aftershock669/amnezia-open-docs/master/docs/${i18n.resolvedLanguage}/faq/accordion-test.md`;

    const fetchData = async (url: string, setter: any) => {
      setStatus('loading');

      const rawRes = await fetch(url);

      if (rawRes.status !== 200) {
        setTimeout(() => {
          setStatus('error');
        }, 400);
      } else {
        const text = await rawRes.text();

        setter(text);

        setTimeout(() => {
          setStatus('ok');
        }, 400);
      }
    };

    // fetchData(faqSection === 'about' ? gitLinkAbout : gitLinkUsage, setMdData);
    fetchData(gitLinkAbout, setMdData);
  }, [i18n.resolvedLanguage]);

  const items = [{ title: t('navigation.support', { ns: 'translation' }), href: '../support' }].map(
    (item, index) => <TextLink text={item.title} to={item.href} key={index} variant="light" />
  );

  return (
    <div className={styles.root}>
      <DocsHeader
        breadcrumbs={[{ title: t('navigation.support', { ns: 'translation' }), href: '../support' }]}
        text={t('faq.header', { ns: 'support-page' })}
        variant="secondary"
      />
      <div className={styles.faqWrapper}>
        <Accordion data={i18n.resolvedLanguage === 'ru' ? faqOldDataRu : faqDataEn} />
      </div>

      {/*<ReactMarkdown*/}
      {/*  // components={{*/}
      {/*  //   blockquote: GenerateAccordionItem,*/}
      {/*  //   h3: () => null,*/}
      {/*  // }}*/}
      {/*  remarkPlugins={[remarkGfm]}*/}
      {/*>*/}
      {/*  {mdData}*/}
      {/*</ReactMarkdown>*/}
      <div className={styles.contactsCardWrapper}>
        <ContactsCard />
      </div>
    </div>
  );
};

export default FaqPage;
