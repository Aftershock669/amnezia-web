import classNames from 'classnames';
import DownloadButtonMain from '@src/components/DownloadButtonMain/DownloadButtonMain';
import windowsIcon from '@assets/windows.svg';
import macIcon from '@assets/mac-os.svg';
import iosIcon from '@assets/ios.svg';
import androidIcon from '@assets/android.svg';
import linuxIcon from '@assets/linux.svg';
import githubIcon from '@assets/github.svg';
import { useTranslation } from 'react-i18next';
import TextLink from '@src/shared/ui/TextLink/TextLink';
import styles from './HeaderDownload.module.scss';

const HeaderDownload = () => {
  const { t, i18n } = useTranslation(['translation', 'main-page']);
  return (
    <div className={classNames(styles.root)}>
      <div className={styles.buttonContainer}>
        <DownloadButtonMain text={t('download')} link="./downloads" />
        <div className={styles.iconLinks}>
          <img height="24px" width="24px" src={windowsIcon} className="logo" alt="Windows logo" />
          <img height="24px" width="24px" src={macIcon} className="logo" alt="Apple logo" />
          <img height="24px" width="24px" src={iosIcon} className="logo" alt="Ios logo" />
          <img height="24px" width="24px" src={androidIcon} className="logo" alt="Android logo" />
          <img height="24px" width="24px" src={linuxIcon} className="logo" alt="Linux logo" />
          <img height="24px" width="24px" src={githubIcon} className="logo" alt="Github logo" />
        </div>
      </div>
      <TextLink
        text={t('headerDownload', { ns: 'main-page' })}
        variant="light"
        className={styles.textContainer}
        // to="./instructions/starter-guide"
        // TODO Временная заглушка
        to={`https://${i18n.resolvedLanguage}-docs.amnezia.org`}
      />
      {/* <a href="/" className={styles.textContainer}> */}
      {/*  {t('headerDownload', { ns: 'main-page' })} */}
      {/* </a> */}
    </div>
  );
};

export default HeaderDownload;
