'use client';

import useThemeStore from '@/stores/themeStore';
import { Theme } from '@/types/theme';

const Index = ({ children }: { children: React.ReactNode }) => {
  const themeState = useThemeStore((state: { theme: Theme }) => state.theme);
  return <div className={`root-page ${themeState}`}>{children}</div>;
};

export default Index;
