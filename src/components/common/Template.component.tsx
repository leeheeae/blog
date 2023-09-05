import Header from "./Header.component";
import { Container } from "./Template.styled";

function Template({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}

export default Template;
