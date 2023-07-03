import classNames from 'classnames';
import Card from '@src/components/card/Card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './SupportCardLink.module.scss';

interface SupportCardLinkProps {
  header: string;
  text: string;
  to: string;
}

const SupportCardLink = ({ header, text, to }: SupportCardLinkProps) => {
  return (
    <Link to={to} className={styles.rootLinkWrapper}>
      <Card className={styles.supportCard}>
        <div>
          <h2>{header}</h2>
          <div className={classNames('main-text', 'dimmed', styles.text)}>{text}</div>
        </div>
        <div className={styles.iconWrapper}>
          <ArrowRight size={40} className={styles.icon} color="#FBB26A" strokeWidth={2} />
        </div>
      </Card>
    </Link>
  );
};

export default SupportCardLink;
