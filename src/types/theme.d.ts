export type Theme = 'light' | 'dark';

export interface ThemeStoreType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
