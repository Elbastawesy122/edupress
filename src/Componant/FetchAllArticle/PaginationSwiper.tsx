import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ArticleGrid from "./ArticleGrid";
import type Article from "../../apiproject/InterfaceAPI";

import "swiper/css";
import "swiper/css/pagination";

interface PaginationSwiperProps {
  chunks: Article[][];
  isGrid: boolean;
}

const PaginationSwiper: React.FC<PaginationSwiperProps> = ({
  chunks,
  isGrid,
}) => {
  return (
    <>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        className="pagination-swiper w-full"
      >
        {chunks.map((chunk, index) => (
          <SwiperSlide key={index} className="!w-full !h-full">
            <ArticleGrid articles={chunk} isGrid={isGrid} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PaginationSwiper;
