import { Container } from '@mui/system';

export const PageBody = ({ children }) => (
  <main>
    <Container maxWidth='xs' >
      {children}
    </Container>
  </main>
);