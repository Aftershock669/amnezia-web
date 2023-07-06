import { useTranslation } from 'react-i18next';
import TextLink from '@src/shared/ui/TextLink/TextLink';
import styles from './InstructionsPageHeader.module.scss';

const InstructionsPageHeader = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.root}>
      <TextLink
        className={styles.linkWrapper}
        variant="light"
        text={t('navigation.support')}
        to="/support"
      />
      <div className={styles.primaryWrapper}>{t('instructionsPage.header.text')}</div>
    </div>
  );
};

export default InstructionsPageHeader;
