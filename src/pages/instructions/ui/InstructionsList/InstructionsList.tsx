import InstructionItem from '@src/pages/instructions/ui/InstructionsList/ui/InstructionItem/InstructionItem';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import InstructionsListSkeleton from '@src/pages/instructions/ui/InstructionsList/ui/InstructionsListSkeleton/InstructionsListSkeleton';
import styles from './InstructionsList.module.scss';

const InstructionsList = () => {
  const { i18n } = useTranslation();
  const [tableOfContents, setTableOfContents] = useState<any[]>([]);
  const [status, setStatus] = useState('loading'); // loading | ok | error

  useEffect(() => {
    const gitLink = `https://raw.githubusercontent.com/Aftershock669/amnezia-open-docs/master/docs/${i18n.resolvedLanguage}/instructions/tableOfContents.json`;

    const fetchData = async () => {
      setStatus('loading');

      const res = await fetch(gitLink);

      if (res.status !== 200) {
        setTimeout(() => {
          setStatus('error');
        }, 400);
      } else {
        const data = await res.json();

        setTableOfContents(data);

        setTimeout(() => {
          setStatus('ok');
        }, 400);
      }

      // setTableOfContents([]);
      // return fetch(gitLink)
      //   .then((response) => response.json())
      //   .then((data) => {
      //     setTableOfContents(data);
      //   });
    };

    fetchData();
  }, [i18n.resolvedLanguage]);

  return (
    <div className={styles.root}>
      {status === 'ok' && (
        <div className={styles.wrapper}>
          {tableOfContents.map((el: any, i) => (
            <InstructionItem key={i} text={el.title} to={el.href} subtext={el.subtext} />
          ))}
        </div>
      )}
      {status === 'loading' && <InstructionsListSkeleton />}
    </div>
  );
};

export default InstructionsList;
