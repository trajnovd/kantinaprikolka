import { motion } from "framer-motion";
import { useState } from "react";
import ImageCarousel from "../ui/ImageCarousel";

const DesktopAboutUs = () => {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const galleryItems = [
    {
      src: "/Photos/kantina-vodno-4.webp",
      classes: "col-span-1 row-span-1 md:col-span-1 md:row-span-2",
    },
    {
      src: "/Photos/cela prikolka so lugje od daleku.webp",
      classes: "col-span-1 row-span-1 md:row-span-1",
    },
    {
      src: "/Photos/kokteli so cocktail bar znak.webp",
      classes: "col-span-1 row-span-1 md:row-span-2",
    },
    {
      src: "/Photos/kantina-vodno-44.webp",
      classes: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
    },
    {
      src: "/Photos/aperoli so cocktail bar znak.webp",
      classes: "col-span-1 row-span-1 md:col-span-1 md:row-span-2",
    },
    {
      src: "/Photos/kantina-vodno-4.webp",
      classes: "col-span-1 row-span-1 md:col-span-1 md:row-span-2",
    },
    {
      src: "/Photos/kantina-vodno-72.webp",
      classes: "col-span-1 row-span-1 md:col-span-1",
    },
    {
      src: "/Photos/kantina-vodno-56.webp",
      classes: "col-span-1 row-span-1 md:row-span-1",
    },
  ];

  const galleryImages = galleryItems.map((item) => item.src);

  const openCarousel = (index) => {
    setSelectedImageIndex(index);
    setIsCarouselOpen(true);
  };

  return (
    <div className="bg-[#EFE8D8] pt-16 overflow-x-hidden">
      <section className="relative flex flex-wrap md:flex-nowrap">
        {/* Left Section */}
        <div
          className="w-full md:flex-[50%] lg:flex-[47%] bg-[#77846E] rounded-br-[100px]
            pt-6 relative flex flex-col"
        >
          <img
            src="/Icons/logo-11.svg"
            alt="Logo"
            className="md:w-32 md:h-36 lg:w-34 lg:h-38 xl:w-36 xl:h-40 2xl:w-38 2xl:h-42
              lg:ml-15 md:ml-12"
          />

          <motion.h1
            className="text-[#EFE8D8] lg:text-6xl md:text-5xl xl:text-7xl font-bold mb-4
              lg:ml-15 md:ml-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            За Нас
          </motion.h1>

          <motion.p
            className="text-[#EFE8D8] md:text-xl lg:text-2xl xl:text-3xl font-light mb-6
              lg:ml-15 md:ml-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Нашата Мисија
          </motion.p>

          <div className="flex space-x-8 mt-10 mb-10 items-center lg:ml-15 md:ml-12 p-6 pl-0">
            <motion.blockquote
              className="md:text-xl lg:text-3xl xl:text-4xl text-[#EFE8D8] leading-relaxed z-30"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ние сме <strong>Кантина Трејлер Бар</strong> и <br />
              се залагаме да го претвориме <br /> твојот настан во{" "}
              <strong>коктел оаза</strong>,
              <br /> оставајќи ги твоите гости со <br />
              трајни впечатоци. Одбери <br />{" "}
              <strong>мени со персонализирани коктели</strong>
              <br /> и пијалоци и остави го другото <br />
              на нас.
            </motion.blockquote>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:flex-[55%] lg:flex-[53%] flex flex-col">
          <motion.div
            className="overflow-hidden md:-ml-[20%] lg:-ml-[18%] xl:-ml-[15%] relative z-10
              md:h-[65vh] lg:h-[55vh] xl:h-[75vh]"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src="/Photos/kantina-vodno-44.webp"
              alt="Cocktail Bar"
              className="w-full h-full object-cover rounded-bl-[100px]"
            />
          </motion.div>

          <motion.div
            className="bg-[#EFE8D8] lg:mr-15 md:mr-12 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <blockquote
              className="md:text-xl lg:text-3xl xl:text-4xl text-[#77846E] leading-relaxed py-6
                text-right"
            >
              Користејќи{" "}
              <strong>
                свежи и квалитетни
                <br />
                состојки
              </strong>{" "}
              нашите бармени ги <br />
              креираат коктелите од твоите
              <br />
              соништа. Со <strong>над 50 настани</strong>
              <br /> изработени, имаме собрано искуство
              <br /> за да го направиме твојот настан
              <br /> <strong>перфектен</strong> и{" "}
              <strong>незаборавен</strong>.
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 bg-[#EFE8D8] mx-auto max-w-6xl">
        <h1
          className="text-left lg:text-6xl md:text-5xl xl:text-7xl font-bold text-[#77846E]
            mb-12"
        >
          Од Нашата Галерија
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`relative cursor-pointer overflow-hidden ${item.classes}`}
              onClick={() => openCarousel(index)}
            >
              <div className="absolute inset-0 bg-black/30 z-10 transition-opacity hover:opacity-0"></div>
              <img
                src={item.src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transform transition-transform
                  hover:scale-105"
              />
            </div>
          ))}
        </div>

        {isCarouselOpen && (
          <ImageCarousel
            images={galleryImages}
            initialIndex={selectedImageIndex}
            onClose={() => setIsCarouselOpen(false)}
          />
        )}
      </section>
    </div>
  );
};

export default DesktopAboutUs;
