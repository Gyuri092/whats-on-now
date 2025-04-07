import MenuButton from '@/components/MenuButton';
import ToggleButton from '@/components/ToggleButton';
import LogoIcon from '@/icons/logo.svg';
import TitleSVG from '@/icons/title.svg';
import '@/styles/header.scss';

const Index = () => {
  return (
    <div className="header-container">
      <div className="title-container">
        <LogoIcon />
        <TitleSVG />
      </div>
      <div className="menu-container">
        <MenuButton text="캘린더" />
        <MenuButton text="사용법" />
        <ToggleButton feature="light-dark-mode" />
        <ToggleButton feature="view-hide-comment" />
      </div>
    </div>
  );
};

export default Index;
