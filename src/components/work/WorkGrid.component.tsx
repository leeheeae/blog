import { InnerContents, WorkGridContainer } from "./WorkGrid.styled";

function WorkGrid({ children }: { children?: React.ReactNode }) {
  return (
    <WorkGridContainer>
      <InnerContents>{children}</InnerContents>
    </WorkGridContainer>
  );
}

export default WorkGrid;
