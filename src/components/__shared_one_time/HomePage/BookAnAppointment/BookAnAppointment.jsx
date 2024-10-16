"use client";
import { useState } from "react";
import "./BookAnAppointment.css";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { AiOutlineDown } from "react-icons/ai";

// date picker
import { AiOutlineCalendar } from "react-icons/ai";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// hour picker
import { AiOutlineClockCircle } from "react-icons/ai";
import TimePicker from "react-time-picker";

const BookAnAppointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div id="contact">
      {/* small device  */}
      <div className="block md:hidden">
        <div className="px-[20px]">
          <iframe
            className="w-full h-[240px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.181050093408!2d-79.66431002382761!3d43.56984237110612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b41ac57881c31%3A0xe4671580386bf3cc!2sLavish%20Lux%20Nails%20%26%20Spa%20Mississauga!5e1!3m2!1sen!2sbd!4v1725986676475!5m2!1sen!2sbd"
            width="370"
            height="240"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="bookAnAppointment__bg -mt-[50px]">
          <h5 className="font-family-secondary text-3xl font-normal leading-normal text-white pt-[80px] pb-[25px] pl-[30px]">
            Book An Appointment
          </h5>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* services */}

            <div className="relative px-[20px]">
              <label
                className="text-lg font-semibold text-white leading-normal"
                htmlFor="services"
              >
                Services
              </label>{" "}
              <br />
              <div className="relative">
                <select
                  className="mt-[10px] text-dark-200 w-full py-[10px] px-[20px] pr-[40px] input__bg appearance-none"
                  {...register("services", { required: true })}
                >
                  <option className="text-xs text-dark-200" value="">
                    Please Select Your Services
                  </option>
                  <option
                    className="text-xs !hover:bg-red-500"
                    value="service1"
                  >
                    Pedicure
                  </option>
                  <option className="text-xs" value="service2">
                    Artificial Nails
                  </option>
                  <option className="text-xs" value="service3">
                    Additional Services
                  </option>
                  <option className="text-xs" value="service4">
                    Manicure
                  </option>
                  <option className="text-xs" value="service5">
                    Waxing
                  </option>
                  <option className="text-xs" value="service6">
                    Design
                  </option>
                </select>

                <AiOutlineDown className="absolute top-[60%] right-[20px] transform -translate-y-[50%] pointer-events-none" />
              </div>
              {errors.services && <span>This field is required</span>}
            </div>

            {/* day */}

            <div className="px-[20px] pt-[20px] relative">
              <label
                className="text-lg font-semibold text-white leading-normal"
                htmlFor="day"
              >
                Day
              </label>
              <br />
              <div className="w-full relative mt-[10px] input__bg">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  placeholderText="Select Day"
                  className="py-[10px] px-[20px] outline-none"
                  dateFormat="MM/dd/yyyy"
                  inputClassName="placeholder-dark-50"
                />
                <AiOutlineCalendar
                  className="absolute right-[10px] top-[50%] transform -translate-y-[50%] text-yellow-600 cursor-pointer"
                  onClick={() =>
                    document
                      .querySelector(".react-datepicker__input-container input")
                      .focus()
                  }
                />
              </div>

              {errors?.day && <span>This field is required</span>}
            </div>

            {/* hour */}

            <div className="px-[20px] pt-[20px] relative">
              <label
                className="text-lg font-semibold text-white leading-normal"
                htmlFor="hour"
              >
                Hour
              </label>
              <br />
              <div className="relative mt-[10px]">
                <TimePicker
                  onChange={setSelectedTime}
                  value={selectedTime}
                  clockIcon={null}
                  className="w-full py-[10px] px-[20px] pr-[40px] input__bg"
                  format="HH:mm:ss"
                  disableClock={true}
                  clearIcon={null}
                />
                <AiOutlineClockCircle
                  className="absolute right-[10px] top-[50%] transform -translate-y-[50%] text-yellow-600 cursor-pointer"
                  onClick={() =>
                    document
                      .querySelector(".react-time-picker__wrapper input")
                      .focus()
                  }
                />
              </div>
              {errors?.hour && <span>This field is required</span>}
            </div>

            {/* name */}
            <div className="px-[20px] pt-[20px]">
              <label
                className="text-lg font-semibold text-white leading-normal"
                htmlFor="name"
              >
                Name
              </label>{" "}
              <br />
              <input
                className="mt-[10px] w-full py-[10px] px-[20px] input__bg placeholder-dark-50"
                placeholder="Enter Your Name"
                {...register("name", { required: true })}
              />
              {errors.name && <span>This field is required</span>}
            </div>
            {/* phone */}
            <div className="px-[20px] pt-[20px]">
              <label
                className="text-lg font-semibold text-white leading-normal"
                htmlFor="phone"
              >
                Phone
              </label>{" "}
              <br />
              <input
                className="mt-[10px] w-full py-[10px] px-[20px] input__bg placeholder-dark-50"
                placeholder="Enter Your Number"
                {...register("phone", { required: true })}
              />
              {errors.phone && <span>This field is required</span>}
            </div>
            {/* email */}
            <div className="px-[20px] pt-[20px]">
              <label
                className="text-lg font-semibold text-white leading-normal"
                htmlFor="email"
              >
                Email
              </label>{" "}
              <br />
              <input
                className="mt-[10px] w-full py-[10px] px-[20px] input__bg placeholder-dark-50"
                placeholder="Enter Your Email"
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            </div>
            {/* message */}
            <div className="px-[20px] pt-[20px]">
              <label
                className="text-lg font-semibold text-white leading-normal"
                htmlFor="mesage"
              >
                Message
              </label>{" "}
              <br />
              <textarea
                className="mt-[10px] w-full py-[10px] px-[20px] input__bg placeholder-dark-50"
                placeholder="Enter Your Message"
                {...register("message", { required: true })}
              />
              {errors.message && <span>This field is required</span>}
            </div>

            <div className="flex justify-center items-center pt-[35px] pb-[38px]">
              <Link
                rel="nofollow"
                target="_blank"
                href="https://www.fresha.com/a/lavish-lux-nails-spa-mississauga-mississauga-1100-burnhamthorpe-road-west-n55ng2qi/all-offer?menu=true"
              >
                <button className="bg-primary hover:bg-primary text-base font-semibold text-white py-[8px] px-[20px] flex items-center space-x-3 clip-path-custom">
                  <span>Book Now</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="22"
                    viewBox="0 0 34 22"
                    fill="none"
                  >
                    <path
                      d="M34 10.625C29.3056 10.625 25.5 15.382 25.5 21.25"
                      stroke="white"
                    />
                    <path d="M0 10.625H34" stroke="white" />
                    <path
                      d="M25.5 0C25.5 5.868 29.3056 10.6249 34 10.625"
                      stroke="white"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* large device  */}
      <div className="hidden md:block">
        <div className="">
          <div className="grid grid-cols-3">
            <div className="w-full col-span-2 full__section_l_p bookAnAppointment__bg_large py-[20px] 5xl:py-[25px]">
              <h5 className="font-family-secondary text-[42px] xl:text-[55px] 5xl:text-[75px] font-normal text-white leading-normal">
                Book An Appointment
              </h5>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-[516px] 2xl:w-[616px]"
              >
                {/* first div service */}
                <div className="relative">
                  <label
                    className="text-base 5xl:text-lg font-semibold leading-normal text-white"
                    htmlFor="services"
                  >
                    Services
                  </label>{" "}
                  <br />
                  <div className="relative">
                    <select
                      onFocus="this.size=7;"
                      onBlur="this.size=0;"
                      onChange="this.size=1; this.blur()"
                      className="mt-[10px] text-dark-200 w-full py-[10px] px-[20px] pr-[40px] input__bg appearance-none"
                      {...register("services", { required: true })}
                    >
                      <option className="text-xs text-dark-200" value="">
                        Please Select Your Services
                      </option>
                      <option className="text-xs" value="service1">
                        Pedicure
                      </option>
                      <option className="text-xs" value="service2">
                        Artificial Nails
                      </option>
                      <option className="text-xs" value="service3">
                        Additional Services
                      </option>
                      <option className="text-xs" value="service4">
                        Manicure
                      </option>
                      <option className="text-xs" value="service5">
                        Waxing
                      </option>
                      <option className="text-xs" value="service6">
                        Design
                      </option>
                    </select>
                    <AiOutlineDown className="absolute top-[60%] right-[20px] transform -translate-y-[50%] pointer-events-none" />
                  </div>
                  {errors.services && <span>This field is required</span>}
                </div>

                {/* second div  */}
                <div className="w-full flex justify-between gap-[15px] pt-[10px] 5xl:pt-[15px]">
                  {/* day */}
                  <div className="w-1/2 relative">
                    <label
                      className="text-base 5xl:text-lg font-semibold leading-normal text-white"
                      htmlFor="day"
                    >
                      Day
                    </label>
                    <br />
                    <div className="w-full relative mt-[10px] input__bg">
                      {/* Date Input Field */}
                      <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        placeholderText="Select Day"
                        className="py-[10px] pl-[20px] rounded-lg outline-none "
                        dateFormat="MM/dd/yyyy"
                      />
                      {/* Calendar Icon Inside Input Field */}
                      <AiOutlineCalendar
                        className="absolute right-[10px] top-[50%] transform -translate-y-[50%] text-yellow-600 cursor-pointer"
                        onClick={() =>
                          document
                            .querySelector(
                              ".react-datepicker__input-container input"
                            )
                            .focus()
                        }
                      />
                    </div>
                    {errors?.day && <span>This field is required</span>}
                  </div>
                  {/* hour */}
                  <div className="w-1/2 relative">
                    <label
                      className="text-base 5xl:text-lg font-semibold leading-normal text-white"
                      htmlFor="hour"
                    >
                      Hour
                    </label>
                    <br />
                    <div className="relative mt-[10px]">
                      <TimePicker
                        onChange={setSelectedTime}
                        value={selectedTime}
                        clockIcon={null}
                        className="w-full py-[10px] px-[20px] pr-[40px] input__bg"
                        format="HH:mm:ss"
                        disableClock={true}
                        clearIcon={null}
                      />
                      <AiOutlineClockCircle
                        className="absolute right-[10px] top-[50%] transform -translate-y-[50%] text-yellow-600 cursor-pointer"
                        onClick={() =>
                          document
                            .querySelector(".react-time-picker__wrapper input")
                            .focus()
                        }
                      />
                    </div>
                    {errors?.hour && <span>This field is required</span>}
                  </div>
                </div>

                {/* third div  */}
                <div className="w-full flex justify-between gap-[15px]  pt-[10px] 5xl:pt-[15px]">
                  {/* name */}
                  <div className="w-1/2 ">
                    <label
                      className="text-base 5xl:text-lg font-semibold leading-normal text-white"
                      htmlFor="name"
                    >
                      Name
                    </label>{" "}
                    <br />
                    <input
                      className="mt-[10px] w-full py-[10px] px-[20px] input__bg placeholder-dark-200"
                      placeholder="Enter Your Name"
                      {...register("name", { required: true })}
                    />
                    {errors.name && <span>This field is required</span>}
                  </div>
                  {/* phone */}
                  <div className="w-1/2">
                    <label
                      className="text-base 5xl:text-lg font-semibold leading-normal text-white"
                      htmlFor="phone"
                    >
                      Phone
                    </label>{" "}
                    <br />
                    <input
                      className="mt-[10px] w-full py-[10px] px-[20px] input__bg placeholder-dark-200"
                      placeholder="Enter Your Number"
                      {...register("phone", { required: true })}
                    />
                    {errors.phone && <span>This field is required</span>}
                  </div>
                </div>
                {/* email */}
                <div className=" pt-[10px] 5xl:pt-[15px]">
                  <label
                    className="text-base 5xl:text-lg font-semibold leading-normal text-white"
                    htmlFor="email"
                  >
                    Email
                  </label>{" "}
                  <br />
                  <input
                    className="mt-[10px] w-full py-[10px] px-[20px] input__bg placeholder-dark-200"
                    placeholder="Enter Your Email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && <span>This field is required</span>}
                </div>
                {/* message */}
                <div className=" pt-[10px] 5xl:pt-[15px]">
                  <label
                    className="text-base 5xl:text-lg font-semibold leading-normal text-white"
                    htmlFor="mesage"
                  >
                    Message
                  </label>{" "}
                  <br />
                  <textarea
                    className="mt-[10px] w-full py-[10px] px-[20px] input__bg placeholder-dark-200"
                    placeholder="Enter Your Message"
                    {...register("message", { required: true })}
                  />
                  {errors.message && <span>This field is required</span>}
                </div>

                <div className="flex justify-start items-center pt-[25px] 5xl:pt-[35px]">
                  <Link
                    rel="nofollow"
                    target="_blank"
                    href="https://www.fresha.com/a/lavish-lux-nails-spa-mississauga-mississauga-1100-burnhamthorpe-road-west-n55ng2qi/all-offer?menu=true"
                  >
                    <button className="bg-primary text-base font-semibold text-white py-[8px] px-[20px] flex items-center space-x-3 clip-path-custom">
                      <span>Book Now</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="22"
                        viewBox="0 0 34 22"
                        fill="none"
                      >
                        <path
                          d="M34 10.625C29.3056 10.625 25.5 15.382 25.5 21.25"
                          stroke="white"
                        />
                        <path d="M0 10.625H34" stroke="white" />
                        <path
                          d="M25.5 0C25.5 5.868 29.3056 10.6249 34 10.625"
                          stroke="white"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </form>
            </div>

            <div className="col-span-1 flex items-center justify-end -ml-[220px]">
              <iframe
                className="w-[450px] xl:w-[550px] 2xl:w-[650px] 3xl:w-[750px] 4xl:w-[800px] 5xl:w-[868px] 5xl:h-[470px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.181050093408!2d-79.66431002382761!3d43.56984237110612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b41ac57881c31%3A0xe4671580386bf3cc!2sLavish%20Lux%20Nails%20%26%20Spa%20Mississauga!5e1!3m2!1sen!2sbd!4v1725986676475!5m2!1sen!2sbd"
                width="868"
                height="470"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAnAppointment;
