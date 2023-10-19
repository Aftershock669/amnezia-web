import DocsHeader from '@src/components/DocsHeader/DocsHeader';
import DocsList from '@src/components/DocsList/DocsList';
import usePageDecoration from '@src/shared/hooks/usePageDecoration/usePageDecoration';
import { useTranslation } from 'react-i18next';
import SeoUpdater from '@src/components/SeoUpdater/SeoUpdater';
import { Center } from '@mantine/core';
import TextLink from '@src/shared/ui/TextLink/TextLink';
import getFallbackLangForRuEnOnlyContent from '@src/shared/helpers/getFallbackLangForRuEnOnlyContent';
import styles from './InstructionsPage.module.scss';

const InstructionsPage = () => {
  usePageDecoration('dark');

  const { t, i18n } = useTranslation();
  return (
    <div>
      <SeoUpdater
        title={t('instructionsPage.metaTitle')}
        metaDesc={t('instructionsPage.metaContent')}
      />
      <DocsHeader
        text={t('instructionsPage.header.text')}
        breadcrumbs={[{ title: t('navigation.support'), href: '../support' }]}
      />
      <DocsList
        dataLink={`https://raw.githubusercontent.com/amnezia-vpn/amnezia.org-content/master/docs/${i18n.resolvedLanguage}/instructions/tableOfContents.json`}
      />
      <Center className={styles.legacyLinkWrapper}>
        <TextLink
          className={styles.legacyLink}
          variant="dark"
          text={t('instructionsPage.legacyInstructionsLink')}
          to={`https://${getFallbackLangForRuEnOnlyContent(
            i18n.resolvedLanguage
          )}-docs.amnezia.org`}
        />
      </Center>
    </div>
  );
};

export default InstructionsPage;
