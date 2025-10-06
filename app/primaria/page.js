import LevelPage from "@/components/sections/LevelPage"; import data from "@/content/levels/primaria.json";
export const metadata = { title: "Instituto Piaget — Primaria" };
export default function Page(){ return <LevelPage data={data} />; }
