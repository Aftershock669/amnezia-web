import HeaderText from '@src/pages/main/ui/HeaderText/HeaderText';
import HeaderAppScreen from '@src/pages/main/ui/HeaderAppScreen/HeaderAppScreen';
import HeaderDownload from '@src/pages/main/ui/HeaderDownload/HeaderDownload';

const MainPage = () => {
  return (
    <div>
      <HeaderText />
      <HeaderDownload />
      <HeaderAppScreen />
    </div>
  );
};

export default MainPage;
