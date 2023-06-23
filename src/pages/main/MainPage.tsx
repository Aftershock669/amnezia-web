import HeaderText from '@src/pages/main/ui/HeaderText/HeaderText';
import HeaderAppScreen from '@src/pages/main/ui/HeaderAppScreen/HeaderAppScreen';
import HeaderDownload from '@src/pages/main/ui/HeaderDownload/HeaderDownload';
import AffiliatedLogos from '@src/pages/main/ui/AffiliatedLogos/AffiliatedLogos';
import ProtocolsCard from '@src/pages/main/ui/ProtocolsCard/ProtocolsCard';
import FeaturesCard from '@src/pages/main/ui/FeaturesCard/FeaturesCard';
import SecureSimpleFreeSection from '@src/pages/main/ui/SecureEasyFreeSection/SecureSimpleFreeSection';

const MainPage = () => {
  return (
    <div>
      <HeaderText />
      <HeaderDownload />
      <HeaderAppScreen />
      <AffiliatedLogos />
      <ProtocolsCard />
      <FeaturesCard />
      <SecureSimpleFreeSection />
    </div>
  );
};

export default MainPage;
