import { useTranslation } from 'react-i18next';
import styles from '@src/components/footer/ui/BadgesContainer/BadgesContainer.module.scss';

interface DownloadBadgeProps {
  variant: 'appStore' | 'googlePlay' | 'appGallery';
}

const DownloadBadge = ({ variant }: DownloadBadgeProps) => {
  const { t, i18n } = useTranslation();

  const switchBadge = () => {
    switch (variant) {
      case 'appStore':
        return {
          link: 'https://apps.apple.com/us/app/amneziavpn/id1600529900',
          img: `/img/${i18n.language}/dwn-app-store.png`,
        };
      case 'googlePlay':
        return {
          link: 'https://play.google.com/store/apps/details?id=org.amnezia.vpn',
          img: `/img/${i18n.language}/dwn-play.png`,
        };
      case 'appGallery':
        return {
          link: 'https://play.google.com/store/apps/details?id=org.amnezia.vpn',
          img: `/img/${i18n.language}/dwn-app-gal.png`,
        };
      default:
        return {
          link: '/',
          img: '',
        };
    }
  };

  return (
    <div className={styles.root}>
      <a target="_blank" href={switchBadge().link} rel="noreferrer">
        <img height="54px" width="180px" src={switchBadge().img} alt="google play badge" />
      </a>
    </div>
  );
};

export default DownloadBadge;
