import S from "../../components/blog/write-container.styled.ts";
import Editor from "@/components/blog/editor.tsx";

function WritePage() {
  return (
    <S.Container>
      <Editor />
    </S.Container>
  );
}

export default WritePage;
