import '@/styles/global.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "What's On Now",
  description:
    'We provide a calendar where you can easily check various events and gatherings at a glance.',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
