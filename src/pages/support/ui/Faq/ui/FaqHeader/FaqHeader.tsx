import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import { Hammer, Info, Settings2 } from 'lucide-react';
import classNames from 'classnames';
import Card from '@src/shared/ui/Card/Card';
import MD5 from 'crypto-js/md5';
import TextLink from '@src/shared/ui/TextLink/TextLink';
import styles from './FaqHeader.module.scss';

interface FaqHeaderProps {
  aboutDataMd: string;
  usageDataMd: string;
  troubleshootingDataMd: string;
}

const FaqHeader = ({ aboutDataMd, usageDataMd, troubleshootingDataMd }: FaqHeaderProps) => {
  const RouterLink = ({ children }: any) => {
    return (
      <div>
        {/* <TextLink variant="menu" text={children} to={`#${MD5(children[0]).toString()}`} /> */}
        <a className={styles.link} href={`#${MD5(children[0]).toString()}`}>
          {children}
        </a>
      </div>
    );
  };

  return (
    <div className={styles.root}>
      <Card bg="gradGray" className={classNames(styles.card, styles.gridAbout)}>
        <div className={styles.cardHeader}>
          <div className={styles.headerText}>Об Amnezia</div>
          <Info color="#5CAEE7" />
        </div>
        <div className={styles.content}>
          <ReactMarkdown
            components={{
              h3: RouterLink,
              p: () => null,
              ul: () => null,
              li: () => null,
              hr: () => null,
              blockquote: () => null,
              a: () => null,
            }}
            remarkPlugins={[remarkGfm]}
          >
            {aboutDataMd}
          </ReactMarkdown>
        </div>
      </Card>
      <Card bg="gradGray" className={classNames(styles.card, styles.gridTshoot)}>
        <div className={styles.cardHeader}>
          <div className={styles.headerText}>Решение проблем</div>
          <Hammer color="#EB5757" />
        </div>
        <div className={styles.content}>
          <ReactMarkdown
            components={{
              h3: RouterLink,
              p: () => null,
              ul: () => null,
              li: () => null,
              hr: () => null,
              blockquote: () => null,
              a: () => null,
            }}
            remarkPlugins={[remarkGfm]}
          >
            {aboutDataMd}
          </ReactMarkdown>
        </div>
      </Card>
      <Card bg="gradGray" className={classNames(styles.card, styles.gridUsage)}>
        <div className={styles.cardHeader}>
          <div className={styles.headerText}>Использование</div>
          <Settings2 color="#A87BE2" />
        </div>
        <div className={classNames(styles.content, styles.usageContent)}>
          <ReactMarkdown
            components={{
              h3: RouterLink,
              p: () => null,
              ul: () => null,
              li: () => null,
              hr: () => null,
              blockquote: () => null,
              a: () => null,
            }}
            remarkPlugins={[remarkGfm]}
          >
            {aboutDataMd}
          </ReactMarkdown>
        </div>
      </Card>
      {/* <ReactMarkdown remarkPlugins={[remarkGfm]}>{dataMd}</ReactMarkdown> */}
    </div>
  );
};

export default FaqHeader;
