import Accordion from '@src/shared/ui/Accordeon/Accordion';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import styles from './DownloadLogoSection.module.scss';

const DownloadLogoSection = () => {
  const { t } = useTranslation(['translation', 'about-page']);

  const logosLinks = [
    '/img/logos/full-logo-2-rows.svg',
    '/img/logos/logo-text-2-rows.svg',
    '/img/logos/logo-a.svg',
    '/img/logos/logo-with-a.svg',
    '/img/logos/logo-text.svg',
  ];

  return (
    <div className={styles.root}>
      <Accordion
        data={[
          {
            label: t('downloadLogo', { ns: 'about-page' }),
            content: (
              <div className={styles.dwnLogosContainer}>
                {logosLinks.map((logoUrl, i) => (
                  <div key={i} className={styles.dwnLogoWrapper}>
                    <div className={styles.dwnLogo}>
                      <img src={logoUrl} alt={`Amnezia-logo-${i}`} />
                    </div>
                    <a
                      className={classNames('link', styles.dwnLogoLink)}
                      href={logoUrl}
                      download={`Amnezia-logo-${i + 1}`}
                    >
                      {t('download')}
                    </a>
                  </div>
                ))}
                {/* <a href="/img/logos/logo-with-a-w-glow.svg" download="myimage"> */}
                {/*  <img src="/img/logos/logo-with-a-w-glow.svg" /> */}
                {/* </a> */}
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

export default DownloadLogoSection;
