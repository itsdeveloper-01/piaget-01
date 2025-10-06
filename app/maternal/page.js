import LevelPage from "@/components/sections/LevelPage"; import data from "@/content/levels/maternal.json";
export const metadata = { title: "Instituto Piaget — Maternal" };
export default function Page(){ return <LevelPage data={data} />; }
