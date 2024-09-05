"use client";
import React from "react";
import { useForm } from "react-hook-form";
import "./BookAnAppointment.css";
import Link from "next/link";

const BookAnAppointment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      {/* small device  */}
      <div className="block md:hidden">
        
        <div className="px-[20px] ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d92504.42903421116!2d-79.74413579894721!3d43.569812810480904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x882b41ac57881c31%3A0xe4671580386bf3cc!2s1100%20Burnhamthorpe%20Rd%20W%20Unit%2016%2C%20Mississauga%2C%20ON%20L5C%204G4%2C%20Canada!3m2!1d43.5698424!2d-79.6617351!5e0!3m2!1sen!2sbd!4v1725532208708!5m2!1sen!2sbd" width="350" height="240"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="bookAnAppointment__bg -mt-[50px]">
          <h5 className="text-3xl font-normal text-primary pt-[80px] pb-[25px] pl-[30px]">
            Book An Appointment
          </h5>
          <form onSubmit={handleSubmit(onSubmit)}>
          {/* services */}
            <div className="px-[30px]">
                <label className="text-lg font-semibold text-dark-50" htmlFor="services">Services</label> <br/>
                <input className="mt-[10px] w-full py-[19px] px-[29px] input__bg" placeholder="Please Select Your Services" {...register("services", {required : true})}/>
                {errors.services && <span>This field is required</span>}
            </div>
          {/* day */}
            <div className="px-[30px] pt-[20px]">
                <label className="text-lg font-semibold text-dark-50" htmlFor="day">Day</label> <br/>
                <input className="mt-[10px] w-full py-[19px] px-[29px] input__bg" placeholder="Select Day" {...register("day", {required : true})}/>
                {errors.day && <span>This field is required</span>}
            </div>
          {/* hour */}
            <div className="px-[30px] pt-[20px]">
                <label className="text-lg font-semibold text-dark-50" htmlFor="hour">Hour</label> <br/>
                <input className="mt-[10px] w-full py-[19px] px-[29px] input__bg" placeholder="--:--:--" {...register("hour", {required : true})}/>
                {errors.hour && <span>This field is required</span>}
            </div>
          {/* name */}
            <div className="px-[30px] pt-[20px]">
                <label className="text-lg font-semibold text-dark-50" htmlFor="name">Name</label> <br/>
                <input className="mt-[10px] w-full py-[19px] px-[29px] input__bg" placeholder="Enter Your Name" {...register("name", {required : true})}/>
                {errors.name && <span>This field is required</span>}
            </div>
          {/* phone */}
            <div className="px-[30px] pt-[20px]">
                <label className="text-lg font-semibold text-dark-50" htmlFor="phone">Phone</label> <br/>
                <input className="mt-[10px] w-full py-[19px] px-[29px] input__bg" placeholder="Enter Your Number" {...register("phone", {required : true})}/>
                {errors.phone && <span>This field is required</span>}
            </div>
          {/* email */}
            <div className="px-[30px] pt-[20px]">
                <label className="text-lg font-semibold text-dark-50" htmlFor="email">Email</label> <br/>
                <input className="mt-[10px] w-full py-[19px] px-[29px] input__bg" placeholder="Enter Your Email" {...register("email", {required : true})}/>
                {errors.email && <span>This field is required</span>}
            </div>
          {/* message */}
            <div className="px-[30px] pt-[20px]">
                <label className="text-lg font-semibold text-dark-50" htmlFor="mesage">Message</label> <br/>
                <textarea className="mt-[10px] w-full py-[19px] px-[29px] input__bg" placeholder="Enter Your Message" {...register("message", {required : true})}/>
                {errors.message && <span>This field is required</span>}
            </div>
            
            <div className="flex justify-center items-center pt-[35px] pb-[38px]">
                <Link href="https://www.fresha.com/a/lavish-lux-nails-spa-mississauga-mississauga-1100-burnhamthorpe-road-west-n55ng2qi/all-offer?menu=true" rel="nofollow" target="_blank">
                <button type="submit" className="text-sm font-medium text-white bg-secondary py-[6px] px-[17px] rounded-lg">Book Now</button>
                </Link>
                
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookAnAppointment;
