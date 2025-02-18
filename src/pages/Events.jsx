import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useState } from "react";
import ImageCarousel from "../ui/ImageCarousel";

const Events = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(
        location.hash.substring(1),
      );
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location]);

  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const galleryImages = [
    "/Photos/kantina-vodno-4.JPG",
    "/Photos/cela prikolka so lugje od daleku.jpg",
    "/Photos/kokteli so cocktail bar znak.jpg",
    "/Photos/kantina-vodno-44.JPG",
    "/Photos/aperoli so cocktail bar znak.jpg",
    "/Photos/kantina-vodno-72.JPG",
    "/Photos/kantina-vodno-56.JPG",
  ];

  const handleImageClick = (imgPath) => {
    const index = galleryImages.indexOf(imgPath);
    if (index !== -1) {
      setSelectedImageIndex(index);
      setIsCarouselOpen(true);
    }
  };

  return (
    <div className="bg-[#EFE8DB] overflow-x-hidden">
      {/* Top Section */}
      <div
        className="w-full h-96 bg-cover bg-center text-[#EFE8DB] flex items-center
          justify-center text-5xl md:text-7xl font-bold"
        style={{
          backgroundImage: "url('/Photos/kantina-vodno-56.JPG')",
        }}
      >
        Настани
      </div>

      {/* Section 1 - Private */}
      <div
        id="privatni"
        className="flex flex-col md:flex-row items-start px-4 md:px-4 lg:px-8 xl:px-12
          2xl:px-20 gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 py-4 md:py-5
          lg:py-6 xl:py-8 2xl:py-10"
      >
        <div className="w-full md:w-2/5 flex flex-col items-start">
          <div
            className="bg-[#77846E] text-[#EFE8DB] rounded-br-3xl md:rounded-br-4xl px-6
              md:px-8 lg:px-10 xl:px-12 py-4 md:py-5 lg:py-6 text-2xl md:text-3xl
              lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold w-full
              md:w-[calc(100%+2rem)] lg:w-[calc(100%+3rem)] -ml-4 md:-ml-8 lg:-ml-12
              xl:-ml-16 2xl:-ml-20 transition-all duration-300"
          >
            Приватни
          </div>
          <div
            className="relative overflow-hidden rounded-2xl md:rounded-3xl w-full
              aspect-[4/3] mt-4 md:mt-6 lg:mt-8 cursor-pointer"
            onClick={() =>
              handleImageClick("/Photos/kantina-vodno-4.JPG")
            }
          >
            <img
              src="/Photos/kantina-vodno-4.JPG"
              alt="Приватни"
              className="w-full h-full object-cover object-top"
            />
            <div
              className="absolute inset-0 bg-black/30 flex items-center justify-center
                hover:bg-black/40 transition-all duration-300"
            >
              <p
                className="text-[#EFE8DB] text-xl md:text-2xl lg:text-3xl xl:text-4xl
                  2xl:text-5xl font-semibold px-2 text-center"
              >
                Види Галерија
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/5 pt-4 md:pt-8 lg:pt-12 px-2 md:px-0">
          <p
            className="text-[#77846E] text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl
              leading-relaxed md:leading-relaxed tracking-tight md:tracking-normal
              text-right"
          >
            Од <strong>роденден</strong> до <strong>фестивал</strong>,
            <br className="hidden md:block" /> нашиот трејлер бар е
            спремен
            <br className="hidden md:block" /> да ја претвори твојата
            приватна
            <br className="hidden md:block" /> забава во{" "}
            <strong>вистинска журка</strong>.
            <br className="hidden md:block" /> Остави ги твоите гости
            без
            <br className="hidden md:block" /> зборови со
            персонализирано
            <br className="hidden md:block" /> мени со коктели од вас
            за
            <br className="hidden md:block" /> сите добредојдени.
          </p>
        </div>
      </div>

      {/* Section 2 - Celebrations */}
      <div
        id="proslavi"
        className="flex flex-col md:flex-row-reverse items-start px-4 md:px-4 lg:px-8
          xl:px-12 2xl:px-20 gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 py-4
          md:py-5 lg:py-6 xl:py-8 2xl:py-10"
      >
        <div className="w-full md:w-2/5 flex flex-col items-end">
          <div
            className="bg-[#77846E] text-[#EFE8DB] rounded-tl-3xl md:rounded-tl-4xl
              rounded-bl-3xl md:rounded-bl-4xl px-6 md:px-8 lg:px-10 xl:px-12 py-4
              md:py-5 lg:py-6 text-2xl md:text-3xl lg:text-4xl xl:text-5xl
              2xl:text-6xl font-semibold w-full md:w-[calc(100%+2rem)]
              lg:w-[calc(100%+3rem)] -mr-4 md:-mr-8 lg:-mr-12 xl:-mr-16 2xl:-mr-20
              transition-all duration-300"
          >
            Прослави
          </div>
          <div
            className="relative overflow-hidden rounded-2xl md:rounded-3xl w-full
              aspect-[4/3] mt-4 md:mt-6 lg:mt-8 cursor-pointer"
            onClick={() =>
              handleImageClick(
                "/Photos/cela prikolka so lugje od daleku.jpg",
              )
            }
          >
            <img
              src="/Photos/cela prikolka so lugje od daleku.jpg"
              alt="Прослави"
              className="w-full h-full object-cover object-top"
            />
            <div
              className="absolute inset-0 bg-black/30 flex items-center justify-center
                hover:bg-black/40 transition-all duration-300"
            >
              <p
                className="text-[#EFE8DB] text-xl md:text-2xl lg:text-3xl xl:text-4xl
                  2xl:text-5xl font-semibold px-2 text-center"
              >
                Види Галерија
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/5 pt-4 md:pt-8 lg:pt-12 px-2 md:px-0">
          <p
            className="text-[#77846E] text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl
              leading-relaxed md:leading-relaxed tracking-tight md:tracking-normal
              text-left"
          >
            Од <strong>роденден</strong> до <strong>фестивал</strong>,
            <br className="hidden md:block" /> нашиот трејлер бар е
            спремен
            <br className="hidden md:block" /> да ја претвори твојата
            приватна
            <br className="hidden md:block" /> забава во{" "}
            <strong>вистинска журка</strong>.
            <br className="hidden md:block" /> Остави ги твоите гости
            без
            <br className="hidden md:block" /> зборови со
            персонализирано
            <br className="hidden md:block" /> мени со коктели од вас
            за
            <br className="hidden md:block" /> сите добредојдени.
          </p>
        </div>
      </div>

      {/* Section 3 - Weddings */}
      <div
        id="svadbi"
        className="flex flex-col md:flex-row items-start px-4 md:px-4 lg:px-8 xl:px-12
          2xl:px-20 gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 py-4 md:py-5
          lg:py-6 xl:py-8 2xl:py-10"
      >
        <div className="w-full md:w-2/5 flex flex-col items-start">
          <div
            className="bg-[#77846E] text-[#EFE8DB] rounded-br-3xl md:rounded-br-4xl
              rounded-tr-3xl md:rounded-tr-4xl px-6 md:px-8 lg:px-10 xl:px-12 py-4
              md:py-5 lg:py-6 text-2xl md:text-3xl lg:text-4xl xl:text-5xl
              2xl:text-6xl font-semibold w-full md:w-[calc(100%+2rem)]
              lg:w-[calc(100%+3rem)] -ml-4 md:-ml-8 lg:-ml-12 xl:-ml-16 2xl:-ml-20
              transition-all duration-300"
          >
            Свадби
          </div>
          <div
            className="relative overflow-hidden rounded-2xl md:rounded-3xl w-full
              aspect-[4/3] mt-4 md:mt-6 lg:mt-8 cursor-pointer"
            onClick={() =>
              handleImageClick("/Photos/kantina-vodno-72.JPG")
            }
          >
            <img
              src="/Photos/kantina-vodno-72.JPG"
              alt="Свадби"
              className="w-full h-full object-cover object-top"
            />
            <div
              className="absolute inset-0 bg-black/30 flex items-center justify-center
                hover:bg-black/40 transition-all duration-300"
            >
              <p
                className="text-[#EFE8DB] text-xl md:text-2xl lg:text-3xl xl:text-4xl
                  2xl:text-5xl font-semibold px-2 text-center"
              >
                Види Галерија
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/5 pt-4 md:pt-8 lg:pt-12 px-2 md:px-0">
          <p
            className="text-[#77846E] text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl
              leading-relaxed md:leading-relaxed tracking-tight md:tracking-normal
              text-right"
          >
            Од <strong>роденден</strong> до <strong>фестивал</strong>,
            <br className="hidden md:block" /> нашиот трејлер бар е
            спремен
            <br className="hidden md:block" /> да ја претвори твојата
            приватна
            <br className="hidden md:block" /> забава во{" "}
            <strong>вистинска журка</strong>.
            <br className="hidden md:block" /> Остави ги твоите гости
            без
            <br className="hidden md:block" /> зборови со
            персонализирано
            <br className="hidden md:block" /> мени со коктели од вас
            за
            <br className="hidden md:block" /> сите добредојдени.
          </p>
        </div>
      </div>

      {/* Section 4 - Corporate */}
      <div
        id="korporativni"
        className="flex flex-col md:flex-row-reverse items-start px-4 md:px-4 lg:px-8
          xl:px-12 2xl:px-20 gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 py-4
          md:py-5 lg:py-6 xl:py-8 2xl:py-10"
      >
        <div className="w-full md:w-2/5 flex flex-col items-end">
          <div
            className="bg-[#77846E] text-[#EFE8DB] rounded-tl-3xl md:rounded-tl-4xl
              rounded-bl-3xl md:rounded-bl-4xl px-6 md:px-8 lg:px-10 xl:px-12 py-4
              md:py-5 lg:py-6 text-2xl md:text-3xl lg:text-4xl xl:text-5xl
              2xl:text-6xl font-semibold w-full md:w-[calc(100%+2rem)]
              lg:w-[calc(100%+3rem)] -mr-4 md:-mr-8 lg:-mr-12 xl:-mr-16 2xl:-mr-20
              transition-all duration-300"
          >
            Корпоративни
          </div>
          <div
            className="relative overflow-hidden rounded-2xl md:rounded-3xl w-full
              aspect-[4/3] mt-4 md:mt-6 lg:mt-8 cursor-pointer"
            onClick={() =>
              handleImageClick(
                "/Photos/cela prikolka so lugje od daleku.jpg",
              )
            }
          >
            <img
              src="/Photos/cela prikolka so lugje od daleku.jpg"
              alt="Корпоративни"
              className="w-full h-full object-cover object-top"
            />
            <div
              className="absolute inset-0 bg-black/30 flex items-center justify-center
                hover:bg-black/40 transition-all duration-300"
            >
              <p
                className="text-[#EFE8DB] text-xl md:text-2xl lg:text-3xl xl:text-4xl
                  2xl:text-5xl font-semibold px-2 text-center"
              >
                Види Галерија
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/5 pt-4 md:pt-8 lg:pt-12 px-2 md:px-0">
          <p
            className="text-[#77846E] text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl
              leading-relaxed md:leading-relaxed tracking-tight md:tracking-normal
              text-left"
          >
            Од <strong>роденден</strong> до <strong>фестивал</strong>,
            <br className="hidden md:block" /> нашиот трејлер бар е
            спремен
            <br className="hidden md:block" /> да ја претвори твојата
            приватна
            <br className="hidden md:block" /> забава во{" "}
            <strong>вистинска журка</strong>.
            <br className="hidden md:block" /> Остави ги твоите гости
            без
            <br className="hidden md:block" /> зборови со
            персонализирано
            <br className="hidden md:block" /> мени со коктели од вас
            за
            <br className="hidden md:block" /> сите добредојдени.
          </p>
        </div>
      </div>

      {isCarouselOpen && (
        <ImageCarousel
          images={galleryImages}
          initialIndex={selectedImageIndex}
          onClose={() => setIsCarouselOpen(false)}
        />
      )}
    </div>
  );
};

export default Events;
