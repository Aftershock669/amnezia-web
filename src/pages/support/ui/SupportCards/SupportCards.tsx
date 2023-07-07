import { useTranslation } from 'react-i18next';
import SupportCard from './ui/SupportCardLink/SupportCardLink';
import styles from './SupportCards.module.scss';

const SupportCards = () => {
  const { t } = useTranslation('support-page');
  return (
    <div className={styles.root}>
      <SupportCard
        header={t('howToCard.header')}
        text={t('howToCard.text')}
        to="../instructions/starter-guide"
      />
      <SupportCard
        header={t('instructionsCard.header')}
        text={t('instructionsCard.text')}
        to="../instructions"
      />
    </div>
  );
};

export default SupportCards;
