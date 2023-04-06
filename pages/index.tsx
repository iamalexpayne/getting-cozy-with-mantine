import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeaderResponsive } from '../components/HeaderResponsive';

export default function HomePage() {
  return (
    <>
      <HeaderResponsive links={[
        { link: '/about', label: 'Features' },
        { link: '/pricing', label: 'Pricing' },
        { link: '/learn', label: 'Learn' },
        { link: '/community', label: 'Community' },
      ]}
      />
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
