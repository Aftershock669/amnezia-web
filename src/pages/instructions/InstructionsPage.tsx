import TextLink from '@src/shared/ui/TextLink/TextLink';
import { useEffect } from 'react';

const InstructionsPage = () => {
  useEffect(() => {}, []);
  return (
    <>
      <div>
        <TextLink text="Manual install" to="manual-install" variant="light" />
      </div>
      <div>
        <TextLink text="Automatic install" to="auto-install" variant="light" />
      </div>
    </>
  );
};

export default InstructionsPage;
