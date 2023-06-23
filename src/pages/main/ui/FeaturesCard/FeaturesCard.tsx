import classNames from 'classnames';
import Card from '@src/components/card/Card';
import { FileDown, Merge, Share2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import styles from './FeaturesCard.module.scss';

const FeaturesCard = () => {
  const { t } = useTranslation('main-page');
  return (
    <div className={styles.root}>
      <Card>
        <ul>
          <li>
            <Share2 className={styles.icon} color="#FAC462" strokeWidth={1.75} />
            <div>
              <h3 className={styles.headerText}>{t('featuresCard.feature1.header')}</h3>
              <div className={classNames(styles.mainText, 'main-text', 'dimmed')}>
                {t('featuresCard.feature1.text')}
              </div>
            </div>
          </li>
          <li>
            <Merge className={styles.icon} color="#88DA1F" strokeWidth={1.75} />
            <div>
              <h3 className={styles.headerText}>{t('featuresCard.feature2.header')}</h3>
              <div className={classNames(styles.mainText, 'main-text', 'dimmed')}>
                {t('featuresCard.feature2.text')}
              </div>
            </div>
          </li>
          <li>
            <FileDown className={styles.icon} color="#F7F058" strokeWidth={1.75} />
            <div>
              <h3 className={styles.headerText}>{t('featuresCard.feature3.header')}</h3>
              <div className={classNames(styles.mainText, 'main-text', 'dimmed')}>
                {t('featuresCard.feature3.text')}
              </div>
            </div>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default FeaturesCard;
