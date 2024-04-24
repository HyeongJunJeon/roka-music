import airforceOffical from "../../public/images/airforce/official.png";
import { CarouselPosts } from "@/components";

const MOCK_DATA = [
  {
    id: 1,
    img: airforceOffical,
    title: "공군가",
    artist: "공군",
  },
  {
    id: 2,
    img: airforceOffical,
    title: "공군가",
    artist: "공군",
  },
  {
    id: 3,
    img: airforceOffical,
    title: "공군가",
    artist: "공군",
  },
  {
    id: 4,
    img: airforceOffical,
    title: "공군가",
    artist: "공군",
  },
  {
    id: 5,
    img: airforceOffical,
    title: "공군가",
    artist: "공군",
  },
  {
    id: 6,
    img: airforceOffical,
    title: "공군가",
    artist: "공군",
  },
  {
    id: 7,
    img: airforceOffical,
    title: "공군가",
    artist: "공군",
  },
];

export default function Home() {
  return (
    <main>
      <article>
        <CarouselPosts
          title={"전형준"}
          subTitle={"다시 듣기"}
          posts={MOCK_DATA}
        />
      </article>
    </main>
  );
}
