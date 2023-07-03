import { useEffect, useState } from 'react';
import DwnVariantsDropdown from '@src/pages/downloads/ui/DwnCard/ui/DwnVariantsList/ui/DwnVariantsDropdown/DwnVariantsDropdown';
import DownloadButtonMain from '@src/components/DownloadButtonMain/DownloadButtonMain';
import DownloadButtonDwnPage from '@src/components/DownloadButtonDwnPage/DownloadButtonDwnPage';
import { useTranslation } from 'react-i18next';
import styles from './WindowsVariants.module.scss';

const WindowsVariants = () => {
  const { t, i18n } = useTranslation(['translation', 'downloads-page']);
  const [selectedValue, setSelectedValue] = useState({
    value:
      'https://github.com/amnezia-vpn/amnezia-client/releases/download/2.1.2/AmneziaVPN_2.1.2_x64.exe',
    label: t('dwnCard.forWin64', { ns: 'downloads-page' }),
  });

  useEffect(() => {
    setSelectedValue({
      value:
        'https://github.com/amnezia-vpn/amnezia-client/releases/download/2.1.2/AmneziaVPN_2.1.2_x64.exe',
      label: t('dwnCard.forWin64', { ns: 'downloads-page' }),
    });
  }, [i18n.language]);

  const values = [
    {
      value:
        'https://github.com/amnezia-vpn/amnezia-client/releases/download/2.1.2/AmneziaVPN_2.1.2_x64.exe',
      label: t('dwnCard.forWin64', { ns: 'downloads-page' }),
    },
    {
      value:
        'https://github.com/amnezia-vpn/amnezia-client/releases/download/2.1.2/AmneziaVPN_2.1.2_x32.exe',
      label: t('dwnCard.forWin32', { ns: 'downloads-page' }),
    },
  ];

  return (
    <div className={styles.root}>
      <DwnVariantsDropdown
        values={values}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
      <DownloadButtonDwnPage text={t('download')} link={selectedValue.value} />
    </div>
  );
};

export default WindowsVariants;
