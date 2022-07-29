import { Container } from '@mui/system';
import { Fireworks } from '@fireworks-js/react';

export const PageBody = ({ children, fireworks = false }) => (
  <main>
    <Container maxWidth='xs' >
      {fireworks && (
        <Fireworks
          options={{ opacity: 0.5 }}
          style={{
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            zIndex: '-1',
          }}
        />
      )}
      {children}
    </Container>
  </main>
);