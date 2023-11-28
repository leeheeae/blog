import Template from "@/components/common/template.component.tsx";
import SkillFilter from "@/components/work/SkillFilter.component";
import WorkGrid from "@/components/work/WorkGrid.component";

/**
 * @title Work List Page
 * @returns
 */
function WorkPage() {
  return (
    <Template>
      <WorkGrid>
        <SkillFilter />
      </WorkGrid>
      Work.page
    </Template>
  );
}

export default WorkPage;
