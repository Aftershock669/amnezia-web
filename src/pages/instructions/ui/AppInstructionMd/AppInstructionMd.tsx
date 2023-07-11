/* eslint-disable import/no-extraneous-dependencies,import/no-absolute-path */
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import MdStyledContainer from '@src/components/MdStyledContainer/MdStyledContainer';
import TextLink from '@src/shared/ui/TextLink/TextLink';
import InstructionLayout from '@src/layouts/InstructionLayout/InstructionLayout';
import usePageDecoration from '@src/shared/hooks/usePageDecoration/usePageDecoration';

function RouterLink({ children, href }: any) {
  return href.match(/^\//) ? (
    <TextLink variant="underline" text={children} to={href} />
  ) : (
    <TextLink variant="underline" text={children} to={href} openInNewTab />
  );
  // return <TextLink variant="underline" text={children} to={href} openInNewTab />;
}

const AppInstructionMd = () => {
  usePageDecoration('dark');
  const location = useLocation();
  const { i18n } = useTranslation();

  const [read, setRead] = useState('');

  useEffect(() => {
    const instructionHref = location.pathname;
    const instructionName = location.pathname.split('/')[3];

    const gitLink = `https://raw.githubusercontent.com/Aftershock669/amnezia-open-docs/master/docs/${instructionHref}/${instructionName}.md`;

    const fetchData = () => {
      return fetch(gitLink)
        .then((response) => response.text())
        .then((text) => setRead(text));
    };

    fetchData();

    // FETCH FROM FS - WORKING
    // import('/docs/en/manual-install/manual-install.md').then((res) => {
    //   fetch(res.default)
    //     .then((response) => response.text())
    //     .then((text) => setRead(text));
    // });
  }, [location, i18n.resolvedLanguage]);

  return (
    <InstructionLayout>
      <MdStyledContainer>
        <ReactMarkdown components={{ a: RouterLink }} remarkPlugins={[remarkGfm]}>
          {read}
        </ReactMarkdown>
      </MdStyledContainer>
    </InstructionLayout>
  );
};

export default AppInstructionMd;
