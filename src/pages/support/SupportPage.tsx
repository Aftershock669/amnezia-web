import TextLink from '@src/shared/ui/TextLink/TextLink';
import SupportHeaderText from '@src/pages/support/ui/SupportHeaderText/SupportHeaderText';
import SupportCards from '@src/pages/support/ui/SupportCards/SupportCards';
import ContactsCard from '@src/pages/support/ui/ContactsCard/ContactsCard';
import Faq from '@src/pages/support/ui/Faq/Faq';

const SupportPage = () => {
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
