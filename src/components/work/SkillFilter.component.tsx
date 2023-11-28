import { skills } from "@/constants/skills";
import {
  Categories,
  CategoriesContainer,
  CategoriesItem,
  Category,
  ContentsSubTitle,
  ContentsTitle
} from "./SkillFilter.styled";
import { useState } from "react";
import { SkillFilterProps, SkillKeys } from "@/types/skills.type";

/**
 * @title Skill Category Filter Component
 * @returns
 */
function SkillFilter() {
  const [activeSkillIds, setActiveSkillIds] = useState<SkillFilterProps[]>([
    { key: "Design", ids: [] },
    { key: "Markup/Styling", ids: [] },
    { key: "Web", ids: [] },
    { key: "App", ids: [] },
    { key: "Backend", ids: [] }
  ]);

  /**
   * @title 스킬을 클릭했을 때 실행할 함수
   * @param skillKey : 스킬 키
   * @param categoryIndex : 카테고리 인덱스
   * @returns
   */
  const handleSkillClick = (skillKey: SkillKeys, categoryIds: number | null) => {
    // 카테고리 인덱스가 없을 경우 전체를 선택한 것이므로 모든 카테고리 인덱스를 초기화
    if (categoryIds === null) {
      const updateIds = activeSkillIds.map((item) => (item.key === skillKey ? { ...item, ids: [] } : item));
      setActiveSkillIds(updateIds);
    } else {
      // 카테고리 인덱스가 있을 경우 해당 카테고리 인덱스를 추가하거나 제거
      const updateIds = activeSkillIds.map((item) =>
        item.key === skillKey
          ? {
              ...item,
              ids: item.ids.includes(categoryIds)
                ? item.ids.filter((id) => id !== categoryIds)
                : [...item.ids, categoryIds]
            }
          : item
      );
      setActiveSkillIds(updateIds);
    }
  };

  return (
    <CategoriesContainer>
      {/* Skills */}
      <ContentsTitle>Skills</ContentsTitle>
      {skills.map((skill) => {
        const targetSkillIndex = activeSkillIds.findIndex((item) => item.key === skill.key);

        return (
          <CategoriesItem key={`skill-${skill.key}`}>
            <ContentsSubTitle>{skill.key}</ContentsSubTitle>
            <Categories>
              <Category
                onClick={() => handleSkillClick(skill.key, null)}
                $isActive={activeSkillIds[targetSkillIndex].ids.length === 0}
              >
                All
              </Category>

              {skill.list?.map((item) => {
                const isActive = activeSkillIds[targetSkillIndex].ids?.includes(item.id);

                return (
                  <Category
                    key={`skill-${skill.key}-${item.id}`}
                    onClick={() => handleSkillClick(skill.key, item.id)}
                    $isActive={isActive}
                  >
                    {item.name}
                  </Category>
                );
              })}
            </Categories>
          </CategoriesItem>
        );
      })}
    </CategoriesContainer>
  );
}

export default SkillFilter;
