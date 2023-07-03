import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './DownloadButtonDwnPage.module.scss';

interface DownloadButtonProps {
  text: string;
  link: string;
  reloadDocument?: boolean;
  openInNewTab?: boolean;
}

const DownloadButtonDwnPage = ({
  text,
  link,
  reloadDocument,
  openInNewTab,
}: DownloadButtonProps) => {
  return (
    <Link
      to={link}
      target={openInNewTab ? '_blank' : ''}
      reloadDocument={reloadDocument || false}
      type="button"
      className={classNames(styles.root)}
    >
      {text}
    </Link>
  );
};

export default DownloadButtonDwnPage;
