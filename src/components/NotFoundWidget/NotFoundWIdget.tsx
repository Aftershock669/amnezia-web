import PrimaryLinkButton from '@src/components/PrimaryLinkButton/PrimaryLinkButton';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import styles from './NotFoundWIdget.module.scss';

const NotFoundWIdget = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet defer={false}>
        <title>404 - {t('notFoundPage.header')}</title>
        <meta name="description" content="234" />
      </Helmet>
      <div className={styles.root}>
        <img src="/img/404.png" width="270" height="230" alt="not found image" />
        <h1 className={styles.header}>{t('notFoundPage.header')}</h1>
        <div className={styles.text}>{t('notFoundPage.text')}</div>
        <PrimaryLinkButton text={t('notFoundPage.button')} link="../support" />
      </div>
    </>
  );
};

export default NotFoundWIdget;
