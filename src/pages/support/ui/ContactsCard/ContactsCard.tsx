import Card from '@src/components/card/Card';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './ContactsCard.module.scss';
import { ReactComponent as TelegramLogo } from './assets/telegram.svg';
import { ReactComponent as SignalLogo } from './assets/signal.svg';

const ContactsCard = () => {
  const { t } = useTranslation('support-page');
  return (
    <Card bg="plainGray" className={styles.root}>
      <div className={styles.label}>{t('contactsCardLabel')}</div>
      <div className={styles.container}>
        <Link target="_blank" to="https://t.me/amnezia_vpn" className={styles.contactBadge}>
          <TelegramLogo />
        </Link>
        <Link
          target="_blank"
          to="https://signal.group/#CjQKIB2gUf8QH_IXnOJMGQWMDjYz9cNfmRQipGWLFiIgc4MwEhAKBONrSiWHvoUFbbD0xwdh"
          className={styles.contactBadge}
        >
          <SignalLogo />
        </Link>
      </div>
    </Card>
  );
};

export default ContactsCard;
