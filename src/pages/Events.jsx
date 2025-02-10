const Events = () => {
  return (
    <div className="bg-[#EFE8DB]">
      {/* Top Section with Full-Width Image */}
      <div
        className="w-full h-96 bg-cover bg-center text-[#EFE8DB] flex items-center
          justify-center text-4xl font-bold mt-18"
        style={{
          backgroundImage: "url('Photos/kantina-vodno-56.JPG')",
        }}
      >
        Настани
      </div>

      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center py-10 px-5 md:px-20 gap-10">
        <div className="md:w-1/2 flex flex-col items-start">
          <div
            className="bg-[#77846E] text-[#EFE8DB] rounded-tr-4xl rounded-br-4xl px-4 py-2
              mb-5 text-5xl font-semibold"
          >
            Приватни
          </div>
          <img
            src="Photos/kantina-vodno-4.JPG"
            alt="Приватни"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 mt-5 md:mt-0">
          <p className="text-[#77846E] text-4xl">
            Од роденден до фестивал, нашиот <br />
            трејлер бар е спремен <br />
            да ја претвори твојата приватна забава во
            <br /> вистинска журка. Остави ги твоите гости
            <br /> без зборови со персонализирано мени <br />
            со коктели од вас за сите добредојдени.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div
        className="flex flex-col md:flex-row-reverse items-center py-10 px-5 md:px-20
          gap-10"
      >
        <div className="md:w-1/2 flex flex-col items-end">
          <div
            className="bg-[#77846E] text-[#EFE8DB] rounded-tl-4xl rounded-bl-4xl px-4 py-2
              mb-5 text-5xl font-semibold"
          >
            Прослави
          </div>
          <img
            src="Photos/cela prikolka so lugje od daleku.jpg"
            alt="Прослави"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 mt-5 md:mt-0">
          <p className="text-[#77846E] text-4xl">
            Од роденден до фестивал, нашиот трејлер бар е спремен да
            ја претвори твојата приватна забава во вистинска журка.
            Остави ги твоите гости без зборови со персонализирано мени
            со коктели од вас за сите добредојдени.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col md:flex-row items-center py-10 px-5 md:px-20 gap-10">
        <div className="md:w-1/2 flex flex-col items-start">
          <div
            className="bg-[#77846E] text-[#EFE8DB] rounded-tr-4xl rounded-br-4xl px-4 py-2
              mb-5 text-5xl font-semibold"
          >
            Свадби
          </div>

          <img
            src="Photos/kantina-vodno-72.JPG"
            alt="Свадби"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>

        <div className="md:w-1/2 mt-5 md:mt-0">
          <p className="text-[#77846E] text-4xl">
            Од роденден до фестивал, нашиот трејлер бар е спремен да
            ја претвори твојата приватна забава во вистинска журка.
            Остави ги твоите гости без зборови со персонализирано мени
            со коктели од вас за сите добредојдени.
          </p>
        </div>
      </div>

      {/* Section 4 */}
      <div className="flex flex-col md:flex-row-reverse items-center py-10 px-5 md:px-20">
        <div className="md:w-1/2 flex flex-col items-end">
          <div
            className="bg-[#77846E] text-[#EFE8DB] rounded-tl-4xl rounded-bl-4xl px-4 py-2
              mb-5 text-5xl font-semibold items-right"
          >
            Корпоративни
          </div>
          <img
            src="Photos/cela prikolka so lugje od daleku.jpg"
            alt="Корпоративни"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 mt-5 md:mt-0">
          <p className="text-[#77846E] text-4xl">
            Од роденден до фестивал, нашиот трејлер бар е спремен да
            ја претвори твојата приватна забава во вистинска журка.
            Остави ги твоите гости без зборови со персонализирано мени
            со коктели од вас за сите добредојдени.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Events;
