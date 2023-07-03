import { AccItem } from '@src/shared/ui/Accordeon/Accordion';
import classNames from 'classnames';
import { useRef } from 'react';
import { MinusIcon, PlusIcon } from 'lucide-react';
import styles from './AccordionItem.module.scss';

interface AccordionItemProps {
  data: AccItem;
  onToggle: any;
  active: boolean;
}

const AccordionItem = ({ data, onToggle, active }: AccordionItemProps) => {
  const contentElRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  return (
    <li className={classNames(styles.item, { [styles.active]: active })}>
      <button className={styles.button} onClick={onToggle}>
        {data.question}
        <span className={styles.control}>
          {active ? <MinusIcon size={26} /> : <PlusIcon size={26} />}{' '}
        </span>
      </button>
      <div
        ref={contentElRef}
        className={classNames(styles.contentWrapper, { [styles.open]: active })}
        style={active ? { height: contentElRef.current.scrollHeight } : { height: '0px' }}
      >
        <div className={styles.content}>{data.answer}</div>
      </div>
    </li>
  );
};

export default AccordionItem;
