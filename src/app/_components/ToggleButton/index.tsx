import '@/styles/toggle-button.scss';

const Index = ({ feature }: { feature: string }) => {
  return <button className="toggle-button">{feature}</button>;
};
export default Index;
