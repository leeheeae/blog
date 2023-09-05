export type SkillActiveIndexProps = {
  key: string;
  indexes: number[] | null[];
};

export type SkillKeys =
  | "Design"
  | "Markup/Styling"
  | "Web"
  | "App"
  | "Backend"
  | "Database"
  | "Others";

export type SkillListItem = {
  id: number;
  name: string;
};

export type SkillList = SkillListItem[];

export type TypeSkills = { key: SkillKeys; list: SkillList }[];

export type SkillFilterProps = { key: SkillKeys; ids: number[] };
