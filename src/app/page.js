import Image from "next/image";
import HomePanel from "./steps/HomePanel"
import ProjectPanel from "./steps/ProjectPanel";
import OutdoorPanel from "./steps/OutdoorPanel";
import ContactPanel from "./steps/ContactPanel";

export default function Home() {
  return (
    <div className="h-dvh overflow-y-scroll snap-y snap-mandatory scroll-smooth max-w-full overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
      <HomePanel />

      <ProjectPanel />

      <OutdoorPanel />

      <ContactPanel />
    </div>
  );
}
