import classNames from 'classnames';
import Card from '@src/components/card/Card';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './ProtocolsCard.module.scss';
import { ReactComponent as ProtocolsImage } from './assets/protocols-main.svg';

const ProtocolsCard = () => {
  const { t } = useTranslation('main-page');
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
              <Link className={classNames('link')} to="/">
                {t('protocolsCard.link')}
              </Link>
            </div>
          </div>
          <ProtocolsImage className={styles.image} alt="Used protocols" />
        </div>
      </Card>
    </div>
  );
};

export default ProtocolsCard;
