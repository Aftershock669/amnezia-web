import classNames from 'classnames';
import TextLink from '@src/shared/ui/TextLink/TextLink';
import styles from './ContactsContainer.module.scss';

const ContactsContainer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.label}>КОНТАКТЫ</div>
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
        <TextLink text="О проекте" to="/about" variant="light" className={styles.link} />
      </div>
    </div>
  );
};

export default ContactsContainer;
