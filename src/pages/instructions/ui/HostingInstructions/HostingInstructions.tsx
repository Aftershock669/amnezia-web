import { useTranslation } from 'react-i18next';
import SingleHostingInstruction from '@src/pages/instructions/ui/HostingInstructions/ui/SingleHostingInstruction/SingleHostingInstruction';
import AccordionItemV2 from '@src/shared/ui/AccordeonV2/ui/AccordionItemV2/AccordionItemV2';
import AccordionV2 from '@src/shared/ui/AccordeonV2/AccordionV2';
import usePageDecoration from '@src/shared/hooks/usePageDecoration/usePageDecoration';
import { Helmet } from 'react-helmet';
import styles from './HostingInstructions.module.scss';
import hostingDataRu from '../../config/hostingDataRu.json';

const HostingInstructions = () => {
  usePageDecoration('dark');
  const { i18n } = useTranslation();

  return (
    <>
      <Helmet defer={false}>
        <title>Amnezia - {hostingDataRu.h1}</title>
        <meta name="description" content={hostingDataRu.h1} />
      </Helmet>

      <div className={styles.root}>
        <h1>{hostingDataRu.h1}</h1>
        <h2>{hostingDataRu.h2}</h2>
        <p>{hostingDataRu.p1}</p>
        <blockquote>
          <p>{hostingDataRu.cardText}</p>
        </blockquote>
        <p>{hostingDataRu.p2}</p>
        <div className={styles.accordionWrapper}>
          <AccordionV2>
            {hostingDataRu.hostings.map((hosting, i) => (
              <AccordionItemV2
                key={hosting.link}
                value={hosting.link}
                label={<img src={hosting.logo} height="40px" width="auto" />}
              >
                <SingleHostingInstruction data={hosting} />
              </AccordionItemV2>
            ))}
          </AccordionV2>
        </div>
      </div>
    </>
  );
};

export default HostingInstructions;
