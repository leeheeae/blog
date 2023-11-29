import { useNavigate } from "react-router-dom";
import S from "./add-button.styled.ts";
import { MdAdd } from "react-icons/md";

function AddButton() {
  const navigate = useNavigate();
  const onClickRedirectToWritePage = () => {
    navigate("/blog/write");
  };

  return (
    <S.AddButton onClick={onClickRedirectToWritePage}>
      <MdAdd size={24} />
      <S.AddButtonLabel>등록하기</S.AddButtonLabel>
    </S.AddButton>
  );
}

export default AddButton;
