import { MultiCarousel, PostCard } from "@/components";
import { PostType } from "@/types/\bpost";

interface ICarouselPosts {
  title: string;
  subTitle: string;
  posts: PostType[];
}

export default function CarouselPosts({
  title,
  subTitle,
  posts,
}: ICarouselPosts) {
  return (
    <section>
      <div>
        <p className="text-gray">{title}</p>
        <h2>{subTitle}</h2>
      </div>

      <div className="relative">
        <MultiCarousel>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </MultiCarousel>
      </div>
    </section>
  );
}
