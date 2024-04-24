"use client";

import { sideBarStore } from "@/stores";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

interface IIconMemu {
  icon: React.ComponentType<any>;
  label: string;
  path: string;
}

export default function IconMenu({
  icon: IconComponent,
  label,
  path,
}: IIconMemu) {
  const { isOpen: isOpenSideBar } = sideBarStore();

  //activePath
  const segment = useSelectedLayoutSegment();
  const activePath = segment === null ? "/" : `/${segment}`;

  //styles
  const commonStyles = `w-[56px] flex items-center gap-1 hover:bg-secondary opacity-80 rounded-md ${
    path === activePath && "bg-secondary"
  }`;
  const iconSize = { width: "24px", height: "24px", cursor: "pointer" };

  return isOpenSideBar ? (
    <Link
      href={path}
      className={`${commonStyles} w-full gap-6 justify-start pl-4 h-[50px]`}
    >
      <IconComponent style={{ ...iconSize }} />
      <span className="text-[16px]">{label}</span>
    </Link>
  ) : (
    <Link
      href={path}
      className={`${commonStyles} flex-col justify-center  h-[65px]`}
    >
      <IconComponent style={{ ...iconSize }} />
      <span className="text-[10px]">{label}</span>
    </Link>
  );
}
