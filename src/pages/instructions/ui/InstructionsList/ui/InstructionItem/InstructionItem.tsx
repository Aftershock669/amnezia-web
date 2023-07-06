import TextLink from '@src/shared/ui/TextLink/TextLink';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './InstructionItem.module.scss';

export interface InstructionItemProps {
  text: string;
  to: string;
  subtext?: string;
}

const InstructionItem = ({ text, subtext = '', to }: InstructionItemProps) => {
  return (
    <div className={styles.root}>
      <Link className={styles.link} to={to}>
        <div className={styles.textContainer}>
          <div>{text}</div>
          <div className={styles.subtext}>{subtext}</div>
        </div>
        <div className={styles.iconWrapper}>
          <ChevronRight size={30} />
        </div>
      </Link>
    </div>
  );
};

export default InstructionItem;
