import { cx } from "@/src/utils";
import Link from "next/link";

const Category = ({ link = "#", name, active, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "py:1.5 md:py-2 px-6 md:px-10 rounded-full capitalize font-semibold border-2 border-solid border-dark dark:border-light hover:scale-105 transition-all duration-300 ease m-2",
        props.className,
        active
          ? "bg-dark text-light dark:bg-light dark:text-dark"
          : "bg-light text-dark dark:bg-dark dark:text-light"
      )}>
      #{name}
    </Link>
  );
};

export default Category;
