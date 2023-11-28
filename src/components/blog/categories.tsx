import { useCallback, useState } from "react";
import S from "./categories.styled.ts";
import { blog_categories } from "@/constants/blog_categories.ts";
import { BlogCategory } from "@/types/blog_categories.type.ts";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";

function Category({ node, isFirst = false }: { node: BlogCategory; isFirst?: boolean }) {
  const [isOpen, setIsOpen] = useState(true);

  const onToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <S.CategoryItem isFirst={isFirst}>
      <S.CategoryTitle isFirst={isFirst} onClick={onToggle}>
        {isFirst ? (isOpen ? "📂" : "📁️") : "🗂️"}
        {node.name}
      </S.CategoryTitle>
      {/* 카테고리 탭 open 상태에 따라 설정 */}
      {isOpen && node.depth?.map((item) => <Category node={item} />)}
    </S.CategoryItem>
  );
}

function Categories() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);

  const onToggleCategory = useCallback(() => {
    setIsCategoryOpen((prev) => !prev);
  }, []);

  return (
    <S.Container>
      <S.ToggleCategoryButton onClick={onToggleCategory}>
        {isCategoryOpen ? <HiOutlineChevronLeft size={28} /> : <HiOutlineChevronRight size={28} />}
      </S.ToggleCategoryButton>

      <S.Contents isCategoryOpen={isCategoryOpen}>
        <S.SideBarTitle>Category</S.SideBarTitle>

        {/* isCategoryOpen 상태에 따라 카테고리 보여주기 */}
        {isCategoryOpen &&
          blog_categories.map((blog_category: BlogCategory) => (
            <Category key={blog_category.id} node={blog_category} isFirst />
          ))}
      </S.Contents>
    </S.Container>
  );
}

export default Categories;
