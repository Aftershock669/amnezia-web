import classNames from 'classnames';
import DownloadButton from '@src/shared/ui/DownloadButton/DownloadButton';
import windowsIcon from '@assets/windows.svg';
import macIcon from '@assets/mac-os.svg';
import iosIcon from '@assets/ios.svg';
import androidIcon from '@assets/android.svg';
import linuxIcon from '@assets/linux.svg';
import githubIcon from '@assets/github.svg';
import { useTranslation } from 'react-i18next';
import styles from './HeaderDownload.module.scss';

const HeaderDownload = () => {
  const { t } = useTranslation(['translation', 'main-page']);
  return (
    <div className={classNames(styles.root)}>
      <div className={styles.buttonContainer}>
        <DownloadButton text={t('download')} link="/downloads" />
        <div className={styles.iconLinks}>
          <img src={windowsIcon} className="logo" alt="Windows logo" />
          <img src={macIcon} className="logo" alt="Apple logo" />
          <img src={iosIcon} className="logo" alt="Ios logo" />
          <img src={androidIcon} className="logo" alt="Android logo" />
          <img src={linuxIcon} className="logo" alt="Linux logo" />
          <img src={githubIcon} className="logo" alt="Github logo" />
        </div>
      </div>
      <a href="/" className={styles.textContainer}>
        {t('downloadHeader.text', { ns: 'main-page' })}
      </a>
    </div>
  );
};

export default HeaderDownload;
