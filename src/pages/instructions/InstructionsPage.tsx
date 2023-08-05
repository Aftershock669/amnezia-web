import InstructionsPageHeader from '@src/pages/instructions/ui/InstructionsHeaderText/InstructionsPageHeader';
import InstructionsList from '@src/pages/instructions/ui/InstructionsList/InstructionsList';
import usePageDecoration from '@src/shared/hooks/usePageDecoration/usePageDecoration';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import SeoUpdater from '@src/components/SeoUpdater/SeoUpdater';

const InstructionsPage = () => {
  usePageDecoration('dark');

  const { t } = useTranslation();
  return (
    <div>
      <SeoUpdater
        title={t('instructionsPage.metaTitle')}
        metaDesc={t('instructionsPage.metaContent')}
      />
      <InstructionsPageHeader />
      <InstructionsList />
    </div>
  );
};

export default InstructionsPage;
