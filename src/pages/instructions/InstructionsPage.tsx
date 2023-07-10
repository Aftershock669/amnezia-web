import TextLink from '@src/shared/ui/TextLink/TextLink';
import { useEffect } from 'react';
import tableOfContents from '@src/pages/instructions/config/tableOfContents';
import InstructionsPageHeader from '@src/pages/instructions/ui/InstructionsHeaderText/InstructionsPageHeader';
import InstructionsList from '@src/pages/instructions/ui/InstructionsList/InstructionsList';
import usePageDecoration from '@src/shared/hooks/usePageDecoration/usePageDecoration';

const InstructionsPage = () => {
  usePageDecoration('dark');
  useEffect(() => {}, []);
  return (
    <>
      <InstructionsPageHeader />
      <InstructionsList />
    </>
  );
};

export default InstructionsPage;
