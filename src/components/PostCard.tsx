import Image from "next/image";

import { IoMdPlay as PlayIcon } from "react-icons/io";
import Link from "next/link";
import { PostType } from "@/types/\bpost";

export default function PostCard({ post }: { post: PostType }) {
  const { id, img, title, artist } = post;

  return (
    <Link href={"/"}>
      <div className="relative w-full hover:opacity-80">
        <PlayIcon
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            color: "black",
          }}
        />
        <Image src={img} alt="airforceOffical" draggable={false} />
      </div>
      <h4 className="mt-3">{title + id}</h4>
      <p className="text-gray">{artist}</p>
    </Link>
  );
}
