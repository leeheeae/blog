import S from "./list-container.styled.ts";
import { HiOutlineSearch } from "react-icons/hi";
import AddButton from "@/components/blog/add-button.tsx";

function ListContainer() {
  return (
    <S.Container>
      <S.ListTitleWrap>
        <S.ListTileInnerWrap>
          <S.ListTitleTop>
            <S.ListTitle>
              Frontend / <span>JavaScript</span>
            </S.ListTitle>

            <S.ListDescription>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </S.ListDescription>
          </S.ListTitleTop>

          <S.ListTitleBottom>
            <S.SearchInputWrap>
              <input placeholder="검색어를 입력해주세요." />
              <button>
                <HiOutlineSearch size={24} />
              </button>
            </S.SearchInputWrap>

            <S.TotalCountWrap>
              <S.TotalCountItem>
                <h4>Total</h4>
                <p>30</p>
              </S.TotalCountItem>

              <S.Line />

              <S.TotalCountItem>
                <h4>Search</h4>
                <p>12</p>
              </S.TotalCountItem>
            </S.TotalCountWrap>
          </S.ListTitleBottom>
        </S.ListTileInnerWrap>
      </S.ListTitleWrap>

      <AddButton />
    </S.Container>
  );
}

export default ListContainer;
