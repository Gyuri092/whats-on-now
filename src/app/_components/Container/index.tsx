import Header from '@/components/Header';
import ThemeContainer from '@/components/ThemeContainer';
import { ReactNode } from 'react';

const index = ({ children }: { children?: ReactNode }) => {
  return (
    <ThemeContainer>
      <Header />
      {children}
    </ThemeContainer>
  );
};

export default index;
