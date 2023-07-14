import TextLink from '@src/shared/ui/TextLink/TextLink';
import { useTranslation } from 'react-i18next';
import styles from './ContactsListHorizontal.module.scss';

const ContactsListHorizontal = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.root}>
      <div className={styles.label}>{t('Footer.contacts')}</div>
      <div className={styles.linksContainer}>
        <TextLink
          text="Telegram"
          to="https://t.me/amnezia_vpn"
          openInNewTab
          variant="light"
          className={styles.link}
        />
        <TextLink
          text="Signal"
          to="https://signal.group/#CjQKIB2gUf8QH_IXnOJMGQWMDjYz9cNfmRQipGWLFiIgc4MwEhAKBONrSiWHvoUFbbD0xwdh"
          openInNewTab
          variant="light"
          className={styles.link}
        />
        <TextLink
          text="Reddit"
          to="https://www.reddit.com/r/AmneziaVPN/"
          openInNewTab
          variant="light"
          className={styles.link}
        />
        <TextLink
          text="support@amnezia.org"
          to="mailto:support@amnezia.org"
          variant="light"
          className={styles.link}
        />
      </div>
    </div>
  );
};

export default ContactsListHorizontal;
