import LevelPage from "@/components/sections/LevelPage"; import data from "@/content/levels/prepa.json";
export const metadata = { title: "Instituto Piaget — Preparatoria" };
export default function Page(){ return <LevelPage data={data} />; }
