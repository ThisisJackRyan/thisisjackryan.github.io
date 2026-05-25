import HomePanel from "./steps/HomePanel";
import ProjectPanel from "./steps/ProjectPanel";
import OutdoorPanel from "./steps/OutdoorPanel";
import ContactPanel from "./steps/ContactPanel";

export default function Home() {
  return (
    <main className="relative h-dvh overflow-y-scroll snap-y snap-mandatory scroll-smooth max-w-full overflow-x-hidden scrollbar-hidden">
      {/* Layered background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-grid" />
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-vignette" />

      <HomePanel />
      <ProjectPanel />
      <OutdoorPanel />
      <ContactPanel />
    </main>
  );
}
