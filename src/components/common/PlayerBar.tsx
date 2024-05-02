import { MdSkipPrevious as PrevIcon } from "react-icons/md";
import { MdSkipNext as NextIcon } from "react-icons/md";
import { IoMdPlay as PlayIcon } from "react-icons/io";
import { IoPauseSharp as PauseIcon } from "react-icons/io5";
import { BiDislike as DislikeIcon } from "react-icons/bi";
import { BiLike as LikeIcon } from "react-icons/bi";
import { CiMenuKebab as OptionIcon } from "react-icons/ci";
import { IoMdVolumeHigh as VolumnIcon } from "react-icons/io";
import { LiaRandomSolid as RandomIcon } from "react-icons/lia";
import { IoMdRepeat as RepeatIcon } from "react-icons/io";
import { MdOutlineRepeatOne as RepeatOnceIcon } from "react-icons/md";
import { RxTriangleUp as arrowUpIcon } from "react-icons/rx";
import { RxTriangleDown as arrowDownIcon } from "react-icons/rx";

export default function PlayerBar() {
  return (
    <section className=" bg-secondary w-screen fixed left-0 bottom-0">
      <div>
        playBar
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}
