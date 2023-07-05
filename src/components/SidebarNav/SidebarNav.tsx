import { ReactNode } from 'react';
import styles from './SidebarNav.module.scss';

interface SidebarNavProps {
  children: ReactNode;
}

const SidebarNav = ({ children }: SidebarNavProps) => {
  return <div className={styles.root}>{children}</div>;
};

export default SidebarNav;
