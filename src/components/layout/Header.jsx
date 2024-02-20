import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex items-center justify-center px-4 py-2 text-white border-b border-b-gray-200">
      <Link
        href="/"
        className="flex flex-col items-center justify-center"
      >
        <Image
          src="/key.gif"
          alt="KeywordMagicianDev Logo"
          width={0}
          height={0}
          sizes="100vw"
          className="w-1/4 h-auto"
          priority
        />
        <h1 className="ml-2 text-blue-500 text-md">Keyword Magician</h1>
      </Link>
    </header>
  );
};
