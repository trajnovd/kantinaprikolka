import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

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
    "/Photos/kantina-vodno-4.webp",
    "/Photos/cela prikolka so lugje od daleku.webp",
    "/Photos/kokteli so cocktail bar znak.webp",
    "/Photos/kantina-vodno-44.webp",
    "/Photos/aperoli so cocktail bar znak.webp",
    "/Photos/kantina-vodno-72.webp",
    "/Photos/kantina-vodno-56.webp",
  ];

  const handleImageClick = (imgPath) => {
    const index = galleryImages.indexOf(imgPath);
    if (index !== -1) {
      setSelectedImageIndex(index);
      setIsCarouselOpen(true);
    }
  };

  return (
    <div className="bg-[#EFE8DB] overflow-x-hidden pt-16">
      {/* Top Section */}
      <motion.section
        className="relative w-full h-96 overflow-hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Image Container */}
        <motion.div className="absolute inset-0">
          <motion.img
            src="/Photos/kantina-vodno-56.webp"
            alt="Events Background"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Content Overlay */}
        <div className="relative h-full flex items-center justify-center text-[#EFE8DB]">
          <motion.h1
            className="text-5xl md:text-7xl font-bold z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Настани
          </motion.h1>
        </div>
      </motion.section>

      {/* Section 1 - Private */}
      <section
        id="privatni"
        className="flex flex-col md:flex-row items-start px-4 md:px-4 lg:px-8 xl:px-12
          2xl:px-20 gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 pb-4 md:pb-5
          lg:pb-6 xl:pb-8 2xl:pb-10"
      >
        <article className="w-full md:w-2/5 flex flex-col items-start">
          <motion.h2
            className="bg-[#77846E] text-[#EFE8DB] rounded-br-3xl md:rounded-br-4xl px-6
              md:px-8 lg:px-10 xl:px-12 py-4 md:py-5 lg:py-6 text-2xl md:text-3xl
              lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold w-full
              md:w-[calc(100%+2rem)] lg:w-[calc(100%+3rem)] -ml-4 md:-ml-8 lg:-ml-12
              xl:-ml-16 2xl:-ml-20"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-20%" }}
          >
            Приватни
          </motion.h2>
          <figure
            className="relative overflow-hidden rounded-2xl md:rounded-3xl w-full
              aspect-[4/3] mt-4 md:mt-6 lg:mt-8 cursor-pointer"
            onClick={() =>
              handleImageClick("/Photos/kantina-vodno-4.webp")
            }
            role="button"
            tabIndex={0}
          >
            <img
              src="/Photos/kantina-vodno-4.webp"
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
          </figure>
        </article>
        <div className="w-full md:w-3/5 pt-4 md:pt-8 lg:pt-12 px-2 md:px-0">
          <blockquote
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
          </blockquote>
        </div>
      </section>

      {/* Section 2 - Celebrations */}
      <section
        id="proslavi"
        className="flex flex-col md:flex-row-reverse items-start px-4 md:px-4 lg:px-8
          xl:px-12 2xl:px-20 gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 py-4
          md:py-5 lg:py-6 xl:py-8 2xl:py-10"
      >
        <article className="w-full md:w-2/5 flex flex-col items-end">
          <motion.h2
            className="bg-[#77846E] text-[#EFE8DB] rounded-tl-3xl md:rounded-tl-4xl
              rounded-bl-3xl md:rounded-bl-4xl px-6 md:px-8 lg:px-10 xl:px-12 py-4
              md:py-5 lg:py-6 text-2xl md:text-3xl lg:text-4xl xl:text-5xl
              2xl:text-6xl font-semibold w-full md:w-[calc(100%+2rem)]
              lg:w-[calc(100%+3rem)] -mr-4 md:-mr-8 lg:-mr-12 xl:-mr-16 2xl:-mr-20"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-20%" }}
          >
            Прослави
          </motion.h2>
          <figure
            className="relative overflow-hidden rounded-2xl md:rounded-3xl w-full
              aspect-[4/3] mt-4 md:mt-6 lg:mt-8 cursor-pointer"
            onClick={() =>
              handleImageClick(
                "/Photos/cela prikolka so lugje od daleku.webp",
              )
            }
            role="button"
            tabIndex={0}
          >
            <img
              src="/Photos/cela prikolka so lugje od daleku.webp"
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
          </figure>
        </article>
        <div className="w-full md:w-3/5 pt-4 md:pt-8 lg:pt-12 px-2 md:px-0">
          <blockquote
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
          </blockquote>
        </div>
      </section>

      {/* Section 3 - Weddings */}
      <section
        id="svadbi"
        className="flex flex-col md:flex-row items-start px-4 md:px-4 lg:px-8 xl:px-12
          2xl:px-20 gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 py-4 md:py-5
          lg:py-6 xl:py-8 2xl:py-10"
      >
        <article className="w-full md:w-2/5 flex flex-col items-start">
          <motion.h2
            className="bg-[#77846E] text-[#EFE8DB] rounded-br-3xl md:rounded-br-4xl
              rounded-tr-3xl md:rounded-tr-4xl px-6 md:px-8 lg:px-10 xl:px-12 py-4
              md:py-5 lg:py-6 text-2xl md:text-3xl lg:text-4xl xl:text-5xl
              2xl:text-6xl font-semibold w-full md:w-[calc(100%+2rem)]
              lg:w-[calc(100%+3rem)] -ml-4 md:-ml-8 lg:-ml-12 xl:-ml-16 2xl:-ml-20"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-20%" }}
          >
            Свадби
          </motion.h2>
          <figure
            className="relative overflow-hidden rounded-2xl md:rounded-3xl w-full
              aspect-[4/3] mt-4 md:mt-6 lg:mt-8 cursor-pointer"
            onClick={() =>
              handleImageClick("/Photos/kantina-vodno-72.webp")
            }
            role="button"
            tabIndex={0}
          >
            <img
              src="/Photos/kantina-vodno-72.webp"
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
          </figure>
        </article>
        <div className="w-full md:w-3/5 pt-4 md:pt-8 lg:pt-12 px-2 md:px-0">
          <blockquote
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
          </blockquote>
        </div>
      </section>

      {/* Section 4 - Corporate */}
      <section
        id="korporativni"
        className="flex flex-col md:flex-row-reverse items-start px-4 md:px-4 lg:px-8
          xl:px-12 2xl:px-20 gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 py-4
          md:py-5 lg:py-6 xl:py-8 2xl:py-10"
      >
        <article className="w-full md:w-2/5 flex flex-col items-end">
          <motion.h2
            className="bg-[#77846E] text-[#EFE8DB] rounded-tl-3xl md:rounded-tl-4xl
              rounded-bl-3xl md:rounded-bl-4xl px-6 md:px-8 lg:px-10 xl:px-12 py-4
              md:py-5 lg:py-6 text-2xl md:text-3xl lg:text-4xl xl:text-5xl
              2xl:text-6xl font-semibold w-full md:w-[calc(100%+2rem)]
              lg:w-[calc(100%+3rem)] -mr-4 md:-mr-8 lg:-mr-12 xl:-mr-16 2xl:-mr-20"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-20%" }}
          >
            Корпоративни
          </motion.h2>
          <figure
            className="relative overflow-hidden rounded-2xl md:rounded-3xl w-full
              aspect-[4/3] mt-4 md:mt-6 lg:mt-8 cursor-pointer"
            onClick={() =>
              handleImageClick(
                "/Photos/cela prikolka so lugje od daleku.webp",
              )
            }
            role="button"
            tabIndex={0}
          >
            <img
              src="/Photos/cela prikolka so lugje od daleku.webp"
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
          </figure>
        </article>
        <div className="w-full md:w-3/5 pt-4 md:pt-8 lg:pt-12 px-2 md:px-0">
          <blockquote
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
          </blockquote>
        </div>
      </section>

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
