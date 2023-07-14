import HeaderText from '@src/pages/main/ui/HeaderText/HeaderText';
import HeaderAppScreen from '@src/pages/main/ui/HeaderAppScreen/HeaderAppScreen';
import HeaderDownload from '@src/pages/main/ui/HeaderDownload/HeaderDownload';
import AffiliatedLogos from '@src/pages/main/ui/AffiliatedLogos/AffiliatedLogos';
import ProtocolsCard from '@src/pages/main/ui/ProtocolsCard/ProtocolsCard';
import FeaturesCard from '@src/pages/main/ui/FeaturesCard/FeaturesCard';
import SecureSimpleFreeSection from '@src/pages/main/ui/SecureEasyFreeSection/SecureSimpleFreeSection';
import PrivacyTextSection from '@src/pages/main/ui/PrivacyTextSection/PrivacyTextSection';
import LogsEncryptSection from '@src/pages/main/ui/LogsEncryptSection/LogsEncryptSection';
import MoreFeaturesSection from '@src/pages/main/ui/MoreFeaturesSection/MoreFeaturesSection';
import usePageDecoration from '@src/shared/hooks/usePageDecoration/usePageDecoration';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const MainPage = () => {
  usePageDecoration('darker');
  const { t } = useTranslation('main-page');
  const { lang } = useParams();
  return (
    <div>
      <Helmet defer={false}>
        <title>{t('metaTitle')}</title>
        <meta name="description" content={t('metaContent')} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Amnezia. Создай свой персональный VPN" />
        <meta property="og:description" content={t('header.subtext')} />
        <meta property="og:image" content="/full-logo-vpn.svg" />
        <meta property="og:image:alt" content="Amnezia logo" />
      </Helmet>
      <HeaderText />
      <HeaderDownload />
      <HeaderAppScreen />
      <AffiliatedLogos />
      <ProtocolsCard />
      <FeaturesCard />
      <SecureSimpleFreeSection />
      <PrivacyTextSection />
      <LogsEncryptSection />
      <MoreFeaturesSection />
    </div>
  );
};

export default MainPage;
