import { Tabs } from '@mantine/core';
import DownloadButtonMain from '@src/shared/ui/DownloadButtonMain/DownloadButtonMain';
import { useState } from 'react';
import DwnVariantsDropdown from '@src/pages/downloads/ui/DwnCard/ui/DwnVariantsList/ui/DwnVariantsDropdown/DwnVariantsDropdown';
import WindowsVariants from '@src/pages/downloads/ui/DwnCard/ui/DwnVariantsList/ui/WindowsVariants/WindowsVariants';
import { useOs } from '@mantine/hooks';
import DownloadBadge from '@src/components/downloadBadge/DownloadBadge';
import DownloadButtonDwnPage from '@src/shared/ui/DownloadButtonDwnPage/DownloadButtonDwnPage';
import { useTranslation } from 'react-i18next';
import styles from './DwnVariantsList.module.scss';
import { ReactComponent as WindowsLogo } from './assets/windows.svg';
import { ReactComponent as MacLogo } from './assets/mac-os.svg';
import { ReactComponent as IOSLogo } from './assets/ios.svg';
import { ReactComponent as AndroidLogo } from './assets/android.svg';
import { ReactComponent as LinuxLogo } from './assets/linux.svg';
import { ReactComponent as RouterLogo } from './assets/router.svg';
import { ReactComponent as GithubLogo } from './assets/github.svg';

const DwnVariantsList = () => {
  const { t } = useTranslation(['translation', 'downloads-page']);
  const os = useOs();

  const osSwitcher = () => {
    switch (os) {
      case 'windows':
        return 'win';
      case 'linux':
        return 'linux';
      case 'macos':
        return 'mac';
      case 'android':
        return 'android';
      case 'ios':
        return 'ios';
      default:
        return 'win';
    }
  };

  const [activeTab, setActiveTab] = useState<string | null>(osSwitcher());

  return (
    <div className={styles.root}>
      {/* <DwnVariant icon={} text="Windows" value="win" /> */}
      <Tabs
        unstyled
        value={activeTab}
        onTabChange={setActiveTab}
        classNames={{
          root: styles.root,
          tabsList: styles.tabsList,
          tab: styles.tab,
          panel: styles.panel,
        }}
      >
        <Tabs.List>
          <Tabs.Tab value="win" icon={<WindowsLogo />}>
            Windows
          </Tabs.Tab>
          <Tabs.Tab value="mac" icon={<MacLogo />}>
            MacOS
          </Tabs.Tab>
          <Tabs.Tab value="ios" icon={<IOSLogo />}>
            iOS
          </Tabs.Tab>
          <Tabs.Tab value="android" icon={<AndroidLogo />}>
            Android
          </Tabs.Tab>
          <Tabs.Tab value="linux" icon={<LinuxLogo />}>
            Linux
          </Tabs.Tab>
          {/* <Tabs.Tab value="router" icon={<RouterLogo />}> */}
          {/*  Router */}
          {/* </Tabs.Tab> */}
          <Tabs.Tab value="github" icon={<GithubLogo />}>
            Source code
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="win">
          <div className={styles.downloadBtnContainer}>
            <WindowsVariants />
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="mac">
          <div className={styles.downloadBtnContainer}>
            <DownloadButtonDwnPage
              text={t('download')}
              link="https://github.com/amnezia-vpn/amnezia-client/releases/download/2.1.2/AmneziaVPN_2.1.2.3.dmg"
            />
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="ios">
          <div className={styles.downloadBtnContainer}>
            <DownloadBadge variant="appStore" />
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="android">
          <div className={styles.downloadBtnContainer}>
            <DownloadButtonDwnPage
              text={t('dwnCard.downloadFromSite', { ns: 'downloads-page' })}
              link="https://github.com/amnezia-vpn/amnezia-client/releases/download/2.1.2/AmneziaVPN_2.1.2.1.apk"
            />
            <DownloadBadge variant="googlePlay" />
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="linux">
          <div className={styles.downloadBtnContainer}>
            <DownloadButtonDwnPage
              text={t('download')}
              link="https://github.com/amnezia-vpn/amnezia-client/releases/download/2.1.2/AmneziaVPN_2.1.2_Linux_Installer"
            />
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="github">
          <div className={styles.downloadBtnContainer}>
            <DownloadButtonDwnPage
              text={t('dwnCard.downloadFromGithub', { ns: 'downloads-page' })}
              link="https://github.com/amnezia-vpn/amnezia-client/releases"
              openInNewTab
            />
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default DwnVariantsList;
