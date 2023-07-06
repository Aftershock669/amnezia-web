import tableOfContents from '@src/pages/instructions/config/tableOfContents';
import InstructionItem from '@src/pages/instructions/ui/InstructionsList/ui/InstructionItem/InstructionItem';
import styles from './InstructionsList.module.scss';

const InstructionsList = () => {
  return (
    <div className={styles.root}>
      {tableOfContents.map((el: any, i) => (
        <InstructionItem key={i} text={el.title} to={el.href} subtext={el.subtext} />
      ))}
    </div>
  );
};

export default InstructionsList;
