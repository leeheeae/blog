/**
 * @title 블로그 카테고리 아이템 타입
 */
export type BlogCategory = {
  id: number;
  name: string;
  depth?: BlogCategory[];
};
