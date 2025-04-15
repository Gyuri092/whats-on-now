import { Theme, ThemeStoreType } from '@/types/theme';
import { create } from 'zustand';

const useThemeStore = create<ThemeStoreType>((set) => ({
  theme: 'light',
  setTheme: (theme: Theme) => set({ theme }),
}));

export default useThemeStore;
