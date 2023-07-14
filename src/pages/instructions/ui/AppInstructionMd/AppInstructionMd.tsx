/* eslint-disable import/no-extraneous-dependencies,import/no-absolute-path */
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import MdStyledContainer from '@src/components/MdStyledContainer/MdStyledContainer';
import TextLink from '@src/shared/ui/TextLink/TextLink';
import usePageDecoration from '@src/shared/hooks/usePageDecoration/usePageDecoration';
import InstructionSkeleton from '@src/components/InstructionSkeleton/InstructionSkeleton';
import { Helmet } from 'react-helmet';

function RouterLink({ children, href }: any) {
  return href.match(/^\//) ? (
    <TextLink variant="underline" text={children} to={href} />
  ) : (
    <TextLink variant="underline" text={children} to={href} openInNewTab />
  );
  // return <TextLink variant="underline" text={children} to={href} openInNewTab />;
}

interface AppInstructionMdProps {
  instructionId: string | undefined;
}

const AppInstructionMd = ({ instructionId = '' }: AppInstructionMdProps) => {
  usePageDecoration('dark');
  const location = useLocation();
  const { i18n } = useTranslation();

  const [read, setRead] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [instrTitle, setInstrTitle] = useState('');

  const handleTitle = (title: string) => {
    setInstrTitle(`Amnezia - ${title}`);
  };

  useEffect(() => {
    setIsLoading(true);

    // const instructionHref = location.pathname;
    // const instructionUrlName = location.pathname.split('/')[3];

    // const gitLink = `https://raw.githubusercontent.com/Aftershock669/amnezia-open-docs/master/docs/${instructionHref}/${instructionUrlName}.md`;
    const gitLink = `https://raw.githubusercontent.com/Aftershock669/amnezia-open-docs/master/docs/${i18n.resolvedLanguage}/instructions/${instructionId}/${instructionId}.md`;

    const fetchData = () => {
      return fetch(gitLink)
        .then((response) => response.text())
        .then((text) => {
          setRead(text);
          const reg = text.match(/^(\S+)\s(.*)/);
          if (reg) handleTitle(reg.slice(1)[1]);
          setTimeout(() => {
            setIsLoading(false);
          }, 400);
        });
    };

    fetchData();

    // FETCH FROM FS
    // import('/docs/en/manual-install/manual-install.md').then((res) => {
    //   fetch(res.default)
    //     .then((response) => response.text())
    //     .then((text) => setRead(text));
    // });
  }, [location, i18n.resolvedLanguage]);

  return (
    <>
      <Helmet defer={false}>
        <title>{instrTitle}</title>
        <meta name="description" content="234" />
      </Helmet>
      {isLoading ? (
        <InstructionSkeleton />
      ) : (
        <MdStyledContainer>
          <ReactMarkdown components={{ a: RouterLink }} remarkPlugins={[remarkGfm]}>
            {read}
          </ReactMarkdown>
        </MdStyledContainer>
      )}
    </>
  );
};

export default AppInstructionMd;
