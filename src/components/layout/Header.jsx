import Image from "next/image";
import Link from "next/link";
import { BurgerMenu } from "./BurgerMenu";

export const Header = () => {
  const headerLinks = [
    { id: 1, title: "About", href: "/about" },
    { id: 2, title: "Contact", href: "/contact" },
    { id: 3, title: "Privacy", href: "/privacy" },
  ];

  const mappedHeaderLinks = headerLinks.map((el) => {
    return (
      <li
        key={el.id}
        className="text-sm font-medium text-black transition duration-200 rounded-lg lg:hover:bg-slate-100"
      >
        <Link
          className="block px-3 py-2"
          href={el.href}
        >
          {el.title}
        </Link>
      </li>
    );
  });

  return (
    <header className="px-4 py-3 text-white border-b border-b-gray-200">
      <div className="container flex items-center justify-between gap-3 header_inner">
        <Link href="/" className="flex flex-row items-center justify-start">
          <Image
            src="/alchemy.gif"
            alt="KeywordMagicianDev Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-[15%] lg:w-[10%]"
            priority
          />
          <h1 className="ml-2 text-sm font-bold text-blue-500">
            Keyword Alchemist
          </h1>
        </Link>
        <ul className="flex-row items-center justify-between hidden gap-5 lg:flex">
          {mappedHeaderLinks}
        </ul>
        <BurgerMenu />
      </div>
    </header>
  );
};
