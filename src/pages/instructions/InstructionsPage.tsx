import TextLink from '@src/shared/ui/TextLink/TextLink';
import { useEffect } from 'react';
import tableOfContents from '@src/pages/instructions/config/tableOfContents';
import InstructionsPageHeader from '@src/pages/instructions/ui/InstructionsHeaderText/InstructionsPageHeader';
import InstructionsList from '@src/pages/instructions/ui/InstructionsList/InstructionsList';

const InstructionsPage = () => {
  useEffect(() => {}, []);
  return (
    <>
      <InstructionsPageHeader />
      <InstructionsList />
    </>
  );
};

export default InstructionsPage;
