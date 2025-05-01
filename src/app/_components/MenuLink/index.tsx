import '@/styles/menu-link.scss';
import Link from 'next/link';

const Index = ({ text, path }: { text: string; path: string }) => {
  return (
    <Link className="menu-link" href={`/${path}`}>
      {text}
    </Link>
  );
};

export default Index;
