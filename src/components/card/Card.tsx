import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Card.module.scss';

interface PT {
  children?: ReactNode;
  bg?: 'gradGray' | 'gradPurple' | 'plainGray';
}

const Card = ({ children, bg = 'gradGray' }: PT) => {
  return (
    <div
      className={classNames(styles.root, {
        [styles.gradGray]: bg === 'gradGray',
        [styles.gradPurple]: bg === 'gradPurple',
        [styles.plainGray]: bg === 'plainGray',
      })}
    >
      {children}
    </div>
  );
};

export default Card;
