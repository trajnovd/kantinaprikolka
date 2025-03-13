import { motion } from "framer-motion";
import { useState } from "react";
import ImageCarousel from "../ui/ImageCarousel";

const MobileAboutUs = () => {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const galleryItems = [
    // Existing gallery items (unchanged)
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
      src: "/Photos/sara_u_sank_so_gosti_okolu.webp",
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

  // Add all images to the carousel (including the new ones)
  const galleryImages = [
    ...galleryItems.map((item) => item.src), // Existing images
    // New images
    "/Photos/15.03_event_2_1.webp",
    "/Photos/15.03_event_2_2.webp",
    "/Photos/15.03_event_2_3.webp",
    "/Photos/15.03_event_2_4.webp",
    "/Photos/15.03_event_2_5.webp",
    "/Photos/aperol_vo_ajnser_v2.webp",
    "/Photos/DIN_0275.webp",
    "/Photos/DIN_0343.webp",
    "/Photos/DIN_0456.webp",
    "/Photos/DIN_0498.webp",
    "/Photos/DIN_0552.webp",
    "/Photos/dvajca_sankeri_rabotat.webp",
    "/Photos/freepour_vodka.webp",
    "/Photos/koktel_u_niska_staklena.webp",
    "/Photos/pravenje_koktel_od_daleku.webp",
    "/Photos/sanker_filmska.webp",
    "/Photos/sanker_shejka_v2.webp",
    "/Photos/zaednicka_rabotna.webp",
    "/Photos/zenski_sednati_pred_prikolka_nasmeani.webp",
  ];

  const openCarousel = (index) => {
    setSelectedImageIndex(index);
    setIsCarouselOpen(true);
  };

  return (
    <div className="bg-[#EFE8D8] pt-16 overflow-x-hidden">
      <section className="flex flex-col">
        {/* Top Section */}
        <div className="w-full bg-[#77846E] rounded-b-[50px] p-6">
          <img
            src="/Icons/logo-11.svg"
            alt="Logo"
            className="w-24 h-28 mx-auto"
          />

          <motion.h1
            className="text-[#EFE8D8] text-4xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            За Нас
          </motion.h1>

          <motion.p
            className="text-[#EFE8D8] text-lg font-light mb-6 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Нашата Мисија
          </motion.p>

          <motion.blockquote
            className="text-xl text-[#EFE8D8] leading-relaxed text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Ние сме <strong>Кантина Трејлер Бар</strong> и се залагаме
            да го претвориме твојот настан во{" "}
            <strong>коктел оаза</strong>, оставајќи ги твоите гости со
            трајни впечатоци. Одбери{" "}
            <strong>мени со персонализирани коктели</strong>и пијалоци
            и остави го другото на нас.
          </motion.blockquote>
        </div>

        {/* Image Section */}
        <div className="w-full mt-8 px-4">
          <motion.img
            src="/Photos/kantina-vodno-44.webp"
            alt="Cocktail Bar"
            className="w-full h-64 object-cover rounded-[50px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* Bottom Text Section */}
        <div className="bg-[#EFE8D8] p-6 mt-8">
          <motion.blockquote
            className="text-xl text-[#77846E] leading-relaxed text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Користејќи <strong>свежи и квалитетни состојки</strong>{" "}
            нашите бармени ги креираат коктелите од твоите соништа. Со{" "}
            <strong>над 50 настани</strong> изработени, имаме собрано
            искуство за да го направиме твојот настан{" "}
            <strong>перфектен</strong> и <strong>незаборавен</strong>.
          </motion.blockquote>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 px-4 bg-[#EFE8D8]">
        <h1 className="text-4xl font-bold text-[#77846E] mb-8 text-center">
          Од Нашата Галерија
        </h1>

        <div className="grid grid-cols-2 gap-2">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative cursor-pointer overflow-hidden aspect-square"
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

export default MobileAboutUs;
