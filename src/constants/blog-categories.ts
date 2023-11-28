import { TypeBlogCategories } from "@/types/blog-categories.type";

export const blogCategories: TypeBlogCategories = [
  {
    id: 0,
    name: "Frontend",
    depth: [
      {
        id: 0,
        name: "JavaScript"
      },
      {
        id: 1,
        name: "TypeScript"
      },
      { id: 2, name: "React" },
      { id: 3, name: "Next" },
      { id: 4, name: "React Native" },
      { id: 5, name: "Vue" }
    ]
  },
  {
    id: 1,
    name: "Backend",
    depth: [
      { id: 0, name: "Node" },
      { id: 1, name: "Express" },
      { id: 2, name: "Nest" }
    ]
  }
];
