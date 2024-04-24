import { StaticImageData } from "next/image";

export type PostType = {
  id: number;
  img: StaticImageData;
  title: string;
  artist: string;
};
