import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import styles from './GraduateContainer.module.scss';

const GraduateContainer = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={classNames(styles.root)}>
      <a target="_blank" href="https://privacyaccelerator.org/" rel="noreferrer">
        <img src={`/img/${i18n.language}/graduate.png`} alt="google play badge" />
      </a>
    </div>
  );
};

export default GraduateContainer;
