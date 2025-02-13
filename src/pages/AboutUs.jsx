import { motion } from "framer-motion";
import { useState } from "react";
import ImageCarousel from "../ui/ImageCarousel";

const AboutUs = () => {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const galleryItems = [
    {
      src: "/Photos/kantina-vodno-4.JPG",
      classes: "col-span-1 row-span-1 md:col-span-1 md:row-span-2",
    },
    {
      src: "/Photos/cela prikolka so lugje od daleku.jpg",
      classes: "col-span-1 row-span-1 md:row-span-1",
    },
    {
      src: "/Photos/kokteli so cocktail bar znak.jpg",
      classes: "col-span-1 row-span-1 md:row-span-2",
    },
    {
      src: "/Photos/kantina-vodno-44.JPG",
      classes: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
    },
    {
      src: "/Photos/aperoli so cocktail bar znak.jpg",
      classes: "col-span-1 row-span-1 md:col-span-1 md:row-span-2",
    },
    {
      src: "/Photos/kantina-vodno-4.JPG",
      classes: "col-span-1 row-span-1 md:col-span-1 md:row-span-2",
    },
    {
      src: "/Photos/kantina-vodno-72.JPG",
      classes: "col-span-1 row-span-1 md:col-span-1",
    },
    {
      src: "/Photos/kantina-vodno-56.JPG",
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
        <div
          className="w-full bg-[#77846E] rounded-br-[100px] items-start justify-center pt-6
            relative"
        >
          <img
            src="/Icons/logo-11.svg"
            alt="Logo"
            className="w-32 h-36 ml-15"
          />
          <motion.h1
            className="text-[#EFE8D8] text-7xl font-bold mb-4 ml-15 relative z-20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            За Нас
          </motion.h1>
          <motion.p
            className="text-[#EFE8D8] text-xl font-light mb-6 ml-15 relative z-20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Нашата Мисија
          </motion.p>

          <div className="flex space-x-8 mt-10 mb-10 relative z-20 items-center ml-15 p-6 pl-0">
            <motion.blockquote
              className="text-4xl text-[#EFE8D8] leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
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

        <div className="w-full flex flex-col">
          <div className="overflow-hidden -ml-70 relative z-10 h-[72%]">
            <motion.img
              src="/Photos/kantina-vodno-44.JPG"
              alt="Cocktail Bar"
              className="w-full h-72/100 object-cover rounded-bl-[100px]"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
          </div>

          <div className="bg-[#EFE8D8] mr-15 rounded-lg md:pb-20 -mt-[22%] text-right">
            <motion.blockquote
              className="text-4xl text-[#77846E] leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Користејќи{" "}
              <strong>
                свежи и квалитетни<br></br> состојки
              </strong>{" "}
              нашите бармени ги <br></br>креираат коктелите од твоите
              <br></br>
              соништа. Со <strong>над 50 настани</strong>
              <br></br> изработени, имаме собрано искуство<br></br> за
              да го направиме твојот настан<br></br>{" "}
              <strong>перфектен</strong> и{" "}
              <strong>незаборавен</strong>.
            </motion.blockquote>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#EFE8D8] mx-auto max-w-6xl">
        <motion.h1
          className="text-right text-7xl font-bold text-[#77846E] mb-12
            will-change-transform"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Од Нашата Галерија
        </motion.h1>

        <div
          className="grid grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-3 gap-2
            will-change-transform"
        >
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
                className="w-full h-full object-cover transform transition-transform duration-300
                  ease-in-out hover:scale-105"
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

export default AboutUs;
