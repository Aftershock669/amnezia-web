import classNames from 'classnames';
import Card from '@src/shared/ui/Card/Card';
import { useTranslation } from 'react-i18next';
import TextLink from '@src/shared/ui/TextLink/TextLink';
import styles from './ProtocolsCard.module.scss';
import { ReactComponent as ProtocolsImage } from './assets/protocols-main.svg';

const ProtocolsCard = () => {
  const { i18n, t } = useTranslation('main-page');
  return (
    <div className={classNames(styles.root)}>
      <Card>
        <div className={classNames(styles.wrapper)}>
          <div className={classNames(styles.textContainer)}>
            <h2>{t('protocolsCard.header')}</h2>
            <div className={classNames(styles.mainText, 'main-text', 'dimmed')}>
              {t('protocolsCard.mainText.part1')}
            </div>
            <div className={classNames(styles.mainText, 'main-text', 'dimmed', 'text-indent-top')}>
              {t('protocolsCard.mainText.part2')}
            </div>
            <div className={classNames(styles.link)}>
              <TextLink
                text={t('protocolsCard.link')}
                variant="light"
                to={
                  i18n.resolvedLanguage === 'ru'
                    ? 'https://ru-docs.amnezia.org/guides/protocols-table-v2/'
                    : 'https://en-docs.amnezia.org/guides/protocols-table-v2/'
                }
              />
            </div>
          </div>
          <ProtocolsImage className={styles.image} />
        </div>
      </Card>
    </div>
  );
};

export default ProtocolsCard;
