"use client";

import { sideBarStore } from "@/stores";
import { IoCompassOutline as CompassIcon } from "react-icons/io5";
import {
  MdHomeFilled as HomeIcon,
  MdOutlineLibraryMusic as LibraryIcon,
} from "react-icons/md";
import IconMenu from "./IconMenu";
import Logo from "./Logo";

export default function SideNavBar() {
  const { isOpen } = sideBarStore();

  //styles
  const asideOpenedStyles =
    "w-full max-w-[240px] h-screen border-r border-r-[#292929] px-2 relative mobile:block mobile:fixed moblie:top-0 moblie:left-0 mobile:bg-primary mobile:animate-fade-right";

  return (
    <aside
      className={`py-3 pl-2 z-10 ${
        isOpen ? asideOpenedStyles : "mobile:hidden"
      }`}
    >
      <article className={`flex flex-col gap-4`}>
        <Logo />
        <section className="w-full flex flex-col">
          <IconMenu icon={HomeIcon} label={"홈"} path="/" />
          <IconMenu icon={CompassIcon} label={"둘러보기"} path="/explore" />
          <IconMenu icon={LibraryIcon} label={"보관함"} path="/library" />
        </section>
      </article>
    </aside>
  );
}
