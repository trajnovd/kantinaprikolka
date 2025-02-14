function Contact() {
  return (
    <div
      className="min-h-screen bg-[#77846E] text-[#EFE8D8] flex flex-col items-center
        justify-center px-4 py-8 md:px-6 md:py-10 lg:py-12"
    >
      <img
        src="/Icons/logo-11.svg"
        alt="Contact"
        className="mb-6 h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28"
      />
      {/* Title */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8">
        Контакт
      </h1>

      {/* Contact Info */}
      <div className="text-center space-y-2 md:space-y-3 mb-6 lg:mb-8">
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
          Kantina Trailer Bar
        </p>
        <p className="text-xl md:text-2xl lg:text-3xl">
          Email: trailerbar@kantina.com
        </p>
        <p className="text-xl md:text-2xl lg:text-3xl">
          Телефон: +389 79 255 905
        </p>
      </div>

      {/* Additional Note */}
      <p
        className="max-w-xs md:max-w-sm lg:max-w-lg text-center text-base md:text-xl
          lg:text-2xl px-2 md:px-0"
      >
        За билокакви дополнителни прашања обратете ни се на нашиот
        емаил или телефонски број, би ни било задоволство да го
        испланираме вашиот настан заедно.
      </p>
    </div>
  );
}

export default Contact;
