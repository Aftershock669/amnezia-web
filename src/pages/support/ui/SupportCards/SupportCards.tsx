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
        to="../instructions/0_starter-guide"
      />
      <SupportCard
        header={t('instructionsCard.header')}
        text={t('instructionsCard.text')}
        to="../instructions"
      />
      {/* <SupportCard */}
      {/*  header="Решение проблем" */}
      {/*  text="Помогите, не работает ааа!!!" */}
      {/*  to="../troubleshooting" */}
      {/* /> */}
      {/* <SupportCard header="FAQ" text="Часто задаваемые вопросы" to="../faq" /> */}
    </div>
  );
};

export default SupportCards;
