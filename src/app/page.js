import Image from "next/image";
import HomePanel from "./steps/HomePanel"
import ProjectPanel from "./steps/ProjectPanel";
import OutdoorPanel from "./steps/OutdoorPanel";
import ContactPanel from "./steps/ContactPanel";

export default function Home() {
  return (
    <div className="h-full">
      <HomePanel />

      <ProjectPanel />

      <OutdoorPanel />

      <ContactPanel />
    </div>
  );
}
