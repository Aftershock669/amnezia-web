import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './DecoratedPageLayout.module.scss';

interface DecoratedPageLayoutProps {
  bg: string; // 'dark' | 'darker'
  children: ReactNode;
}

const DecoratedPageLayout = ({ bg, children }: DecoratedPageLayoutProps) => {
  return (
    <div
      className={classNames(styles.decor, {
        [styles.bgDark]: bg === 'dark',
        [styles.bgDarker]: bg === 'darker',
      })}
    >
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default DecoratedPageLayout;