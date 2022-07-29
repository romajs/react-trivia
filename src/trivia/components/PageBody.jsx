import { Container } from '@mui/system';
import { Fireworks } from '@fireworks-js/react';

const fireworksStyles = {
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  zIndex: '-1',
};

export const PageBody = ({ children, fireworks = false }) => (
  <main>
    <Container maxWidth="xs">
      {fireworks && <Fireworks options={{ opacity: 0.5 }} style={fireworksStyles} />}
      {children}
    </Container>
  </main>
);
