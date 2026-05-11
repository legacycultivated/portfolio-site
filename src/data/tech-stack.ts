export type TechStackGroup = {
  category: string;
  items: string[];
};

export const techStack: TechStackGroup[] = [
  {
    category: "Framework",
    items: ["Next.js", "React"],
  },
  {
    category: "Language",
    items: ["TypeScript"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "shadcn/ui"],
  },
  {
    category: "Tooling",
    items: ["GitHub", "Vercel"],
  },
];
