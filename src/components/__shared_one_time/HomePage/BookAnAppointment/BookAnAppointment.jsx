"use client";

import "./BookAnAppointment.css";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { AiOutlineDown } from "react-icons/ai";

import { AiOutlineCalendar } from "react-icons/ai";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import TimePicker from "react-time-picker";

import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { useState } from "react";

const BookAnAppointment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const emailTemplate = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2>New Message</h2>
      <p><strong>Name:</strong> ${data?.name}</p>
      <p><strong>Phone:</strong> ${data?.phone}</p>
      <p><strong>Email:</strong> <a href="mailto:${data?.email}">${data?.email}</a></p>
      <p><strong>Services:</strong> ${data?.services}</p>
      <p><strong>Day:</strong> ${data?.day}</p>
      <p><strong>Hour:</strong> ${data?.hour}</p>
      <p><strong>Message:</strong> ${data?.message}</p>
    </div>
  `;

    const payload = {
      projectFor: "manager@lavishluxnailsandspa.com",
      name: data?.name,
      email: data?.email,
      message: emailTemplate,
    };

    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/send-email`;

    try {
      setIsLoading(true);
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(`Failed to send! Please try again.`);
        return;
      }

      // Success handling
      alert("Successfully booked!");
      reset();
      console.log("Response data:", result);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(`Failed to send! Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contact">
      {/* small device  */}
      <div className="container block xl:hidden">
        <div className="px-[20px]">
          <iframe
            className="w-full h-[240px] lg:h-[295px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.181050093408!2d-79.66431002382761!3d43.56984237110612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b41ac57881c31%3A0xe4671580386bf3cc!2sLavish%20Lux%20Nails%20%26%20Spa%20Mississauga!5e1!3m2!1sen!2sbd!4v1725986676475!5m2!1sen!2sbd"
            width="370"
            height="240"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="bookAnAppointment__bg -mt-[50px]">
          <h5 className="font-family-secondary text-3xl lg:text-[75px] font-normal leading-normal text-white pt-[80px] lg:pt-[50px] pb-[25px] lg:pb-0 pl-[30px] lg:pl-[52px]">
            Book An Appointment
          </h5>
          <form onSubmit={handleSubmit(onSubmit)} className="px-0 lg:px-[32px]">
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
                    value="Pedicure"
                  >
                    Pedicure
                  </option>
                  <option className="text-xs" value="Artificial Nails">
                    Artificial Nails
                  </option>
                  <option className="text-xs" value="Additional Services">
                    Additional Services
                  </option>
                  <option className="text-xs" value="Manicure">
                    Manicure
                  </option>
                  <option className="text-xs" value="Waxing">
                    Waxing
                  </option>
                  <option className="text-xs" value="Design">
                    Design
                  </option>
                </select>

                <AiOutlineDown className="absolute top-[60%] right-[20px] transform -translate-y-[50%] pointer-events-none" />
              </div>
              {errors.services && <span>This field is required</span>}
            </div>

            {/* Date Picker */}
            <div className="px-[20px] pt-[20px] relative">
              <label
                className="text-base 5xl:text-lg font-semibold leading-normal text-white"
                htmlFor="day"
              >
                Day
              </label>
              <br />
              <Controller
                name="day"
                control={control}
                rules={{ required: "This field is required" }}
                render={({ field }) => (
                  <div className="w-full relative mt-[10px] input__bg">
                    <DatePicker
                      {...field}
                      placeholderText="Select Day"
                      className="py-[10px] pl-[20px] rounded-lg outline-none w-full"
                      dateFormat="MM/dd/yyyy"
                      selected={field.value}
                    />
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
                )}
              />
              {errors.day && (
                <span className="text-red-500">{errors.day.message}</span>
              )}
            </div>

            {/* Time Picker */}
            <div className="px-[20px] pt-[20px] relative">
              <label
                className="text-base 5xl:text-lg font-semibold leading-normal text-white"
                htmlFor="hour"
              >
                Hour
              </label>
              <br />
              <Controller
                name="hour"
                control={control}
                rules={{ required: "This field is required" }}
                render={({ field }) => (
                  <div className="relative mt-[10px]">
                    <TimePicker
                      {...field}
                      className="w-full py-[10px] px-[20px] pr-[40px] input__bg"
                      format="HH:mm"
                      disableClock={true}
                      value={field.value}
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
                )}
              />
              {errors.hour && (
                <span className="text-red-500">{errors.hour.message}</span>
              )}
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
                <button
                  disabled={isLoading}
                  className="bg-primary hover:bg-primary text-base font-semibold text-white py-[8px] px-[20px] flex items-center space-x-3 clip-path-custom"
                >
                  {isLoading ? (
                    "Booking..."
                  ) : (
                    <>
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
                    </>
                  )}
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* large device  */}
      <div className="hidden xl:block">
        <div className="">
          <div className="grid grid-cols-3">
            <div
              data-aos="fade-right"
              className="w-full col-span-2 full__section_l_p bookAnAppointment__bg_large py-[20px] 5xl:py-[25px]"
            >
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
                      // onFocus="this.size=7;"
                      // onBlur="this.size=0;"
                      // onChange="this.size=1; this.blur()"
                      className="mt-[10px] text-dark-200 w-full py-[10px] px-[20px] pr-[40px] input__bg appearance-none"
                      {...register("services", { required: true })}
                    >
                      <option className="text-xs text-dark-200" value="">
                        Please Select Your Services
                      </option>
                      <option className="text-xs" value="Pedicure">
                        Pedicure
                      </option>
                      <option className="text-xs" value="Artificial Nails">
                        Artificial Nails
                      </option>
                      <option className="text-xs" value="Additional Services">
                        Additional Services
                      </option>
                      <option className="text-xs" value="Manicure">
                        Manicure
                      </option>
                      <option className="text-xs" value="Waxing">
                        Waxing
                      </option>
                      <option className="text-xs" value="Design">
                        Design
                      </option>
                    </select>
                    <AiOutlineDown className="absolute top-[60%] right-[20px] transform -translate-y-[50%] pointer-events-none" />
                  </div>
                  {errors.services && <span>This field is required</span>}
                </div>

                {/* second div  */}

                <div className="w-full flex justify-between gap-[15px] pt-[10px] 5xl:pt-[15px]">
                  {/* Date Picker */}
                  <div className="w-1/2 relative">
                    <label
                      className="text-base 5xl:text-lg font-semibold leading-normal text-white"
                      htmlFor="day"
                    >
                      Day
                    </label>
                    <br />
                    <Controller
                      name="day"
                      control={control}
                      rules={{ required: "This field is required" }}
                      render={({ field }) => (
                        <div className="w-full relative mt-[10px] input__bg">
                          <DatePicker
                            {...field}
                            placeholderText="Select Day"
                            className="py-[10px] pl-[20px] rounded-lg outline-none w-full"
                            dateFormat="MM/dd/yyyy"
                            selected={field.value}
                          />
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
                      )}
                    />
                    {errors.day && (
                      <span className="text-red-500">{errors.day.message}</span>
                    )}
                  </div>

                  {/* Time Picker */}
                  <div className="w-1/2 relative">
                    <label
                      className="text-base 5xl:text-lg font-semibold leading-normal text-white"
                      htmlFor="hour"
                    >
                      Hour
                    </label>
                    <br />
                    <Controller
                      name="hour"
                      control={control}
                      rules={{ required: "This field is required" }}
                      render={({ field }) => (
                        <div className="relative mt-[10px]">
                          <TimePicker
                            {...field}
                            className="w-full py-[10px] px-[20px] pr-[40px] input__bg"
                            format="HH:mm"
                            disableClock={true}
                            value={field.value}
                          />
                          <AiOutlineClockCircle
                            className="absolute right-[10px] top-[50%] transform -translate-y-[50%] text-yellow-600 cursor-pointer"
                            onClick={() =>
                              document
                                .querySelector(
                                  ".react-time-picker__wrapper input"
                                )
                                .focus()
                            }
                          />
                        </div>
                      )}
                    />
                    {errors.hour && (
                      <span className="text-red-500">
                        {errors.hour.message}
                      </span>
                    )}
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

            <div
              data-aos="fade-left"
              className="col-span-1 flex items-center justify-end -ml-[220px]"
            >
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
