import CommentIcon from '@/icons/comment.svg';
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
  return (
    <button className="toggle-button">
      {feature === 'theme' ? <LightModeIcon /> : <CommentIcon />}
      <div className="toggle-circle" />
    </button>
  );
};
export default Index;
