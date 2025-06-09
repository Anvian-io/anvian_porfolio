import Image from "next/image";
import Components from "@/components/index"
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Components.Navbar />
      <Components.Hero_section />
      <Components.ServiceSection />
      <Components.PastProjects />
      <Components.FeedbackSection />
    </div>
  );
}
