'use client';
import CommentIcon from '@/icons/comment.svg';
import DarkModeIcon from '@/icons/darkmode.svg';
import HideCommentInDarkModeIcon from '@/icons/hide-comment-darkmode.svg';
import HideCommentIcon from '@/icons/hide-comment.svg';
import LightModeIcon from '@/icons/lightmode.svg';
import useCommentStore from '@/stores/commentStore';
import useThemeStore from '@/stores/themeStore';
import '@/styles/toggle-button.scss';
import { Theme } from '@/types/theme';

const Index = ({ feature }: { feature: string }) => {
  const themeState = useThemeStore((state: { theme: Theme }) => state.theme);
  const commentState = useCommentStore(
    (state: { hideComments: boolean }) => state.hideComments,
  );

  const changeState = () => {
    if (feature === 'theme') {
      useThemeStore.setState((state: { theme: Theme }) => ({
        theme: state.theme === 'dark' ? 'light' : 'dark',
      }));
    } else if (feature === 'comment') {
      useCommentStore.setState((state: { hideComments: boolean }) => ({
        hideComments: !state.hideComments,
      }));
    }
  };

  const getState = () => {
    if (feature === 'theme') {
      return themeState;
    } else if (feature === 'comment') {
      return commentState ? 'hide-comment' : '';
    }
    return '';
  };

  const getIcon = () => {
    if (feature === 'theme') {
      return themeState === 'dark' ? <DarkModeIcon /> : <LightModeIcon />;
    }
    return commentState ? (
      themeState === 'dark' ? (
        <HideCommentInDarkModeIcon />
      ) : (
        <HideCommentIcon />
      )
    ) : (
      <CommentIcon />
    );
  };

  return (
    <button className={`toggle-button ${getState()}`} onClick={changeState}>
      <div className={`toggle-button-icon ${getState()}`}>{getIcon()}</div>
    </button>
  );
};
export default Index;
