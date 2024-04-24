import Image from "next/image";
import TeamFinder from "@/components/TeamFinder/TeamFinder";
import ClubsCarousel from "@/components/ClubsCarousel/ClubsCarousel";

export default function Home() {
  return (
    <main>
      <div className="font-mono flex items-center justify-end p-10 pb-0">
        Developed By
        <Image
          src="/tatag.png"
          alt="Vercel Logo"
          width={70}
          height={70}
          className="ml-3"
        />
      </div>

      <div className="w-full flex flex-col items-center align-center mb-10 h-5/6 p-10">
        <Image
          src="/aw_logo.jpg"
          alt="Vercel Logo"
          width={200}
          height={200}
          className="mb-5 rounded"
        />
        <p className={`mb-1 text-2xl font-semibold`}>ArmWrestling Philippines Club Locator</p>
        <small className={`mb-5`}>Discover clubs nearby that interest you and consider joining them.</small>
        <TeamFinder />
        <ClubsCarousel />
      </div>


    </main>
  );
}
