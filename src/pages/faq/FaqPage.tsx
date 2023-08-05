import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import MD5 from 'crypto-js/md5';
import MdStyledContainer from '@src/components/MdStyledContainer/MdStyledContainer';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import remarkGfm from 'remark-gfm';
import usePageDecoration from '@src/shared/hooks/usePageDecoration/usePageDecoration';
import { ChevronRight } from 'lucide-react';
import { Breadcrumbs } from '@mantine/core';
import TextLink from '@src/shared/ui/TextLink/TextLink';
import ContactsCard from '@src/components/ContactsCard/ContactsCard';
import styles from './FaqPage.module.scss';

const FaqPage = () => {
  usePageDecoration('dark');
  const { t, i18n } = useTranslation(['translation', 'support-page']);
  const [mdData, setMdData] = useState('');
  const [status, setStatus] = useState('loading');

  const { faqSection } = useParams();

  const HeaderAnchor = ({ children }: any) => {
    return <h3 id={`${MD5(children[0]).toString()}`}>{children}</h3>;
  };

  useEffect(() => {
    const gitLinkAbout = `https://raw.githubusercontent.com/Aftershock669/amnezia-open-docs/master/docs/${i18n.resolvedLanguage}/faq/about.md`;
    const gitLinkUsage = `https://raw.githubusercontent.com/Aftershock669/amnezia-open-docs/master/docs/${i18n.resolvedLanguage}/faq/usage.md`;

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
      <Breadcrumbs separator={<ChevronRight size={18} strokeWidth={3} color="#494B50" />} mt="xs">
        {items}
      </Breadcrumbs>
      <div className={styles.faqMdContainer}>
        <MdStyledContainer>
          {faqSection === 'general-questions' ? <h1>Общие вопросы</h1> : <h1>Работа приложения</h1>}
          <ReactMarkdown components={{ h3: HeaderAnchor }} remarkPlugins={[remarkGfm]}>
            {mdData}
          </ReactMarkdown>
        </MdStyledContainer>
      </div>
      <div className={styles.contactsCardWrapper}>
        <ContactsCard />
      </div>
    </div>
  );
};

export default FaqPage;
