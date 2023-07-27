import usePageDecoration from '@src/shared/hooks/usePageDecoration/usePageDecoration';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import styles from './ProtocolsInstruction.module.scss';

// TODO
const ProtocolsInstruction = () => {
  // const [ad, setTableOfContents] = useState<any[]>([]);

  usePageDecoration('dark');
  const { i18n } = useTranslation();

  const gitLink = `https://raw.githubusercontent.com/Aftershock669/amnezia-open-docs/master/docs/${i18n.resolvedLanguage}/instructions/protocols/img/protocols.png`;

  return (
    <>
      <Helmet defer={false}>
        <title />
        {/* <meta name="description" content={hostingDataRu.h1} /> */}
      </Helmet>
      <div className={styles.root}>
        <h1>Поддерживаемые протоколы</h1>
        <img height="auto" width="100%" src={gitLink} />
      </div>
    </>
  );
};

export default ProtocolsInstruction;
