import S from "./add-button.styled.ts";
import { MdAdd } from "react-icons/md";

function AddButton() {
  return (
    <S.AddButton>
      <MdAdd size={24} />
      <S.AddButtonLabel>등록하기</S.AddButtonLabel>
    </S.AddButton>
  );
}

export default AddButton;
