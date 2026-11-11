import { RobotProvider, RobotView } from "@/components/common/robot-view";

import { Features } from "./home/sections/features";
import { Footer } from "./home/sections/footer";
import { Hero } from "./home/sections/hero";
import { Levels } from "./home/sections/levels";
import { Nav } from "./home/sections/nav";
import { Numbers } from "./home/sections/numbers";
import { Packs } from "./home/sections/packs";
import { Statement } from "./home/sections/statement";
import { BackgroundVideo } from "./home/ui/background-video";

/**
 * Home view — the Mastering English Library landing page: a black-and-lime
 * look (after the GetLayers "Relay" reference) over the calm "Stone Arch"
 * background loop. A Server Component; the motion lives in client leaves.
 */
export const HomeView = ({ robot = false }: { robot?: boolean }) => {
  return (
    <RobotProvider robot={robot}>
      {robot && <RobotView />}
      <BackgroundVideo />
      <Nav />
      <main className="relative z-10 w-full pt-[5.5rem] max-[900px]:pt-16">
        <Hero />
        <Levels />
        <Features />
        <Statement />
        <Numbers />
        <Packs />
        <Footer />
      </main>
    </RobotProvider>
  );
};
