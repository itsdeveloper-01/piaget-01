import LevelPage from "@/components/sections/LevelPage"; import data from "@/content/levels/kinder.json";
export const metadata = { title: "Instituto Piaget — Kinder" };
export default function Page(){ return <LevelPage data={data} />; }
