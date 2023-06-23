import classNames from 'classnames';
import Card from '@src/components/card/Card';
import { useTranslation } from 'react-i18next';
import TextLink from '@src/shared/ui/TextLink/TextLink';
import styles from './SecureSimpleFreeSection.module.scss';
import auditedImage from './assets/audited.png';

const SecureSimpleFreeSection = () => {
  const { t, i18n } = useTranslation('main-page');
  return (
    <div className={classNames(styles.root)}>
      <div className={styles.gridSecure}>
        <Card>
          <div className={classNames(styles.secureCard, styles.cardContent)}>
            <img className={styles.auditedImage} src={auditedImage} alt="audited" />
            <section>
              <h2>{t('secureSimpleFreeSection.secure.header')}</h2>
              <div className={classNames('main-text', 'dimmed')}>
                {t('secureSimpleFreeSection.secure.text.part1')}
              </div>
              <TextLink
                text={t('secureSimpleFreeSection.secure.text.link')}
                to="https://github.com/amnezia-vpn"
                openInNewTab
                variant="underline"
                className="main-text dimmed"
              />
              <span className={classNames('main-text', 'dimmed', 'text-indent-top')}>
                {t('secureSimpleFreeSection.secure.text.part2')}
              </span>
            </section>
          </div>
        </Card>
      </div>

      <div className={styles.gridSimple}>
        <Card>
          <div className={classNames(styles.simpleCard, styles.cardContent)}>
            <section className={styles.simpleCardTextSection}>
              <h2>{t('secureSimpleFreeSection.simple.header')}</h2>
              <div className={classNames('main-text', 'dimmed')}>
                {t('secureSimpleFreeSection.simple.text')}
              </div>
            </section>
            <img
              className={styles.connectImage}
              src={`/img/${i18n.language}/main-connect.png`}
              alt="audited"
            />
          </div>
        </Card>
      </div>

      <div className={styles.gridFree}>
        <Card bg="gradPurple">
          <div className={classNames(styles.cardContent)}>
            <section>
              <h2>{t('secureSimpleFreeSection.free.header')}</h2>
              <div className={classNames(styles.freeCardText, 'main-text')}>
                {t('secureSimpleFreeSection.free.text')}
              </div>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SecureSimpleFreeSection;