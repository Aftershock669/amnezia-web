import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './DownloadButton.module.scss';

interface DownloadButtonProps {
  text: string;
  link: string;
  reloadDocument?: boolean;
}

const DownloadButton = ({ text, link, reloadDocument }: DownloadButtonProps) => {
  return (
    <Link
      to={link}
      reloadDocument={reloadDocument || false}
      type="button"
      className={classNames(styles.root)}
    >
      {text}
    </Link>
  );
};

export default DownloadButton;
