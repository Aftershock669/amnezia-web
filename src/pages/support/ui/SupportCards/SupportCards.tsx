import { useTranslation } from 'react-i18next';
import SupportCard from './ui/SupportCardLink/SupportCardLink';
import styles from './SupportCards.module.scss';

const SupportCards = () => {
  const { t, i18n } = useTranslation('support-page');
  return (
    <div className={styles.root}>
      <SupportCard
        header={t('howToCard.header')}
        text={t('howToCard.text')}
        // to="../instructions/starter-guide"

        // TODO Временная заглушка
        to={`https://${i18n.resolvedLanguage}-docs.amnezia.org/guides/hosting-instructions`}
      />
      <SupportCard
        header={t('instructionsCard.header')}
        text={t('instructionsCard.text')}
        // to="../instructions"

        // TODO Временная заглушка
        to={`https://${i18n.resolvedLanguage}-docs.amnezia.org`}
      />
    </div>
  );
};

export default SupportCards;
