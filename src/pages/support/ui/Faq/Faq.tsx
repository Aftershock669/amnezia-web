import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import FaqHeader from '@src/pages/support/ui/Faq/ui/FaqHeader/FaqHeader';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import TextLink from '@src/shared/ui/TextLink/TextLink';
import MD5 from 'crypto-js/md5';
import MdStyledContainer from '@src/components/MdStyledContainer/MdStyledContainer';
import GoToTopButton from '@src/components/GoToTopButton/GoToTopButton';
import styles from './Faq.module.scss';

const Faq = () => {
  const { t, i18n } = useTranslation('support-page');
  const [aboutMd, setAboutMd] = useState('');
  const [tShootMd, tShootFaqMd] = useState('');
  const [usageMd, setUsageMd] = useState('');
  const [status, setStatus] = useState('loading');

  const HeaderAnchor = ({ children }: any) => {
    return <h3 id={`${MD5(children[0]).toString()}`}>{children}</h3>;
  };

  useEffect(() => {
    const gitLinkAbout = `https://raw.githubusercontent.com/Aftershock669/amnezia-open-docs/master/docs/${i18n.resolvedLanguage}/faq/about.md`;
    const gitLinkUsage = `https://raw.githubusercontent.com/Aftershock669/amnezia-open-docs/master/docs/${i18n.resolvedLanguage}/faq/usage.md`;
    const gitLinkTroubleshooting = `https://raw.githubusercontent.com/Aftershock669/amnezia-open-docs/master/docs/${i18n.resolvedLanguage}/faq/troubleshooting.md`;

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

    fetchData(gitLinkAbout, setAboutMd);
    fetchData(gitLinkUsage, setUsageMd);
    fetchData(gitLinkTroubleshooting, tShootFaqMd);
  }, [i18n.resolvedLanguage]);

  return (
    <div className={styles.root}>
      <GoToTopButton />
      <div className={styles.header}>{t('faq.header')}</div>
      <FaqHeader aboutDataMd={aboutMd} usageDataMd={usageMd} troubleshootingDataMd={tShootMd} />
      {/*<div className={styles.faqMdContainer}>*/}
      {/*  <MdStyledContainer>*/}
      {/*    <div className={styles.sectionHeader}>Об Amnezia</div>*/}
      {/*    <ReactMarkdown components={{ h3: HeaderAnchor }} remarkPlugins={[remarkGfm]}>*/}
      {/*      {aboutMd}*/}
      {/*    </ReactMarkdown>*/}
      {/*    <div className={styles.sectionHeader}>Решение проблем</div>*/}
      {/*    <ReactMarkdown components={{ h3: HeaderAnchor }} remarkPlugins={[remarkGfm]}>*/}
      {/*      {aboutMd}*/}
      {/*    </ReactMarkdown>*/}
      {/*    <div className={styles.sectionHeader}>Использование</div>*/}
      {/*    <ReactMarkdown components={{ h3: HeaderAnchor }} remarkPlugins={[remarkGfm]}>*/}
      {/*      {aboutMd}*/}
      {/*    </ReactMarkdown>*/}
      {/*  </MdStyledContainer>*/}
      {/*</div>*/}
    </div>
  );
};

export default Faq;
