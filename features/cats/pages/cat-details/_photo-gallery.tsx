import { FC, MutableRefObject } from "react";
import { Image } from "@chakra-ui/react";
import "photoswipe/dist/photoswipe.css";
import { Gallery, GalleryProps, Item } from "react-photoswipe-gallery";
import { DataSourceArray } from "photoswipe";
import { Cat } from "../../types";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { getPhotoUrl } from "../../util/photos";

interface CatDetailsGalleryProps {
  cat: Cat;
}

// https://dromru.github.io/react-photoswipe-gallery/?path=/docs/demo-custom-ui-elements--thumbnails-in-opened-photoswipe
const uiElements: GalleryProps["uiElements"] = [
  {
    name: "bulletsIndicator",
    order: 9,
    isButton: false,
    appendTo: "wrapper",
    onInit: (el, pswpInstance) => {
      let prevIndex = -1;
      const thumbnails: HTMLElement[] = [];

      el.style.position = "absolute";
      el.style.bottom = "20px";
      el.style.left = "10px";
      el.style.right = "0";
      el.style.display = "grid";
      el.style.gridGap = "10px";
      el.style.gridTemplateColumns = "repeat(auto-fit, 40px)";
      el.style.gridTemplateRows = "repeat(auto-fit, 40px)";
      el.style.justifyContent = "center";

      const dataSource = pswpInstance.options.dataSource as DataSourceArray;

      for (let i = 0; i < dataSource.length; i++) {
        const slideData = dataSource[i];

        const thumbnail = document.createElement("div");
        thumbnail.style.transition = "transform 0.15s ease-in";
        thumbnail.style.opacity = "0.6";
        thumbnail.style.cursor = "pointer";
        thumbnail.onclick = (e: MouseEvent) => {
          const target = e.target as HTMLImageElement | HTMLDivElement;
          const thumbnailEl =
            target.tagName === "IMG"
              ? target.parentElement
              : (e.target as HTMLImageElement | HTMLDivElement);
          pswpInstance.goTo(thumbnails.indexOf(thumbnailEl as HTMLImageElement));
        };

        const thumbnailImage = document.createElement("img");
        thumbnailImage.setAttribute("src", slideData.msrc ?? (slideData.src as string));
        thumbnailImage.style.width = "100%";
        thumbnailImage.style.height = "100%";
        thumbnailImage.style.objectFit = "cover";

        thumbnail.appendChild(thumbnailImage);

        el.appendChild(thumbnail);

        thumbnails.push(thumbnail);
      }

      pswpInstance.on("change", () => {
        if (prevIndex >= 0) {
          const prevThumbnail = thumbnails[prevIndex];
          prevThumbnail.style.opacity = "0.6";
          prevThumbnail.style.cursor = "pointer";
          prevThumbnail.style.transform = "scale(1)";
        }

        const currentThumbnail = thumbnails[pswpInstance.currIndex];
        currentThumbnail.style.opacity = "1";
        currentThumbnail.style.cursor = "unset";
        currentThumbnail.style.transform = "scale(1.2)";

        prevIndex = pswpInstance.currIndex;
      });
    },
  },
];

export const PhotoGallery: FC<CatDetailsGalleryProps> = ({ cat }) => {
  if (cat.photos.length === 0) {
    return null;
  }

  return (
    <Gallery withDownloadButton={true} uiElements={uiElements}>
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        slidesPerGroup={1}
        autoHeight={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
        }}
      >
        {cat.photos.map((photo) => (
          <SwiperSlide key={photo.id}>
            <Item original={getPhotoUrl(photo, "lg")} width="1024" height="1024">
              {({ ref, open }) => (
                <Image
                  ref={ref as MutableRefObject<HTMLImageElement>}
                  onClick={open}
                  src={getPhotoUrl(photo, "sm")}
                  alt={cat.name}
                  cursor="zoom-in"
                  transition="opacity .15s ease-in-out"
                  _hover={{
                    opacity: 0.85,
                  }}
                  width="full"
                />
              )}
            </Item>
          </SwiperSlide>
        ))}
      </Swiper>
    </Gallery>
  );
};
