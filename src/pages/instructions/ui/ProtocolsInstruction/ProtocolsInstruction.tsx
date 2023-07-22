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

  // useEffect(() => {
  //   const gitLink = `https://raw.githubusercontent.com/Aftershock669/amnezia-open-docs/master/docs/${i18n.resolvedLanguage}/instructions/protocols/protocols.json`;
  //
  //   const fetchData = async () => {
  //     const res = await fetch(gitLink);
  //
  //     if (res.status === 200) {
  //       const data = await res.json();
  //       setTableOfContents(data);
  //     }
  //   };
  //
  //   fetchData();
  // }, [i18n.resolvedLanguage]);

  return (
    <>sad</>
    // <>
    //   <Helmet defer={false}>
    //     <title />
    //     {/* <meta name="description" content={hostingDataRu.h1} /> */}
    //   </Helmet>
    //   <div className={styles.root}>
    //     <img src={gitLink} />
    //   </div>
    // </>
  );
};

export default ProtocolsInstruction;
