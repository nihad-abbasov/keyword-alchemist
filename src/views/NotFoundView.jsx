import Image from "next/image";
import Link from "next/link";
import { IoReturnUpBack } from "react-icons/io5";

export const NotFoundView = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full min-h-[50vh] gap-4">
      <Image
        src="/not-found.png"
        alt="Not Found Image"
        width={0}
        height={0}
        sizes="100vw"
        className="block w-[705] lg:w-[20%] h-auto"
        priority
      />
      <h2 className="text-2xl font-semibold">What are you doing here?</h2>
      <p className="text-sm font-normal text-md">Could not find requested resource.</p>
      <Link
        href="/"
        className="flex flex-row items-center justify-center gap-2 px-5 py-3 text-base font-light text-white transition duration-150 bg-indigo-600 rounded-full hover:bg-indigo-700"
      >
        <IoReturnUpBack className="w-6 h-5" />
        Return Home
      </Link>
    </section>
  );
};
