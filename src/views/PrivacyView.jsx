import Link from "next/link";

export const PrivacyView = () => {
  return (
    <section>
      <div className="p-5 privacy-container">
        <h1 className="mb-4 text-xl font-bold">Privacy Policy</h1>
        <p>Welcome to my web application. Your privacy is important to me.</p>
        <p>
          This privacy policy is to inform you about the information I do not
          collect, process, or store any personal data through my web
          application. As my services do not require users to register or
          provide personal information, I do not have a backend system for data
          processing or storage. My application allows users to input data for
          generating different versions of search types, but these inputs are
          not recorded, stored, or shared.
        </p>
        <h2 className="mt-4 mb-2 text-lg font-bold">Data Collection and Use</h2>
        <p>
          I do not collect, use, or share any personal data of my users. Any
          data entered into my application is not stored or processed by me.
        </p>
        <h2 className="mt-4 mb-2 text-lg font-bold">Cookies and Tracking</h2>
        <p>
          My web application does not use cookies or any form of tracking
          technologies.
        </p>
        <h2 className="mt-4 mb-2 text-lg font-bold">
          Changes to This Privacy Policy
        </h2>
        <p>
          I may update my Privacy Policy from time to time. I encourage you to
          review this Privacy Policy periodically for any changes.
        </p>
        <h2 className="mt-4 mb-2 text-lg font-bold">Contact Me</h2>
        <p>
          If you have any questions about this Privacy Policy, please{" "}
          <Link href="/contact" className="font-semibold underline">
            [contact me]
          </Link>
          .
        </p>
      </div>
    </section>
  );
};
