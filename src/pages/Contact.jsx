function Contact() {
  return (
    <div
      className="min-h-screen bg-[#77846E] text-[#EFE8D8] flex flex-col items-center
        justify-center px-6 py-10"
    >
      <img
        src="/Icons/logo-11.svg"
        alt="Contact"
        className="mb-8 h-28 w-28"
      />
      {/* Title */}
      <h1 className="text-8xl font-bold mb-8">Контакт</h1>

      {/* Contact Info */}
      <div className="text-center space-y-2 mb-6">
        <p className="text-3xl font-semibold">Kantina Trailer Bar</p>
        <p className="text-3xl">Email: trailerbar@kantina.com</p>
        <p className="text-3xl">Телефон: +389 79 255 905</p>
      </div>

      {/* Additional Note */}
      <p className="max-w-lg text-center text-2xl">
        За билокакви дополнителни прашања обратете ни се на нашиот
        емаил или телефонски број, би ни било задоволство да го
        испланираме вашиот настан заедно.
      </p>
    </div>
  );
}

export default Contact;
