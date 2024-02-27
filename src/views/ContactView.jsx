import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export const ContactView = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    window.location.href = `mailto:your-email@example.com?subject=Contact from ${name}&body=${message} - From: ${email}`;
  };

  return (
    <section className="relative text-gray-600 bg-white body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-12 text-center">
          <h1 className="mb-4 text-4xl font-medium text-gray-900 sm:text-3xl title-font">
            Contact Me
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Get in touch with me for any questions or support. I'm here to help
            and answer any query you might have. I look forward to hearing from
            you!
          </p>
        </div>
        <div className="mx-auto lg:w-1/2 md:w-2/3">
          <div className="flex flex-wrap -m-2">
            <div className="w-full p-2 contact-illustration">
              <Image
                src="/contact.png"
                alt="Contact Us Illustration"
                width={600}
                height={400}
                className="object-cover object-center rounded-lg"
              />
            </div>
            {/* <form onSubmit={handleSubmit} className="w-full p-2">
              <div className="flex flex-wrap -m-2">
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="text-sm leading-7 text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                    />
                  </div>
                </div>
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="text-sm leading-7 text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                    />
                  </div>
                </div>
                <div className="w-full p-2">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="text-sm leading-7 text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                    ></textarea>
                  </div>
                </div>
                <div className="w-full p-2">
                  <button
                    type="submit"
                    className="flex px-8 py-2 mx-auto text-lg text-black bg-indigo-400 border-0 rounded focus:outline-none hover:bg-indigo-600"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form> */}
          </div>
        </div>

        <div className="mt-12 contact-info">
          <div className="text-center">
            {/* <h2 className="text-2xl font-medium text-gray-900 sm:text-xl title-font">
              Other Ways to Reach Me
            </h2> */}
            <p className="mt-2 text-base leading-relaxed">
              Phone: (+994) 77 537 11 65
            </p>
            <p className="mt-1 text-base leading-relaxed">
              Email: nihad.abbasov.work@gmail.com
            </p>
            <div className="flex justify-center gap-2 mt-8 social-links">
              <a
                href="https://www.instagram.com/weristnihad/"
                className="p-2 transition duration-200 rounded hover:bg-gray-700"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/nihad-abbasov-dev/"
                className="p-2 transition duration-200 rounded hover:bg-gray-700"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/nihad.abbasov.dev/"
                className="p-2 transition duration-200 rounded hover:bg-gray-700"
                target="_blank"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
