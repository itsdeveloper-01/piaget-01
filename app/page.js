import HeroVideo from "@/components/sections/HeroVideo";
import Levels from "@/components/sections/Levels";
import Activities from "@/components/sections/Activities";
import About from "@/components/sections/About";
import Social from "@/components/sections/Social";
import Contact from "@/components/sections/Contact";

export default function Page(){
  return (<>
    <HeroVideo/>
    <About/>
    <Levels/>
    <Activities/>
    <Social/>
    <Contact/>
  </>);
}
