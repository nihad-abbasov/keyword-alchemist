export const Footer = () => {
  const foundationYear = 2024;
  const currentYear = new Date().getFullYear();
  const isTheYearsSame = foundationYear === currentYear;

  return (
    <footer className="w-full py-3 mt-24 bg-gray-100">
      <p className="text-xs text-center text-gray-400">
        Created by Nihad Abbasov © {foundationYear}
        {!isTheYearsSame && `-${currentYear}`}
      </p>
    </footer>
  );
};
