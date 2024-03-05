"use client";

import siteMetadata from "@/src/utils/siteMetaData";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "../Icons";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <footer className="mt-16 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark">
      {/* ------------------------- TITLE */}
      <h3 className="mt-16 font-medium dark:font-bold text-center text-2xl sm:text-3xl lg:text-4xl px-4">
        Interesting Stories | Updates | Guides
      </h3>

      {/* ------------------------- SUBTITLE */}
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base">
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news.
      </p>

      {/* ------------------------- NEWSLETTER FORM */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light dark:bg-dark p-1 sm:p-2 rounded">
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true, maxLength: 80 })}
          className="w-full bg-transparent text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1"
        />

        <input
          type="submit"
          className="bg-dark text-light dark:text-dark dark:bg-light cursor-pointer font-medium rounded px-3 sm:px-5 py-1"
        />
      </form>

      {/* ------------------------- SOCIAL LINKS */}
      <div className="flex gap-5 my-8">
        <a href={siteMetadata.linkedin} className="inline-block w-6 h-6">
          <LinkedinIcon className="hover:scale-125 transition-all ease" />
        </a>
        <a href={siteMetadata.twitter} className="inline-block w-6 h-6">
          <TwitterIcon className="hover:scale-125 transition-all ease" />
        </a>
        <a href={siteMetadata.github} className="inline-block w-6 h-6">
          <GithubIcon className="fill-light dark:fill-dark hover:scale-125 transition-all ease" />
        </a>
        <a href={siteMetadata.dribbble} className="inline-block w-6 h-6">
          <DribbbleIcon className="hover:scale-125 transition-all ease" />
        </a>
      </div>

      {/* ------------------------- COPYRIGHTS */}
      <div className="w-full mt-8 md:mt-16 relative font-medium border-t border-solid border-light dark:border-dark py-6 px-8 flex flex-col md:flex-row justify-between items-center">
        <span className="text-center">
          &copy; 2023 SaninePink. All rights reserved.
        </span>

        <Link
          href="/sitemap.xml"
          className="text-center underline my-2 md:my-0">
          sitemap.xml
        </Link>

        <div className="text-center">
          Made with 💗 by
          <a
            href="https://devdreaming.com"
            target="_blank"
            className="underline">
            SaninePink
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
