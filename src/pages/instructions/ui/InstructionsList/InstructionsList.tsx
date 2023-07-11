import InstructionItem from '@src/pages/instructions/ui/InstructionsList/ui/InstructionItem/InstructionItem';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './InstructionsList.module.scss';

const InstructionsList = () => {
  const { i18n } = useTranslation();
  const [tableOfContents, setTableOfContents] = useState<any[]>([]);

  useEffect(() => {
    const gitLink = `https://raw.githubusercontent.com/Aftershock669/amnezia-open-docs/master/docs/${i18n.resolvedLanguage}/instructions/tableOfContents.json`;

    const fetchData = () => {
      return fetch(gitLink)
        .then((response) => response.json())
        .then((data) => {
          setTableOfContents(data);
        });
    };

    fetchData();
  }, []);

  return (
    <div className={styles.root}>
      {tableOfContents.map((el: any, i) => (
        <InstructionItem key={i} text={el.title} to={el.href} subtext={el.subtext} />
      ))}
    </div>
  );
};

export default InstructionsList;
