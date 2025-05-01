import MenuLink from '@/app/_components/MenuLink';
import ToggleButton from '@/components/ToggleButton';
import LogoIcon from '@/icons/logo.svg';
import TitleSVG from '@/icons/title.svg';
import '@/styles/header.scss';
import Link from 'next/link';

const Index = () => {
  return (
    <div className="header-container">
      <div className="title-container">
        <Link href="/" className="title-link">
          <LogoIcon />
          <TitleSVG />
        </Link>
      </div>
      <div className="menu-container">
        <MenuLink text="캘린더" path="calendar" />
        <MenuLink text="사용법" path="usage" />
        <ToggleButton feature="theme" />
        <ToggleButton feature="comment" />
      </div>
    </div>
  );
};

export default Index;
