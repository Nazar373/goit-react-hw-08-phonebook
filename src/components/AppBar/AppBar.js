import { Divider } from 'theme-ui';
import { AuthNav } from '../AuthNav/AuthNav';
import { Navigation } from '../Navigation/Navigation';

export const AppBar = () => {
  return (
    <>
      <header>
        <Navigation />
        <AuthNav />
      </header>
    </>
  );
};
