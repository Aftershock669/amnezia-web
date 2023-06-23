import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './TextLink.module.scss';

interface TextLinkProps {
  text: string;
  to: string;
  reloadDocument?: boolean;
  variant: 'light' | 'dark' | 'underline';
  className?: string;
  openInNewTab?: boolean;
}

const TextLink = ({
  text,
  to,
  variant,
  reloadDocument = false,
  className = '',
  openInNewTab = false,
}: TextLinkProps) => {
  return (
    <Link
      to={to}
      target={openInNewTab ? '_blank' : ''}
      reloadDocument={reloadDocument || false}
      className={classNames(
        styles.root,
        { [styles.linkLight]: false },
        { [styles.linkDark]: false },
        { [styles.linkUnderline]: true },
        className
      )}
    >
      {text}
    </Link>
  );
};

export default TextLink;
