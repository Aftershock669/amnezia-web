import TextLink from '@src/shared/ui/TextLink/TextLink';
import SupportHeaderText from '@src/pages/support/ui/SupportHeaderText/SupportHeaderText';
import SupportCards from '@src/pages/support/ui/SupportCards/SupportCards';
import ContactsCard from '@src/components/ContactsCard/ContactsCard';
import Faq from '@src/pages/support/ui/Faq/Faq';
import usePageDecoration from '@src/shared/hooks/usePageDecoration/usePageDecoration';

const SupportPage = () => {
  usePageDecoration('dark');

  return (
    <>
      <SupportHeaderText />
      <SupportCards />
      <Faq />
      <ContactsCard />
    </>
  );
};

export default SupportPage;
