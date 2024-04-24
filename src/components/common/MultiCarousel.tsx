"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { IoIosArrowDropleft as LeftIcon } from "react-icons/io";
import { IoIosArrowDropright as RightIcon } from "react-icons/io";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    partialVisibilityGutter: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    partialVisibilityGutter: 10,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    partialVisibilityGutter: 10,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    partialVisibilityGutter: 10,
  },
};

type Props = {
  children: React.ReactNode;
};

export default function MultiCarousel({ children }: Props) {
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
    const {
      carouselState: { currentSlide, slidesToShow, totalItems },
    } = rest;
    const isFirstIndex = currentSlide === 0;
    const isLastIndex = currentSlide + slidesToShow === totalItems;
    const disabledStyles = "opacity-40 cursor-default";

    return (
      <div className="carousel-button-group gap-4 flex justify-end items-center absolute right-0 -top-8">
        <button
          className={`absolute -left-16 ${isFirstIndex ? disabledStyles : ""} `}
          onClick={() => previous()}
        >
          <LeftIcon style={{ color: "white", width: "30px", height: "30px" }} />
        </button>
        <button
          className={`absolute right-0 ${isLastIndex ? disabledStyles : ""}`}
          onClick={() => next()}
        >
          <RightIcon style={{ width: "30px", height: "30px" }} />
        </button>
      </div>
    );
  };

  return (
    <Carousel
      responsive={responsive}
      arrows={false}
      customButtonGroup={<ButtonGroup />}
      itemClass="pr-3"
      renderButtonGroupOutside
      partialVisible={true}
    >
      {children}
    </Carousel>
  );
}
