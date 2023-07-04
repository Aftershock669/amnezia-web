import Accordion from '@src/shared/ui/Accordeon/Accordion';
import styles from './Faq.module.scss';

const faqs = [
  {
    label: 'Lorem ipsum dolor sit amet?',
    content:
      'Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.',
  },
  {
    label: 'Dignissimos sequi architecto?',
    content:
      'Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.',
  },
  {
    label: 'Voluptas praesentium facere?',
    content: 'Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.',
  },
];

const Faq = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>Часто задаваемые вопросы - TODO</div>
      <Accordion data={faqs} />
      {/* <Accordion */}
      {/*  chevron={<PlusIcon size="30px" />} */}
      {/*  classNames={{ */}
      {/*    item: styles.item, */}
      {/*    itemTitle: styles.itemTitle, */}
      {/*    control: styles.control, */}
      {/*    label: styles.label, */}
      {/*    icon: styles.icon, */}
      {/*    chevron: styles.chevron, */}
      {/*    panel: styles.panel, */}
      {/*    content: styles.content, */}
      {/*  }} */}
      {/* > */}
      {/*  <Accordion.Item value="one"> */}
      {/*    <Accordion.Control>Можно ли доверять AmneziaVPN?</Accordion.Control> */}
      {/*    <Accordion.Panel> */}
      {/*      Да. AmneziaVPN является проектом с открытым исходным кодом и разворачивает на сервере приложения OpenVPN, ShadowSocks, WireGuard и/или Cloak по желанию пользователя. У пользователя есть возможность как оперативно развернуть, так и полностью удалить любой из установленных на сервер VPN сервисов, а также полностью очистить сервер от всех установленных Амнезией сервисов всего в один клик. Вопрос в другом - доверяете ли Вы серверу, который собираетесь использовать? ;) */}
      {/*    </Accordion.Panel> */}
      {/*  </Accordion.Item> */}

      {/*  <Accordion.Item value="two"> */}
      {/*    <Accordion.Control>Как именно происходит установка?</Accordion.Control> */}
      {/*    <Accordion.Panel> */}
      {/*      Configure components appearance and behavior with vast amount of settings or overwrite */}
      {/*      any part of component styles */}
      {/*    </Accordion.Panel> */}
      {/*  </Accordion.Item> */}

      {/*  <Accordion.Item value="three"> */}
      {/*    <Accordion.Control>Можно ли использовать авторизацию по ключам для AmneziaVPN?</Accordion.Control> */}
      {/*    <Accordion.Panel> */}
      {/*      With new :focus-visible pseudo-class focus ring appears only when user navigates with */}
      {/*      keyboard */}
      {/*    </Accordion.Panel> */}
      {/*  </Accordion.Item> */}
      {/* </Accordion> */}
    </div>
  );
};

export default Faq;
