import { ArrowLeft, X } from 'lucide-react';
import classNames from 'classnames';
import LocaleSwitchPill from '@src/shared/ui/LocaleSwitchPill/LocaleSwitchPill';
import { useTranslation } from 'react-i18next';
import localesList from '@src/shared/config/i18n/localesList';
import styles from './LocalesScreen.module.scss';

interface PT {
  closeDrawer: any;
  goToMainScreen: any;
}

const LocalesScreen = ({ closeDrawer, goToMainScreen }: PT) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <button type="button" className={styles.iconButton} onClick={goToMainScreen}>
          <ArrowLeft />
        </button>
        <button type="button" className={styles.iconButton} onClick={closeDrawer}>
          <X />
        </button>
      </div>
      <div className={styles.list}>
        {localesList.map((el) => (
          <LocaleSwitchPill
            key={el.code}
            text={el.name}
            active={i18n.language === el.code}
            onClick={() => {
              i18n.changeLanguage(el.code);
              goToMainScreen();
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LocalesScreen;
