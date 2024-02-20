import Link from "next/link";

export const NotFoundView = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full min-h-[50vh] gap-4">
      <h2 className="text-3xl font-semibold">What are you doing here?</h2>
      <p className="font-normal text-md">Could not find requested resource.</p>
      <Link
        href="/"
        className="px-5 py-3 text-base font-light text-white transition duration-150 bg-indigo-600 rounded-full hover:bg-indigo-700"
      >
        Return Home
      </Link>
    </section>
  );
};
