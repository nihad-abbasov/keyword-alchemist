import Image from "next/image";

export const AboutView = () => {
  return (
    <section className="flex flex-col gap-5 px-4 py-8 mx-auto mt-8">
      <div className="flex flex-col items-start gap-3 mb-5">
        <h1 className="mb-3 text-3xl font-bold text-center">My Story</h1>
        <div className="flex flex-col items-center justify-between w-full gap-4 md:flex-row">
          <div className="w-[60%] lg:w-[20%]">
            <Image
              src="/story.png"
              alt="My Story Illustration"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="flex flex-col w-full lg:w-[80%] gap-2">
            <p className="text-sm text-justify">
              I am currently working at an affiliate marketing oriented company
              and our marketing team needs automation-wise tools to get their
              work done easily and in a short time period.
            </p>
            <p className="text-sm text-justify">
              So I saw the opportunity - our marketing workers were struggling
              to apply keywords conversion to exact and phrase search types
              (they were doing it in Excel, with a formula. But you know it is
              better to have a web app for it than having Excel and doing
              operation there). So I have created this web app.
            </p>
            <p className="text-sm text-justify">
              It has a long way to go - I mean there are a lot of ideas that I'd
              like to add in the near future.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end gap-3 mt-8">
        <h2 className="mb-3 text-3xl font-bold text-end">App Features</h2>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <ul className="flex flex-col items-start gap-3 text-sm list-disc w-full lg:w-[80%]">
            <li className="">
              You can make an input of some data to the textbox and click to
              generate, and then get the variations for your selection, i.e., if
              you checked exact and phrase search type checkboxes, they will be
              generated.
            </li>
            <li className="">
              You can upload a file (bulk upload) to avoid the copy-paste
              challenge to easily upload your keywords in bulk.
            </li>
            <li className="">
              You can copy the results from the appearing table, just simply
              click the copy button to copy the result to your clipboard.
            </li>
            <li className="">
              You can easily download the results both as a CSV file and as a
              PDF file.
            </li>
            <li className="">
              After generating, You can clear the textbox to make the next
              input.
            </li>
          </ul>
          <div className="w-[60%] lg:w-[30%]">
            <Image
              src="/features.png"
              alt="App Features Illustration"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
