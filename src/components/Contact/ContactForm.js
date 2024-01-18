"use client";

import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in">
      {/* -------------- name */}
      Hello! My name is{" "}
      <input
        type="text"
        placeholder="your name"
        {...register("name", {})}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />
      {/* -------------- email */}
      and I want to discuss a potential project. You can email me at{" "}
      <input
        type="email"
        placeholder="your email"
        {...register}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />
      or reach me out on {/* -------------- phone */}
      <input
        type="tel"
        placeholder="your phone number"
        {...register("phone number", {})}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />
      {/* -------------- project details */}
      . Here are some details about my project: <br />
      <textarea
        type="text"
        rows={3}
        placeholder="My project is about..."
        {...register}
        className="w-full outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />
      {/* -------------- submit button */}
      <input
        type="submit"
        value="Send Request"
        className="mt-8 font-medium text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer"
      />
    </form>
  );
};

export default ContactForm;
