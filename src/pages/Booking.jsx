import { useState } from "react";
import emailjs from "emailjs-com";
import { FaCheck } from "react-icons/fa6"; // For package details icons
import Modal from "../ui/Modal";
import { form } from "framer-motion/client";
import Loader from "../ui/Loader";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";

const Booking = () => {
  // Initial state with fixed base guests and add-on fields
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: null,
    package: "Основен пакет",
    Guests: 20, // Fixed base guests
    time: 4, // Default hours for Основен пакет
    drinksPerGuest: 3, // Default drinks per guest for Основен пакет
    barMenu: "Основен", // Default bar menu for Основен пакет
    Bartenders: 1,
    Waiters: 0,
    extraBartenders: 0,
    extraWaiters: 0,
    glassGlasses: false,
    nonAlcoholicCocktails: false,
    champagneStation: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  // Define the packages array with three packages and defaults
  const packages = [
    {
      id: "basic",
      name: "Основен пакет",
      price: "9.600мкд.",
      details: [
        "3 пијачки од гостин",
        "1 бармен",
        "Основни алкохоли (бомбај џин, џејмисон виски, камино текила, финландиа водка, кептн морган рум)",
        "3 класични коктели",
        "Вода и сокови",
        "До 4 часа",
      ],
      defaults: {
        time: 4,
        drinksPerGuest: 3,
        barMenu: "Основен",
        Waiters: 0,
        Bartenders: 1,
      },
    },
    {
      id: "standard",
      name: "Стандард пакет",
      price: "12.000мкд.",
      details: [
        "4 пијачки од гостин",
        "2 бармени",
        "Стандард алкохоли (танкерај џин, џејмисон виски, олмека текила, абсолут водка, бакарди рум)",
        "4 класични коктели",
        "3 авторски коктели",
        "Безалкохолни коктели",
        "До 6 часа",
      ],
      defaults: {
        time: 6,
        drinksPerGuest: 4,
        barMenu: "Стандард",
        Waiters: 1,
        Bartenders: 2,
        nonAlcoholicCocktails: true,
      },
    },
    {
      id: "premium",
      name: "Премиум пакет",
      price: "20.000мкд.",
      details: [
        "Неограничен пијалок",
        "3 бармени",
        "2 келнери",
        "Премиум алкохоли (хендрикс џин, џони блек виски, патрон текила, греј гус водка, бакарди рум)",
        "Коктел мени по избор",
        "Неограничено време",
        "Стаклени чаши",
        "Безалкохолни коктели",
      ],
      defaults: {
        time: "unlimited",
        drinksPerGuest: "unlimited",
        barMenu: "Премиум",
        Waiters: 2,
        Bartenders: 3,
        glassGlasses: true,
        nonAlcoholicCocktails: true,
        champagneStation: true,
      },
    },
  ];

  // Handle changes for inputs and selects
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    let val;

    if (type === "checkbox") {
      val = e.target.checked;
    } else if (
      name === "Guests" ||
      name === "extraBartenders" ||
      name === "extraWaiters" ||
      name === "time" ||
      name === "drinksPerGuest"
    ) {
      // Ensure it's converted to a number, unless it's "unlimited"
      val = value === "unlimited" ? value : Number(value);
    } else {
      val = value;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: val,
    }));
  };

  // When a package is selected, update package and merge in its defaults
  const handlePackageSelect = (selectedPackage, defaults) => {
    setFormData({
      ...formData,
      package: selectedPackage,
      time: defaults.time,
      drinksPerGuest: defaults.drinksPerGuest,
      barMenu: defaults.barMenu,
      Waiters: defaults.Waiters,
      Bartenders: defaults.Bartenders,
      nonAlcoholicCocktails: defaults.nonAlcoholicCocktails,
      glassGlasses: defaults.glassGlasses,
      champagneStation: defaults.champagneStation,
    });
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      date, // Store Date object
    }));
  };
  // Calculate base cost based on package
  const baseCost =
    formData.package === "Премиум пакет"
      ? 20000
      : formData.package === "Стандард пакет"
        ? 12000
        : 9600;
  // Extra guests cost: each 10 extra guests = 6000
  const extraGuestsCost =
    formData.Guests > 20
      ? 6000 * ((Number(formData.Guests) - 20) / 10)
      : 0;

  // Extra time cost: if not premium, compare selected time to default
  let extraTimeCost = 0;
  let defaultTime =
    formData.package === "Основен пакет"
      ? 4
      : formData.package === "Стандард пакет"
        ? 6
        : 0;
  if (formData.package !== "Премиум пакет") {
    if (formData.time !== "unlimited") {
      if (Number(formData.time) > defaultTime) {
        extraTimeCost =
          ((Number(formData.time) - defaultTime) / 2) * 4000;
      }
    } else {
      extraTimeCost = 10000; // Fixed cost for unlimited upgrade
    }
  }

  // Extra drinks cost: if not premium, each extra drink per guest beyond default costs 6000 per guest
  let extraDrinkCost = 0;
  let defaultDrinks =
    formData.package === "Основен пакет"
      ? 3
      : formData.package === "Стандард пакет"
        ? 4
        : 0;
  if (formData.package !== "Премиум пакет") {
    if (formData.drinksPerGuest !== "unlimited") {
      if (Number(formData.drinksPerGuest) > defaultDrinks) {
        extraDrinkCost = 6000;
      }
    } else {
      extraDrinkCost = 12000;
    }
  }

  const baseBartenders =
    formData.package === "Основен пакет"
      ? 1
      : formData.package === "Стандард пакет"
        ? 2
        : 3;
  const baseWaiters =
    formData.package === "Основен пакет"
      ? 0
      : formData.package === "Стандард пакет"
        ? 1
        : 2;

  // Extra bartenders and waiters costs
  const extraBartendersCost =
    Math.max(0, formData.extraBartenders - baseBartenders) * 2000;
  const extraWaitersCost =
    Math.max(0, formData.extraWaiters - baseWaiters) * 2000;

  // Adjusted costs based on package
  const nonAlcoholicCost =
    formData.package === "Премиум пакет" ||
    formData.package === "Стандард пакет"
      ? 0
      : formData.nonAlcoholicCocktails
        ? 2000
        : 0;

  const glassGlassesCost =
    formData.package === "Премиум пакет"
      ? 0
      : formData.glassGlasses
        ? 6000
        : 0;

  const champagneCost =
    formData.package === "Премиум пакет"
      ? 0
      : formData.champagneStation
        ? 12000
        : 0;

  const totalCost =
    baseCost +
    extraGuestsCost +
    extraTimeCost +
    extraDrinkCost +
    extraBartendersCost +
    extraWaitersCost +
    glassGlassesCost +
    champagneCost +
    nonAlcoholicCost;

  // Submission handler (email sending code commented)

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const serviceId = "service_tp7m24l"; // Replace with your EmailJS Service ID
    const templateId = "template_vx73uvf"; // Replace with your EmailJS Template ID
    const publicKey = "hxGUgBe_5T8Y3e8pr"; // Replace with your EmailJS Public Key

    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      date: formData.date,
      package: formData.package,
      totalCost: totalCost.toLocaleString(),
      Guests: formData.Guests,
      time: formData.time,
      drinksPerGuest: formData.drinksPerGuest,
      extraBartenders: Math.max(
        0,
        formData.extraBartenders - baseBartenders,
      ),
      extraWaiters: Math.max(0, formData.extraWaiters - baseWaiters),
      glassGlasses: formData.glassGlasses ? "Yes" : "No",
      champagneStation: formData.champagneStation ? "Yes" : "No",
      nonAlcoholicCocktails: formData.nonAlcoholicCocktails
        ? "Yes"
        : "No",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        console.log("Email sent!");
        setIsSubmitted(true);
        setShowModal(true);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setIsSubmitted(false);
        setIsLoading(false);
        toast.error(
          "Се извинуваме, имаше проблем со испраќањето на вашата резервација. Контактирајте не за помош: +389 79 255 905",
        );
      });
  };

  return (
    <Modal>
      <div className="bg-[#EFE8D8] text-[#77846E] pb-10 pt-16">
        {/* Top Image Section */}
        <div
          className="relative w-full h-[250px] sm:h-[350px] bg-cover bg-center"
          style={{
            backgroundImage: "url('Photos/kantina-vodno-72.webp')",
          }}
        >
          <h1
            className="absolute inset-0 flex items-center justify-center text-4xl sm:text-5xl
              font-bold text-[#EFE8D8]"
          >
            Резервирај
          </h1>
        </div>

        {/* Title and Subtitle */}
        <div className="text-center mt-8 px-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Детали за твојот настан
          </h2>
          <p className="text-lg sm:text-xl mt-2">
            Пополни ги деталите за твојот настан и добиј
            персонализирана понуда од нашиот тим во најскоро време.
          </p>
        </div>

        <div className="mt-10 px-6">
          <form
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto space-y-10"
          >
            {/* Package Selection */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Изберете пакет:
              </h2>
              <div className="flex flex-col sm:flex-row justify-between">
                {packages.map((pkg) => {
                  const isSelected = formData.package === pkg.name;
                  const priceClass = isSelected
                    ? "mt-2 p-2 rounded bg-[#EFE8D8] text-[#77846E]"
                    : "mt-2 p-2 rounded bg-[#77846E] text-[#EFE8D8]";
                  return (
                    <div
                      key={pkg.id}
                      onClick={() =>
                        handlePackageSelect(pkg.name, pkg.defaults)
                      }
                      className={`p-6 rounded-lg cursor-pointer transition transform hover:scale-105 ${
                      isSelected
                          ? "bg-[#93A387] text-[#EFE8D8] shadow-2xl border-2 border-[#77846E]"
                          : "bg-[#EFE8D8] text-[#77846E] border-2 border-[#77846E]"
                      }`}
                    >
                      <h3 className="text-xl font-bold mb-2">
                        {pkg.name}
                      </h3>
                      <div className={priceClass}>
                        <span className="text-sm">од </span>
                        <span className="text-2xl">{pkg.price}</span>
                      </div>
                      <ul className="space-y-1 mt-4">
                        {pkg.details.map((detail, index) => (
                          <li
                            key={index}
                            className="flex items-center text-base"
                          >
                            <FaCheck className="mr-2 text-lg flex-shrink-0 self-center" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-10">
              <h2 className="text-2xl font-semibold mb-4">
                Дополнителни информации
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Име и презиме"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="p-3 bg-transparent border-b-2 border-[#77846E] focus:outline-none
                    text-lg"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Телефонски број"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="p-3 bg-transparent border-b-2 border-[#77846E] focus:outline-none
                    text-lg"
                />
                <DatePicker
                  selected={formData.date}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="DD/MM/YYYY"
                  className="p-3 bg-transparent border-b-2 border-[#77846E] focus:outline-none
                    text-lg w-full placeholder:text-[#93A387] placeholder:opacity-100"
                  calendarClassName="!bg-white !rounded-lg !shadow-lg !border-none"
                  popperClassName="!z-50"
                  showPopperArrow={false}
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                />
              </div>
            </div>

            {/* Add-ons Section */}
            <div className="mt-10">
              <h2 className="text-2xl font-semibold mb-4">
                Додатоци
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Extra Guests */}
                <div>
                  <label className="block mb-2">Број на гости:</label>
                  <div className="flex items-center space-x-2">
                    <div className="border-2 border-[#77846E] bg-[#EFE8D8] text-[#77846E] p-2 rounded">
                      <select
                        name="Guests"
                        value={formData.Guests}
                        onChange={handleChange}
                        className="bg-transparent text-lg focus:outline-none"
                      >
                        {[
                          20, 30, 40, 50, 60, 70, 80, 90, 100, 110,
                          120, 130, 140, 150, 160, 170, 180, 190, 200,
                        ].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Time (Hours) */}

                <div>
                  <label className="block mb-2">
                    Време (часови):
                  </label>
                  <div className="flex items-center space-x-2">
                    <div className="border-2 border-[#77846E] bg-[#EFE8D8] text-[#77846E] p-2 rounded">
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="bg-transparent text-lg focus:outline-none"
                      >
                        {formData.package === "Основен пакет" ? (
                          <>
                            <option value={4}>4</option>
                            <option value={6}>6</option>
                            <option value="unlimited">
                              Неограничено
                            </option>
                          </>
                        ) : formData.package === "Стандард пакет" ? (
                          <>
                            <option value={6}>6</option>
                            <option value="unlimited">
                              Неограничено
                            </option>
                          </>
                        ) : (
                          <>
                            <option value="unlimited">
                              Неограничено
                            </option>
                          </>
                        )}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Drinks per Guest */}
                <div>
                  <label className="block mb-2">
                    Пијачки по гостин:
                  </label>
                  <div className="flex items-center space-x-2">
                    <div className="border-2 border-[#77846E] bg-[#EFE8D8] text-[#77846E] p-2 rounded">
                      <select
                        name="drinksPerGuest"
                        value={formData.drinksPerGuest}
                        onChange={handleChange}
                        className="bg-transparent text-lg focus:outline-none"
                      >
                        {formData.package === "Основен пакет" ? (
                          <>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value="unlimited">
                              Неограничени
                            </option>
                          </>
                        ) : formData.package === "Стандард пакет" ? (
                          <>
                            <option value={4}>4</option>
                            <option value="unlimited">
                              Неограничени
                            </option>
                          </>
                        ) : formData.package === "Премиум пакет" ? (
                          <option value="unlimited">
                            Неограничени
                          </option>
                        ) : null}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Bar Menu (Disabled - fixed based on package) */}
                <div>
                  <label className="block mb-2">Бар мени:</label>
                  <div className="border-2 border-[#77846E] bg-[#EFE8D8] text-[#77846E] p-2 rounded w-30">
                    <input
                      type="text"
                      name="barMenu"
                      value={formData.barMenu}
                      onChange={handleChange}
                      className="bg-transparent text-lg focus:outline-none"
                      disabled
                    />
                  </div>
                </div>

                {/* Extra Bartenders */}
                <div>
                  <label className="block mb-2">
                    Број на бармени:
                  </label>
                  <div className="border-2 border-[#77846E] bg-[#EFE8D8] text-[#77846E] p-2 rounded w-14">
                    <select
                      name="extraBartenders"
                      value={formData.extraBartenders}
                      onChange={handleChange}
                      className="bg-transparent text-lg focus:outline-none"
                    >
                      {(() => {
                        let options = [];
                        if (formData.package === "Основен пакет") {
                          options = [1, 2, 3];
                        } else if (
                          formData.package === "Стандард пакет"
                        ) {
                          options = [2, 3];
                        } else if (
                          formData.package === "Премиум пакет"
                        ) {
                          options = [3];
                        }
                        return options.map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ));
                      })()}
                    </select>
                  </div>
                </div>
                {/* Extra Waiters */}
                <div>
                  <label className="block mb-2">
                    Број на келнери:
                  </label>
                  <div className="border-2 border-[#77846E] bg-[#EFE8D8] text-[#77846E] p-2 rounded w-14">
                    <select
                      name="extraWaiters"
                      value={formData.extraWaiters}
                      onChange={handleChange}
                      className="bg-transparent text-lg focus:outline-none"
                    >
                      {(() => {
                        let options = [];
                        if (formData.package === "Основен пакет") {
                          options = [0, 1, 2];
                        } else if (
                          formData.package === "Стандард пакет"
                        ) {
                          options = [1, 2];
                        } else if (
                          formData.package === "Премиум пакет"
                        ) {
                          options = [2];
                        }
                        return options.map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ));
                      })()}
                    </select>
                  </div>
                </div>
                {/* Glass Cups (Checkbox) */}
                {/* Glass Glasses */}
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="glassGlasses"
                      checked={
                        formData.package === "Премиум пакет"
                          ? true
                          : formData.glassGlasses
                      }
                      onChange={handleChange}
                      className="mr-2"
                      disabled={formData.package === "Премиум пакет"}
                    />
                    Стаклени чаши
                  </label>
                </div>

                {/* Non-Alcoholic Cocktails */}
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="nonAlcoholicCocktails"
                      checked={
                        formData.package === "Премиум пакет" ||
                        formData.package === "Стандард пакет"
                          ? true
                          : formData.nonAlcoholicCocktails
                      }
                      onChange={handleChange}
                      className="mr-2"
                      disabled={
                        formData.package === "Премиум пакет" ||
                        formData.package === "Стандард пакет"
                      }
                    />
                    Безалкохолни коктели
                  </label>
                </div>

                {/* Champagne Station (Checkbox) */}
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="champagneStation"
                      checked={formData.champagneStation}
                      onChange={handleChange}
                      className="mr-2"
                      disabled={formData.package === "Премиум пакет"}
                    />
                    Шампањ станица
                  </label>
                </div>
              </div>
            </div>

            {/* Total Cost Display */}
            <div className="mt-6 text-center text-2xl font-bold">
              Вкупно: {totalCost.toLocaleString()} ден
            </div>

            {/* Submit Button (wrapped in Modal.Open) */}
            <Modal.Open opens="success">
              <button
                type="submit"
                className="w-full py-4 mt-8 bg-[#77846E] text-[#EFE8D8] rounded-lg text-lg
                  hover:bg-[#93A387] transition flex items-center justify-center"
              >
                {isLoading ? <Loader /> : "Испрати резервација"}
              </button>
            </Modal.Open>
          </form>

          {/* Modal Window */}
          {showModal && (
            <Modal.Window name="success">
              <div className="text-center">
                <h2 className="text-xl font-semibold">
                  Успешно испратена резервација!
                </h2>
                <p className="mt-2">
                  Вашето барање е пратено кон тимот на Кантина Трејлер
                  Бар. Ќе добиете повик во наредните 24 часа со готова
                  персонализирана понуда!
                </p>
                <img
                  src="Icons/prikolce kopce ikona-09.svg"
                  alt="Trailer"
                  className="w-24 mx-auto mt-6"
                />
              </div>
            </Modal.Window>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Booking;
