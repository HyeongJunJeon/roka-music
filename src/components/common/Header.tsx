"use client";

import { IoIosSearch as SearchIcon } from "react-icons/io";
import { FaRegUserCircle as UserIcon } from "react-icons/fa";
import Logo from "./Logo";

export default function Header() {
  const iconSize = { width: "24px", height: "24px", cursor: "pointer" };

  return (
    <header className="flex-1 flex items-center justify-between py-3">
      <div className="desktop:hidden">
        <Logo />
      </div>
      <div className="relative w-full max-w-[480px] border border-solid rounded-lg border-[#515559] overflow-hidden mobile:invisible">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <SearchIcon
            style={{ width: "20px", height: "20px", color: "#515559" }}
          />
        </span>
        <input
          type="text"
          className="block  w-full pl-14 pr-3 py-2 bg-[#2D3136] focus:outline-none"
          placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
        />
      </div>
      <div className="absolute right-24 mobile:right-4">
        <UserIcon style={{ ...iconSize }} />
      </div>
    </header>
  );
}
