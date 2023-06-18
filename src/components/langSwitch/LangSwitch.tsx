// eslint-disable-next-line import/no-extraneous-dependencies
import { Menu, Button, rem } from '@mantine/core';
import { Languages, ChevronDown } from 'lucide-react';
import styles from './LangSwitch.module.scss';

const LangSwitch = () => {
  return (
    <Menu
      // styles={{
      //   dropdown: {
      //     background: '#17181C',
      //     borderRadius: '20px',
      //     border: 'none',
      //     '&': {
      //       padding: '30px',
      //     },
      //     '& > div :not(:last-child)': {
      //       marginBottom: '10px',
      //     },
      //   },
      //   item: {
      //     borderRadius: '8px',
      //     color: '#FBB26A',
      //     fontSize: '20px',
      //     '&[data-hovered]': {
      //       backgroundColor: 'rgba(255, 255, 255, 0.08)',
      //     },
      //   },
      // }}
      classNames={{
        item: styles.item,
        dropdown: styles.dropdown,
      }}
    >
      <Menu.Target>
        <button type="button" className={styles.button}>
          <Languages /> <ChevronDown />
        </button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>Русский</Menu.Item>
        <Menu.Item>English</Menu.Item>
        <Menu.Item>English</Menu.Item>
        <Menu.Item>English</Menu.Item>
        <Menu.Item>English</Menu.Item>
        <Menu.Item>English</Menu.Item>
        <Menu.Item>English</Menu.Item>
        <Menu.Item>English</Menu.Item>
        <Menu.Item>English</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default LangSwitch;
