import Image from "next/image";

export const Footer = () => {
  const foundationYear = 2024;
  const currentYear = new Date().getFullYear();
  const isTheYearsSame = foundationYear === currentYear;

  return (
    <footer className="w-full py-3 mt-6 bg-gray-100">
      <p className="flex flex-col items-center justify-center gap-1 text-xs font-normal text-center text-gray-500 lg:flex-row">
        <span>Created by Nihad Abbasov {" "}</span>
        <span>
          © {foundationYear}
          {!isTheYearsSame && `-${currentYear}`}
        </span>
        {/* <span className="flex flex-row items-center justify-center gap-0.5">
          Creadive Agency
          <Image
            src="/creadive_logo.svg"
            alt="img name"
            width={0}
            height={0}
            sizes="100vw"
            className="w-3 h-auto"
          />
        </span> */}
      </p>
    </footer>
  );
};
