import { useTranslation } from 'react-i18next';
import TextLink from '@src/shared/ui/TextLink/TextLink';
import classNames from 'classnames';
import ContactsListHorizontal from '@src/pages/about/ui/ContactsListHorizontal/ContactsListHorizontal';
import usePageDecoration from '@src/shared/hooks/usePageDecoration/usePageDecoration';
import { Helmet } from 'react-helmet';
import styles from './AboutPage.module.scss';
import DownloadLogoSection from './ui/DownloadLogoSection/DownloadLogoSection';

const AboutPage = () => {
  usePageDecoration('darker');
  const { t } = useTranslation('about-page');
  return (
    <>
      <Helmet defer={false}>
        <title>{t('metaTitle')}</title>
        <meta name="description" content={t('metaContent')} />
      </Helmet>
      <div className={styles.pageContainer}>
        <div className={styles.logoContainer}>
          <img src="/img/logos/logo-with-a-w-glow.svg" alt="Amnezia logo" />
        </div>
        <div className={classNames('h-70', styles.header)}>{t('about')}</div>
        <p className="fz24 text-indent-bottom">
          {t('p1')}
          <TextLink
            openInNewTab
            text="Privacy Accelerator"
            to="https://privacyaccelerator.org/"
            variant="underline"
          />
          .
        </p>
        <p className="fz24">{t('p2')}</p>
        <p>{t('principles.header')}</p>
        <section className={styles.cards}>
          <blockquote>
            <p>
              <strong>{t('principles.principle1.header')}</strong>
            </p>
            <p>{t('principles.principle1.text')}</p>
          </blockquote>
          <blockquote>
            <p>
              <strong>{t('principles.principle2.header')}</strong>
            </p>
            <p>{t('principles.principle2.text')}</p>
          </blockquote>
          <blockquote>
            <p>
              <strong>{t('principles.principle3.header')}</strong>
            </p>
            <p>{t('principles.principle3.text')}</p>
          </blockquote>
          <blockquote>
            <p>
              <strong>{t('principles.principle4.header')}</strong>
            </p>
            <p>{t('principles.principle4.text')}</p>
          </blockquote>
          <blockquote>
            <p>
              <strong>{t('principles.principle5.header')}</strong>
            </p>
            <p>{t('principles.principle5.text')}</p>
          </blockquote>
        </section>
        <p>{t('p3')}</p>
        <p>{t('p4')}</p>
        <p>{t('donate')}</p>
        <ContactsListHorizontal />
        <DownloadLogoSection />
      </div>
    </>
  );
};

export default AboutPage;
