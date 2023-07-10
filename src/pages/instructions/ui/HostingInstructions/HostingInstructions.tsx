import InstructionLayout from '@src/layouts/InstructionLayout/InstructionLayout';
import { useTranslation } from 'react-i18next';
import { Tabs } from '@mantine/core';
import SingleHostingInstruction from '@src/pages/instructions/ui/HostingInstructions/ui/SingleHostingInstruction/SingleHostingInstruction';
import AccordionItemV2 from '@src/shared/ui/AccordeonV2/ui/AccordionItemV2/AccordionItemV2';
import AccordionV2 from '@src/shared/ui/AccordeonV2/AccordionV2';
import Card from '@src/shared/ui/Card/Card';
import usePageDecoration from '@src/shared/hooks/usePageDecoration/usePageDecoration';
import styles from './HostingInstructions.module.scss';
import hostingDataRu from '../../config/hostingDataRu.json';

const HostingInstructions = () => {
  usePageDecoration('dark');
  const { i18n } = useTranslation();

  return (
    <InstructionLayout>
      <div className={styles.root}>
        <h1>{hostingDataRu.h1}</h1>
        <h2>{hostingDataRu.h2}</h2>
        <p>{hostingDataRu.h2text}</p>
        <blockquote>
          <p>
            Amnezia работает с любыми серверами с операционной системой Ubuntu (официально
            поддерживаемая версия - 20.04), так же поддерживается Debian 10.
          </p>
        </blockquote>
        <Tabs
          unstyled
          keepMounted={false}
          color="yellow"
          radius="md"
          defaultValue={hostingDataRu.hostings[0].link}
          styles={{
            tabsList: {
              // borderBottom: '1px solid #17181C',
              borderBottom: 'none',
              display: 'flex',
              flexWrap: 'wrap', // bug error
              gap: '10px',
            },
            tab: {
              minWidth: '140px',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '70px',
              padding: '0 20px',
              border: '1px solid transparent',
              borderRadius: '16px',
              backgroundColor: '#1c1c1e',
              '&[data-active]': {
                backgroundColor: '#1c1c1e',
                borderColor: '#FBB26A',
              },
            },
          }}
        >
          {/* <Card className={styles.card}> */}
          <Tabs.List>
            {hostingDataRu.hostings.map((hosting, i) => (
              <Tabs.Tab
                key={i}
                value={hosting.link}
                // icon={<IconPhoto size="0.8rem" />}
              >
                <img src={hosting.logo} height="26px" />
              </Tabs.Tab>
            ))}
          </Tabs.List>
          {/* </Card> */}

          {hostingDataRu.hostings.map((hosting, i) => (
            <Tabs.Panel key={i} value={hosting.link} pt="xs">
              <SingleHostingInstruction data={hosting} />
            </Tabs.Panel>
          ))}
        </Tabs>
        {/* <AccordionV2> */}
        {/*  {hostingDataRu.map((hosting, i) => ( */}
        {/*    <AccordionItemV2 key={i} value={i} label={<img src={hosting.logo} width="60px" />}> */}
        {/*      <SingleHostingInstruction data={hosting} /> */}
        {/*    </AccordionItemV2> */}
        {/*  ))} */}
        {/* </AccordionV2> */}
        {/* <Accordion data={i18n.resolvedLanguage === 'ru' ? faqDataRu : faqDataEn} /> */}
      </div>
    </InstructionLayout>
  );
};

export default HostingInstructions;
