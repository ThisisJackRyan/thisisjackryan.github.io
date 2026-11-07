import HomePanel from "./steps/HomePanel";
import ServicesPanel from "./steps/ServicesPanel";
import ProjectPanel from "./steps/ProjectPanel";
import OutdoorPanel from "./steps/OutdoorPanel";
import ContactPanel from "./steps/ContactPanel";

export default function Home() {
  return (
    <main id="main-content" className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
      <HomePanel />
      <ServicesPanel />
      <ProjectPanel />
      <OutdoorPanel />
      <ContactPanel />
    </main>
  );
}
