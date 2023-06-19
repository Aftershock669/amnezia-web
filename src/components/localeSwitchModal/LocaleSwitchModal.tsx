// eslint-disable-next-line import/no-extraneous-dependencies
import { Modal } from '@mantine/core';
import { Languages, ChevronDown } from 'lucide-react';
import { useDisclosure } from '@mantine/hooks';
import classNames from 'classnames';
import localesList from '@src/shared/config/i18n/localesList';
import LocaleSwitchPill from '@src/shared/ui/LocaleSwitchPill/LocaleSwitchPill';
import { useTranslation } from 'react-i18next';
import styles from './LocaleSwitchModal.module.scss';

const LocaleSwitchModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { t, i18n } = useTranslation();

  return (
    <>
      <Modal
        size="520px"
        opened={opened}
        onClose={close}
        withCloseButton={false}
        classNames={{
          content: styles.content,
          body: styles.body,
          inner: styles.inner,
          overlay: styles.overlay,
        }}
        overlayProps={{
          color: 'rgba(9, 11, 16)',
          opacity: 0.9,
        }}
      >
        <ul className={styles.langContainer}>
          {localesList.map((el) => (
            <LocaleSwitchPill
              key={el.code}
              text={el.name}
              active={i18n.language === el.code}
              onClick={() => {
                i18n.changeLanguage(el.code);
                close();
              }}
            />
          ))}
        </ul>
      </Modal>
      <button type="button" className={styles.button} onClick={open}>
        <Languages /> <ChevronDown />
      </button>
    </>
  );
};

export default LocaleSwitchModal;
