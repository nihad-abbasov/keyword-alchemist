import Image from "next/image"

export const Footer = () => {
  const foundationYear = 2024;
  const currentYear = new Date().getFullYear();
  const isTheYearsSame = foundationYear === currentYear;

  return (
    <footer className="w-full py-3 mt-24 bg-gray-100">
      <p className="text-xs text-center text-gray-400">
        Created by Nihad Abbasov, within Creadive Agency © {foundationYear}
        {!isTheYearsSame && `-${currentYear}`}
      </p>
    </footer>
  );
};


{/* <Image src="/creadive_logo.svg" alt="img name" width={0} height={0} sizes="100vw" className="w-6 h-auto" /> */}