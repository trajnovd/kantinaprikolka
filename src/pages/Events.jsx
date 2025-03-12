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
        <motion.div className="absolute inset-0">
          <motion.img
            src="/Photos/kantina-vodno-56.webp"
            alt="Events Background"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

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
        className="flex flex-col md:flex-row items-start px-4 md:px-6 lg:px-12 xl:px-16
          2xl:px-20 gap-4 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-5 pb-4 md:pb-5
          lg:pb-6 xl:pb-8 2xl:pb-10 mb-5"
      >
        <article className="w-full md:w-5/12 flex flex-col items-start">
          <motion.h2
            className="bg-[#77846E] text-[#EFE8DB] rounded-br-3xl md:rounded-br-4xl px-6
              md:px-8 lg:px-10 xl:px-12 py-4 md:py-5 lg:py-6 text-2xl md:text-3xl
              lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold w-full
              md:w-[calc(100%+3rem)] lg:w-[calc(100%+4rem)] -ml-4 md:-ml-8 lg:-ml-12
              xl:-ml-16 2xl:-ml-20"
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
              className="w-full h-full object-cover object-center"
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
        <div className="w-full md:w-7/12 pt-4 md:pt-6 lg:pt-8 px-2 md:px-0 xl:mt-20">
          <blockquote
            className="text-[#77846E] text-lg md:text-2xl lg:text-3xl xl:text-4xl
              2xl:text-5xl leading-relaxed tracking-tight md:tracking-normal
              text-right"
          >
            Од <strong>роденден</strong> до <strong>фестивал</strong>,
            нашиот <br className="hidden md:block" /> трејлер бар е
            спремен да ја претвори <br className="hidden md:block" />{" "}
            твојата приватна забава во{" "}
            <strong>
              вистинска <br className="hidden md:block" /> журка
            </strong>
            . Остави ги твоите гости без{" "}
            <br className="hidden md:block" /> зборови со
            персонализирано мени со <br className="hidden md:block" />{" "}
            коктели од вас за сите добредојдени.
          </blockquote>
        </div>
      </section>

      {/* Section 2 - Celebrations */}
      <section
        id="proslavi"
        className="flex flex-col md:flex-row-reverse items-start px-4 md:px-6 lg:px-12
          xl:px-16 2xl:px-20 gap-4 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-5 pb-4
          md:pb-5 lg:pb-6 xl:pb-8 2xl:pb-10 my-5"
      >
        <article className="w-full md:w-5/12 flex flex-col items-end">
          <motion.h2
            className="bg-[#77846E] text-[#EFE8DB] rounded-l-3xl md:rounded-l-4xl px-6
              md:px-8 lg:px-10 xl:px-12 py-4 md:py-5 lg:py-6 text-2xl md:text-3xl
              lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold w-full
              md:w-[calc(100%+3rem)] lg:w-[calc(100%+4rem)] -mr-4 md:-mr-8 lg:-mr-12
              xl:-mr-16 2xl:-mr-20"
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
              className="w-full h-full object-cover object-center"
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
        <div className="w-full md:w-7/12 pt-4 md:pt-6 lg:pt-8 px-2 md:px-0">
          <blockquote
            className="text-[#77846E] text-lg md:text-2xl lg:text-3xl xl:text-4xl
              2xl:text-5xl leading-relaxed tracking-tight md:tracking-normal
              text-left"
          >
            Од <strong>јубилеи</strong> до <strong>промоции</strong>,
            нашиот <br className="hidden md:block" /> трејлер бар ќе
            ја направи вашата <br className="hidden md:block" />{" "}
            прослава <strong>незаборавно доживување</strong>.{" "}
            <br className="hidden md:block" /> Додади боја и енергија
            на својот <br className="hidden md:block" /> настан, а ние
            ќе се погрижиме секој <br className="hidden md:block" />{" "}
            детал да ja одрази твојата{" "}
            <br className="hidden md:block" /> уникатна приказна.
          </blockquote>
        </div>
      </section>

      {/* Section 3 - Weddings */}
      <section
        id="svadbi"
        className="flex flex-col md:flex-row items-start px-4 md:px-6 lg:px-12 xl:px-16
          2xl:px-20 gap-4 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-5 pb-4 md:pb-5
          lg:pb-6 xl:pb-8 2xl:pb-10 my-5"
      >
        <article className="w-full md:w-5/12 flex flex-col items-start">
          <motion.h2
            className="bg-[#77846E] text-[#EFE8DB] rounded-r-3xl md:rounded-r-4xl px-6
              md:px-8 lg:px-10 xl:px-12 py-4 md:py-5 lg:py-6 text-2xl md:text-3xl
              lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold w-full
              md:w-[calc(100%+3rem)] lg:w-[calc(100%+4rem)] -ml-4 md:-ml-8 lg:-ml-12
              xl:-ml-16 2xl:-ml-20"
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
              className="w-full h-full object-cover object-center"
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
        <div className="w-full md:w-7/12 pt-4 md:pt-6 lg:pt-8 px-2 md:px-0">
          <blockquote
            className="text-[#77846E] text-lg md:text-2xl lg:text-3xl xl:text-4xl
              2xl:text-5xl leading-relaxed tracking-tight md:tracking-normal
              text-right"
          >
            Нека вашиот <strong>голем ден</strong> <br />
            биде елегантен и радосен{" "}
            <br className="hidden md:block" />– нашиот бар ќе додаде{" "}
            <strong>современ печат</strong>.
            <br className="hidden md:block" />
            Со избрани коктели и детали, ќе создадеме{" "}
            <br className="hidden md:block" />{" "}
            <strong>моменти што ќе ги освојат</strong>
            <br className="hidden md:block" /> срцата на вашите гости.
          </blockquote>
        </div>
      </section>

      {/* Section 4 - Corporate */}
      <section
        id="korporativni"
        className="flex flex-col md:flex-row-reverse items-start px-4 md:px-6 lg:px-12
          xl:px-16 2xl:px-20 gap-4 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-5 pb-4
          md:pb-5 lg:pb-6 xl:pb-8 2xl:pb-10 my-5"
      >
        <article className="w-full md:w-5/12 flex flex-col items-end">
          <motion.h2
            className="bg-[#77846E] text-[#EFE8DB] rounded-l-3xl md:rounded-l-4xl px-6
              md:px-8 lg:px-10 xl:px-12 py-4 md:py-5 lg:py-6 text-2xl md:text-3xl
              lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold w-full
              md:w-[calc(100%+3rem)] lg:w-[calc(100%+4rem)] -mr-4 md:-mr-8 lg:-mr-12
              xl:-mr-16 2xl:-mr-20"
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
              className="w-full h-full object-cover object-center"
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
        <div className="w-full md:w-7/12 pt-4 md:pt-6 lg:pt-8 px-2 md:px-0">
          <blockquote
            className="text-[#77846E] text-lg md:text-2xl lg:text-3xl xl:text-4xl
              2xl:text-5xl leading-relaxed tracking-tight md:tracking-normal
              text-left"
          >
            Од <strong>тим-билдинзи</strong> до конференции,
            <br className="hidden md:block" /> нашиот трејлер бар ќе
            го подигне вашето <br className="hidden md:block" />
            <strong>корпоративно искуство</strong>.
            <br className="hidden md:block" />
            Со префинети коктели и уникатна атмосфера,{" "}
            <br className="hidden md:block" /> ќе ги инспирирате и
            поврзете гостите <br className="hidden md:block" /> на
            начин кој остава <strong>траен впечаток</strong>.
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
