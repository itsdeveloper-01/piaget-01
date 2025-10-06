import InfoPage from "@/components/sections/InfoPage"; import data from "@/content/pages/menu1.json";
export const metadata = { title: "Instituto Piaget — Lenguajes" };
export default function Page(){ return <InfoPage data={data} />; }
