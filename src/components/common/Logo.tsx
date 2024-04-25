import { sideBarStore } from "@/stores";
import Link from "next/link";
import { FiMenu as MenuIcon } from "react-icons/fi";
import { SiYoutubemusic as MainIcon } from "react-icons/si";

export default function Logo() {
  const { toggleSideBar } = sideBarStore();
  return (
    <section className="flex items-center gap-5 ml-2">
      <div className="p-2 rounded-full hover:bg-secondary opacity-80 cursor-pointer">
        <MenuIcon
          style={{ width: "22px", height: "22px" }}
          onClick={toggleSideBar}
        />
      </div>
      <Link href={"/"} className="flex items-center gap-1 text-xl text-nowrap">
        <MainIcon
          style={{
            width: "24px",
            height: "24px",
            cursor: "pointer",
            color: "red",
          }}
        />
        ROKA-Music
      </Link>
    </section>
  );
}
