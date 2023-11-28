import { blogCategories } from "@/constants/blog-categories";
import * as S from "./Sidebar.style";

function Sidebar() {
  return (
    <S.SideBarWrapper>
      <S.SideBarTitle>Categories</S.SideBarTitle>

      <S.SideBarCategoryWrapper>
        {blogCategories.map((category) => (
          <S.SideBarCategory key={`category-${category.id}`}>
            <S.SideBarCategoryName>{category.name}</S.SideBarCategoryName>
            <S.SideBarCategoryDepth>
              {category.depth?.map((subCategory) => (
                <S.SideBarCategoryDepthItem key={`category-${category.id}-${subCategory.id}`}>
                  {subCategory.name}
                </S.SideBarCategoryDepthItem>
              ))}
            </S.SideBarCategoryDepth>
          </S.SideBarCategory>
        ))}
      </S.SideBarCategoryWrapper>
    </S.SideBarWrapper>
  );
}

export default Sidebar;
