"use client";
import { AiOutlineCalendar } from "react-icons/ai";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./BookAnAppointment.css";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineDown } from "react-icons/ai";

const BookAnAppointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
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
        <div className="px-[20px] ">
          <iframe
            className="w-full h-[240px]"
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d92504.42903421116!2d-79.74413579894721!3d43.569812810480904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x882b41ac57881c31%3A0xe4671580386bf3cc!2s1100%20Burnhamthorpe%20Rd%20W%20Unit%2016%2C%20Mississauga%2C%20ON%20L5C%204G4%2C%20Canada!3m2!1d43.5698424!2d-79.6617351!5e0!3m2!1sen!2sbd!4v1725532208708!5m2!1sen!2sbd"
            width="370"
            height="240"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="bookAnAppointment__bg -mt-[50px]">
          <h5 className="font-family-secondary text-3xl font-normal text-primary pt-[80px] pb-[25px] pl-[30px]">
            Book An Appointment
          </h5>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* services */}

            <div className="relative px-[20px]">
              <label
                className="text-lg font-semibold text-dark-50"
                htmlFor="services"
              >
                Services
              </label>{" "}
              <br />
              <div className="relative">
                <select
                  className="mt-[10px] w-full py-[10px] px-[20px] pr-[40px] input__bg appearance-none"
                  {...register("services", { required: true })}
                >
                  <option className="text-xs" value="">
                    Please Select Your Services
                  </option>
                  <option className="text-xs" value="service1">
                    Service 1
                  </option>
                  <option className="text-xs" value="service2">
                    Service 2
                  </option>
                  <option className="text-xs" value="service3">
                    Service 3
                  </option>
                  {/* Add more options as needed */}
                </select>
                {/* Dropdown Icon */}
                <AiOutlineDown className="absolute top-[60%] right-[20px] transform -translate-y-[50%] pointer-events-none" />
              </div>
              {errors.services && <span>This field is required</span>}
            </div>

            {/* day */}

            <div className="px-[20px] pt-[20px] relative">
      <label className="text-lg font-semibold text-dark-50" htmlFor="day">
        Day
      </label>
      <br />
      <div className="w-full relative mt-[10px] input__bg">
        {/* Date Input Field */}
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Select Day"
          className="py-[10px] px-[20px] outline-none"
          dateFormat="MM/dd/yyyy"
        />
        {/* Calendar Icon Inside Input Field */}
        <AiOutlineCalendar
          className="absolute right-[10px] top-[50%] transform -translate-y-[50%] text-yellow-600 cursor-pointer"
          onClick={() => document.querySelector(".react-datepicker__input-container input").focus()}
        />
      </div>
      {errors?.day && <span>This field is required</span>}
    </div>

            {/* hour */}
            <div className="px-[20px] pt-[20px]">
              <label
                className="text-lg font-semibold text-dark-50"
                htmlFor="hour"
              >
                Hour
              </label>{" "}
              <br />
              <input
                className="mt-[10px] w-full py-[10px] px-[20px] input__bg"
                placeholder="--:--:--"
                {...register("hour", { required: true })}
              />
              {errors.hour && <span>This field is required</span>}
            </div>
            {/* name */}
            <div className="px-[20px] pt-[20px]">
              <label
                className="text-lg font-semibold text-dark-50"
                htmlFor="name"
              >
                Name
              </label>{" "}
              <br />
              <input
                className="mt-[10px] w-full py-[10px] px-[20px] input__bg"
                placeholder="Enter Your Name"
                {...register("name", { required: true })}
              />
              {errors.name && <span>This field is required</span>}
            </div>
            {/* phone */}
            <div className="px-[20px] pt-[20px]">
              <label
                className="text-lg font-semibold text-dark-50"
                htmlFor="phone"
              >
                Phone
              </label>{" "}
              <br />
              <input
                className="mt-[10px] w-full py-[10px] px-[20px] input__bg"
                placeholder="Enter Your Number"
                {...register("phone", { required: true })}
              />
              {errors.phone && <span>This field is required</span>}
            </div>
            {/* email */}
            <div className="px-[20px] pt-[20px]">
              <label
                className="text-lg font-semibold text-dark-50"
                htmlFor="email"
              >
                Email
              </label>{" "}
              <br />
              <input
                className="mt-[10px] w-full py-[10px] px-[20px] input__bg"
                placeholder="Enter Your Email"
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            </div>
            {/* message */}
            <div className="px-[20px] pt-[20px]">
              <label
                className="text-lg font-semibold text-dark-50"
                htmlFor="mesage"
              >
                Message
              </label>{" "}
              <br />
              <textarea
                className="mt-[10px] w-full py-[10px] px-[20px] input__bg"
                placeholder="Enter Your Message"
                {...register("message", { required: true })}
              />
              {errors.message && <span>This field is required</span>}
            </div>

            <div className="flex justify-center items-center pt-[35px] pb-[38px]">
              {/* <Link
                href="https://www.fresha.com/a/lavish-lux-nails-spa-mississauga-mississauga-1100-burnhamthorpe-road-west-n55ng2qi/all-offer?menu=true"
                rel="nofollow"
                target="_blank"
              >
                <button
                  type="submit"
                  className="flex items-center gap-[5px] text-sm font-medium text-white bg-secondary py-[6px] px-[17px] rounded-lg"
                >
                  Book Now{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="15"
                    viewBox="0 0 22 15"
                    fill="none"
                  >
                    <path
                      d="M21.1984 7.52539C18.2713 7.52539 15.8984 10.4915 15.8984 14.1504"
                      stroke="white"
                    />
                    <path d="M0 7.52539H21.2" stroke="white" />
                    <path
                      d="M15.8984 0.900391C15.8984 4.55926 18.2713 7.52533 21.1984 7.52539"
                      stroke="white"
                    />
                  </svg>
                </button>
              </Link> */}
              <Link
                rel="nofollow"
                target="_blank"
                href="https://www.fresha.com/a/lavish-lux-nails-spa-mississauga-mississauga-1100-burnhamthorpe-road-west-n55ng2qi/all-offer?menu=true"
              >
                <Image
                  src="/assets/buttons/book_now_book_appointment.png"
                  alt="book now"
                  width={129}
                  height={32}
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
      {/* medium device  */}
      <div className="hidden lg:block xl:hidden">
        <div className="px-[20px] mx-[135px]">
          <iframe
            className="w-full h-[240px]"
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d92504.42903421116!2d-79.74413579894721!3d43.569812810480904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x882b41ac57881c31%3A0xe4671580386bf3cc!2s1100%20Burnhamthorpe%20Rd%20W%20Unit%2016%2C%20Mississauga%2C%20ON%20L5C%204G4%2C%20Canada!3m2!1d43.5698424!2d-79.6617351!5e0!3m2!1sen!2sbd!4v1725532208708!5m2!1sen!2sbd"
            width="370"
            height="240"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="bookAnAppointment__bg -mt-[50px] mx-[100px]">
          <h5 className="font-family-secondary text-3xl font-normal text-primary pt-[80px] pb-[25px] pl-[30px]">
            Book An Appointment
          </h5>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* services */}
            <div className="px-[30px]">
              <label
                className="text-lg font-semibold text-dark-50"
                htmlFor="services"
              >
                Services
              </label>{" "}
              <br />
              <input
                className="mt-[10px] w-full py-[19px] px-[29px] input__bg"
                placeholder="Please Select Your Services"
                {...register("services", { required: true })}
              />
              {errors.services && <span>This field is required</span>}
            </div>
            {/* day */}
            <div className="px-[30px] pt-[20px]">
              <label
                className="text-lg font-semibold text-dark-50"
                htmlFor="day"
              >
                Day
              </label>{" "}
              <br />
              <input
                className="mt-[10px] w-full py-[19px] px-[29px] input__bg"
                placeholder="Select Day"
                {...register("day", { required: true })}
              />
              {errors.day && <span>This field is required</span>}
            </div>
            {/* hour */}
            <div className="px-[30px] pt-[20px]">
              <label
                className="text-lg font-semibold text-dark-50"
                htmlFor="hour"
              >
                Hour
              </label>{" "}
              <br />
              <input
                className="mt-[10px] w-full py-[19px] px-[29px] input__bg"
                placeholder="--:--:--"
                {...register("hour", { required: true })}
              />
              {errors.hour && <span>This field is required</span>}
            </div>
            {/* name */}
            <div className="px-[30px] pt-[20px]">
              <label
                className="text-lg font-semibold text-dark-50"
                htmlFor="name"
              >
                Name
              </label>{" "}
              <br />
              <input
                className="mt-[10px] w-full py-[19px] px-[29px] input__bg"
                placeholder="Enter Your Name"
                {...register("name", { required: true })}
              />
              {errors.name && <span>This field is required</span>}
            </div>
            {/* phone */}
            <div className="px-[30px] pt-[20px]">
              <label
                className="text-lg font-semibold text-dark-50"
                htmlFor="phone"
              >
                Phone
              </label>{" "}
              <br />
              <input
                className="mt-[10px] w-full py-[19px] px-[29px] input__bg"
                placeholder="Enter Your Number"
                {...register("phone", { required: true })}
              />
              {errors.phone && <span>This field is required</span>}
            </div>
            {/* email */}
            <div className="px-[30px] pt-[20px]">
              <label
                className="text-lg font-semibold text-dark-50"
                htmlFor="email"
              >
                Email
              </label>{" "}
              <br />
              <input
                className="mt-[10px] w-full py-[19px] px-[29px] input__bg"
                placeholder="Enter Your Email"
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            </div>
            {/* message */}
            <div className="px-[30px] pt-[20px]">
              <label
                className="text-lg font-semibold text-dark-50"
                htmlFor="mesage"
              >
                Message
              </label>{" "}
              <br />
              <textarea
                className="mt-[10px] w-full py-[19px] px-[29px] input__bg"
                placeholder="Enter Your Message"
                {...register("message", { required: true })}
              />
              {errors.message && <span>This field is required</span>}
            </div>

            <div className="flex justify-center items-center pt-[35px] pb-[38px]">
              {/* <Link
                href="https://www.fresha.com/a/lavish-lux-nails-spa-mississauga-mississauga-1100-burnhamthorpe-road-west-n55ng2qi/all-offer?menu=true"
                rel="nofollow"
                target="_blank"
              >
                <button
                  type="submit"
                  className="flex items-center gap-[5px] text-sm font-medium text-white bg-secondary py-[6px] px-[17px] rounded-lg"
                >
                  Book Now{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="15"
                    viewBox="0 0 22 15"
                    fill="none"
                  >
                    <path
                      d="M21.1984 7.52539C18.2713 7.52539 15.8984 10.4915 15.8984 14.1504"
                      stroke="white"
                    />
                    <path d="M0 7.52539H21.2" stroke="white" />
                    <path
                      d="M15.8984 0.900391C15.8984 4.55926 18.2713 7.52533 21.1984 7.52539"
                      stroke="white"
                    />
                  </svg>
                </button>
              </Link> */}
              <Link
                rel="nofollow"
                target="_blank"
                href="https://www.fresha.com/a/lavish-lux-nails-spa-mississauga-mississauga-1100-burnhamthorpe-road-west-n55ng2qi/all-offer?menu=true"
              >
                <Image
                  src="/assets/buttons/book_now_book_appointment.png"
                  alt="book now"
                  width={129}
                  height={32}
                />
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* large device  */}
      <div className="hidden xl:block">
        <div className="">
          <div className="grid grid-cols-3 ">
            <div className="w-full col-span-2 full__section_l_p bookAnAppointment__bg_large">
              <h5 className="font-family-secondary text-[75px] font-normal text-primary pt-[50px] pb-[15px]">
                Book An Appointment
              </h5>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-[516px] 2xl:w-[616px] pt-[15px]"
              >
                {/* first div service */}
                <div className="">
                  <label
                    className="text-lg font-semibold text-dark-50"
                    htmlFor="services"
                  >
                    Services
                  </label>{" "}
                  <br />
                  <input
                    className="mt-[10px] w-full py-[12px] px-[30px] input__bg"
                    placeholder="Please Select Your Services"
                    {...register("services", { required: true })}
                  />
                  {errors.services && <span>This field is required</span>}
                </div>
                {/* second div  */}
                <div className="w-full flex justify-between gap-[15px] pt-[15px]">
                  {/* day */}
                  <div className="w-1/2 ">
                    <label
                      className="text-lg font-semibold text-dark-50"
                      htmlFor="day"
                    >
                      Day
                    </label>{" "}
                    <br />
                    <input
                      className="mt-[10px] w-full py-[12px] px-[30px] input__bg"
                      placeholder="Select Day"
                      {...register("day", { required: true })}
                    />
                    {errors.day && <span>This field is required</span>}
                  </div>
                  {/* hour */}
                  <div className="w-1/2">
                    <label
                      className="text-lg font-semibold text-dark-50"
                      htmlFor="hour"
                    >
                      Hour
                    </label>{" "}
                    <br />
                    <input
                      className="mt-[10px] w-full py-[12px] px-[30px] input__bg"
                      placeholder="--:--:--"
                      {...register("hour", { required: true })}
                    />
                    {errors.hour && <span>This field is required</span>}
                  </div>
                </div>
                {/* third div  */}
                <div className="w-full flex justify-between gap-[15px] pt-[15px]">
                  {/* name */}
                  <div className="w-1/2 ">
                    <label
                      className="text-lg font-semibold text-dark-50"
                      htmlFor="name"
                    >
                      Name
                    </label>{" "}
                    <br />
                    <input
                      className="mt-[10px] w-full py-[12px] px-[30px] input__bg"
                      placeholder="Enter Your Name"
                      {...register("name", { required: true })}
                    />
                    {errors.name && <span>This field is required</span>}
                  </div>
                  {/* phone */}
                  <div className="w-1/2">
                    <label
                      className="text-lg font-semibold text-dark-50"
                      htmlFor="phone"
                    >
                      Phone
                    </label>{" "}
                    <br />
                    <input
                      className="mt-[10px] w-full py-[12px] px-[30px] input__bg"
                      placeholder="Enter Your Number"
                      {...register("phone", { required: true })}
                    />
                    {errors.phone && <span>This field is required</span>}
                  </div>
                </div>
                {/* email */}
                <div className="pt-[15px]">
                  <label
                    className="text-lg font-semibold text-dark-50"
                    htmlFor="email"
                  >
                    Email
                  </label>{" "}
                  <br />
                  <input
                    className="mt-[10px] w-full py-[12px] px-[30px] input__bg"
                    placeholder="Enter Your Email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && <span>This field is required</span>}
                </div>
                {/* message */}
                <div className="pt-[15px]">
                  <label
                    className="text-lg font-semibold text-dark-50"
                    htmlFor="mesage"
                  >
                    Message
                  </label>{" "}
                  <br />
                  <textarea
                    className="mt-[10px] w-full py-[12px] px-[30px] input__bg"
                    placeholder="Enter Your Message"
                    {...register("message", { required: true })}
                  />
                  {errors.message && <span>This field is required</span>}
                </div>

                <div className="flex justify-start items-center py-[30px]">
                  {/* <Link
                    href="https://www.fresha.com/a/lavish-lux-nails-spa-mississauga-mississauga-1100-burnhamthorpe-road-west-n55ng2qi/all-offer?menu=true"
                    rel="nofollow"
                    target="_blank"
                  >
                    <button
                      type="submit"
                      className="flex items-center gap-[15px] text-sm font-medium text-white bg-secondary py-[6px] px-[17px] rounded-lg"
                    >
                      Book Now{" "}
                      <svg
                        className="mt-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="22"
                        viewBox="0 0 35 22"
                        fill="none"
                      >
                        <path
                          d="M34.2992 10.625C29.6121 10.625 25.8125 15.382 25.8125 21.25"
                          stroke="white"
                        />
                        <path d="M0.351562 10.625H34.2985" stroke="white" />
                        <path
                          d="M25.8125 0C25.8125 5.868 29.6121 10.6249 34.2992 10.625"
                          stroke="white"
                        />
                      </svg>
                    </button>
                  </Link> */}
                  <Link
                    rel="nofollow"
                    target="_blank"
                    href="https://www.fresha.com/a/lavish-lux-nails-spa-mississauga-mississauga-1100-burnhamthorpe-road-west-n55ng2qi/all-offer?menu=true"
                  >
                    <Image
                      src="/assets/buttons/large_d_book_appointment.png"
                      alt="book now"
                      width={200}
                      height={50}
                    />
                  </Link>
                </div>
              </form>
            </div>
            <div className="col-span-1 flex items-center justify-end -ml-[220px]">
              <iframe
                className="w-[450px] xl:w-[550px] 2xl:w-[650px] 3xl:w-[750px] 4xl:w-[800px] 5xl:w-[868px] 5xl:h-[470px]"
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d92504.42903421116!2d-79.74413579894721!3d43.569812810480904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x882b41ac57881c31%3A0xe4671580386bf3cc!2s1100%20Burnhamthorpe%20Rd%20W%20Unit%2016%2C%20Mississauga%2C%20ON%20L5C%204G4%2C%20Canada!3m2!1d43.5698424!2d-79.6617351!5e0!3m2!1sen!2sbd!4v1725532208708!5m2!1sen!2sbd"
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
