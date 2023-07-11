import { useEffect } from 'react';
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
