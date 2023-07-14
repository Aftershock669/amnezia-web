import { useEffect } from 'react';
import InstructionsPageHeader from '@src/pages/instructions/ui/InstructionsHeaderText/InstructionsPageHeader';
import InstructionsList from '@src/pages/instructions/ui/InstructionsList/InstructionsList';
import usePageDecoration from '@src/shared/hooks/usePageDecoration/usePageDecoration';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const InstructionsPage = () => {
  usePageDecoration('dark');
  useEffect(() => {}, []);
  const { t } = useTranslation();
  return (
    <>
      <Helmet defer={false}>
        <title>{t('instructionsPage.metaTitle')}</title>
        <meta name="description" content={t('instructionsPage.metaContent')} />
      </Helmet>
      <InstructionsPageHeader />
      <InstructionsList />
    </>
  );
};

export default InstructionsPage;
