import Image from "next/image";
import Components from "@/components/index"
export default function Home() {
  return (
    <div className="">
      <Components.Navbar />
      <Components.Hero_section />
      <Components.ServiceSection />
    </div>
  );
}
