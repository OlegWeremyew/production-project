import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation('navbar');

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to="/"
          className={cls.mainLink}
        >
          {t('главная')}
        </AppLink>

        <AppLink
          theme={AppLinkTheme.RED}
          to="/about"
        >
          {t('О сайте')}
        </AppLink>
      </div>
    </div>
  );
};
