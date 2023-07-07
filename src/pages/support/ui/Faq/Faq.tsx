// import AccordionV2 from '@src/shared/ui/Accordeon/AccordionV2';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import MdStyledContainer from '@src/components/MdStyledContainer/MdStyledContainer';
import Accordion from '@src/shared/ui/Accordeon/Accordion';
import TextLink from '@src/shared/ui/TextLink/TextLink';
import faqDataRu from '@src/pages/support/ui/Faq/faqDataRu';
import faqDataEn from '@src/pages/support/ui/Faq/faqDataEn';
import styles from './Faq.module.scss';

const Faq = () => {
  const { t, i18n } = useTranslation('support-page');

  // const [read, setRead] = useState('');

  // useEffect(() => {
  //   const gitLink = `https://raw.githubusercontent.com/Aftershock669/amnezia-open-docs/master/docs/${i18n.language}/faq/faq.md`;
  //
  //   const fetchData = () => {
  //     return fetch(gitLink)
  //       .then((response) => response.text())
  //       .then((text) => setRead(text));
  //   };
  //
  //   fetchData();
  // }, [i18n.language]);

  // const generateAccordionItem = ({ children }) => {
  //   const faqDataRu = [];
  //
  //   children.forEach((liEl, i) => {
  //     if (liEl.type === 'li') {
  //       let label = '';
  //       const content = [];
  //       liEl.props.children.forEach((liInnerEl, liInnerElIndex) => {
  //         // elements inside li
  //         if (liInnerEl.type === 'h2') {
  //           label = liInnerEl.props.children[0];
  //         }
  //         if (liInnerEl.type && liInnerEl.type !== 'h2') {
  //           content.push(liInnerEl);
  //         }
  //       });
  //
  //       faqDataRu.push({
  //         label,
  //         content,
  //       });
  //     }
  //   });
  //
  //   console.log(faqDataRu);
  //
  //   // return faqDataRu;
  // };

  // const generateAccordionItems = ({ children }) => {
  //   const faqDataRu = [];
  //
  //   children.forEach((liEl, i) => {
  //     if (liEl.type === 'li') {
  //       let label = '';
  //       const content = [];
  //       liEl.props.children.forEach((liInnerEl, liInnerElIndex) => {
  //         // elements inside li
  //         if (liInnerEl.type === 'h2') {
  //           label = liInnerEl.props.children[0];
  //         }
  //         if (liInnerEl.type && liInnerEl.type !== 'h2') {
  //           content.push(liInnerEl);
  //         }
  //       });
  //
  //       faqDataRu.push(
  //         <AccordionItemV2
  //           value={i.toString()}
  //           key={i}
  //           label={label}
  //           onToggle={() => undefined}
  //           active={false}
  //         >
  //           {content}
  //         </AccordionItemV2>
  //       );
  //     }
  //   });
  //
  //   console.log(faqDataRu);
  //
  //   return faqDataRu;
  // };

  return (
    <div className={styles.root}>
      <div className={styles.header}>{t('faq.header')}</div>
      <Accordion data={i18n.resolvedLanguage === 'ru' ? faqDataRu : faqDataEn} />
      {/* <ReactMarkdown remarkPlugins={[remarkGfm]}>{read}</ReactMarkdown> */}
    </div>
  );
};

export default Faq;
