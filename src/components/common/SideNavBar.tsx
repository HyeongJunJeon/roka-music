"use client";

import { FiMenu as MenuIcon } from "react-icons/fi";
import { SiYoutubemusic as MainIcon } from "react-icons/si";
import { MdHomeFilled as HomeIcon } from "react-icons/md";
import { IoCompassOutline as CompassIcon } from "react-icons/io5";
import { MdOutlineLibraryMusic as LibraryIcon } from "react-icons/md";
import IconMenu from "./IconMenu";
import { sideBarStore } from "@/stores";
import Link from "next/link";

export default function SideNavBar() {
  const { isOpen, toggleSideBar } = sideBarStore();

  //styles
  const iconSize = { width: "24px", height: "24px", cursor: "pointer" };
  const asideOpenedStyles =
    "w-full max-w-[240px] border-r border-r-[#292929] px-2";

  return (
    <aside className={`py-3 pl-2 ${isOpen && asideOpenedStyles}`}>
      <article className={`flex flex-col gap-4`}>
        <section className="flex items-center gap-5 ml-2">
          <div className="p-2 rounded-full hover:bg-secondary opacity-80 cursor-pointer">
            <MenuIcon
              style={{ width: "22px", height: "22px" }}
              onClick={toggleSideBar}
            />
          </div>
          <Link
            href={"/"}
            className="flex items-center gap-1 text-xl text-nowrap"
          >
            <MainIcon style={{ ...iconSize, color: "red" }} />
            ROKA-Music
          </Link>
        </section>
        <section className="w-full flex flex-col">
          <IconMenu icon={HomeIcon} label={"홈"} path="/" />
          <IconMenu icon={CompassIcon} label={"둘러보기"} path="/explore" />
          <IconMenu icon={LibraryIcon} label={"보관함"} path="/library" />
        </section>
      </article>
    </aside>
  );
}
