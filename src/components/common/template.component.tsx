import Header from "./header.component.tsx";
import { Container } from "./template.styled.tsx";

function Template({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}

export default Template;
