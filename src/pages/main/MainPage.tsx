import HeaderText from '@src/pages/main/ui/HeaderText/HeaderText';
import HeaderAppScreen from '@src/pages/main/ui/HeaderAppScreen/HeaderAppScreen';
import HeaderDownload from '@src/pages/main/ui/HeaderDownload/HeaderDownload';
import AffiliatedLogos from '@src/pages/main/ui/AffiliatedLogos/AffiliatedLogos';

const MainPage = () => {
  return (
    <div>
      <HeaderText />
      <HeaderDownload />
      <HeaderAppScreen />
      <AffiliatedLogos />
    </div>
  );
};

export default MainPage;
