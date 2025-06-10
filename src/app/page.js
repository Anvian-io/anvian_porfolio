import Image from "next/image";
import Components from "@/components/index"
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Components.Navbar />
      <div id="home">
        <Components.Hero_section />
      </div>
      <div id="services">
        <Components.ServiceSection />
      </div>
      <div id="projects">
        <Components.PastProjects />
      </div>
      <div id="feedback">
        <Components.FeedbackSection />
      </div>
      <div id="contact">
        <Components.ContactUs />
      </div>
      <Components.Footer />
    </div>
  );
}
