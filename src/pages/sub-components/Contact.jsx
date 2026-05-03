import Lottie from "lottie-react";
import mailAnimation from "../../assets/envelope-send-hover-flying.json";
import phoneAnimation from "../../assets/whatsapp-hover-pinch.json";
import locationAnimation from "../../assets/location-pin-in-jump-dynamic.json";
import { toast } from "react-toastify";

import { useState } from "react";
import { axiosInstance } from "@/utils/axiosInstance";

const Contact = () => {
  const [senderName, setSenderName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleMessage = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await axiosInstance.post("/message/send", {
        senderName,
        subject,
        email,
        message,
      });

      toast.success(data.message);

      // Reset form
      setSenderName("");
      setSubject("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full py-0 sm:py-5 overflow-x-hidden relative">
      {/* Background image with blur */}
      <div className="absolute inset-0 bg-[url('footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center blur-xl dark:hidden pointer-events-none" />

      {/* Header */}
      <div className="mb-10 text-center">
        <h4 className="text-sm tracking-[0.3em] uppercase text-slate-500 dark:text-slate-400 mb-2">
          Connect with me
        </h4>

        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100">
          Get in touch
        </h2>

        <p className="text-center max-w-2xl mx-auto mt-5">
          Have a project in mind or looking to hire a full-stack developer? Fill
          out the form below and I&apos;ll get back to you as soon as possible.
        </p>

        {/* <p className="text-center max-w-2xl mx-auto mt-5">
          Whether it&apos;s a job opportunity, a project, or just a hello - my
          inbox is always open.
          <br />
          Got an idea that needs building? Let&apos;s talk about it.
          <br />
          Available for full-time positions and freelance work. Let&apos;s
          discuss how I can contribute to your team or project.
        </p> */}
      </div>

      {/* Contact Info & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 my-20">
        {/* Contact Info */}
        <div className="space-y-6">
          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="px-2 py-1 rounded-xl bg-lime-300/50 dark:bg-lime-900/30 transition">
              <Lottie
                animationData={mailAnimation}
                loop
                autoplay
                className="w-8 h-8"
              />
            </div>

            <a
              href="mailto:dip.akand9899@gmail.com"
              className="relative group text-lime-700 dark:text-lime-400 text-base sm:text-lg font-medium transition-all duration-300 ease-out hover:text-black dark:hover:text-white hover:tracking-wide hover:drop-shadow-[0_0_10px_rgba(132,204,22,0.7)]"
            >
              dip.akand9899@gmail.com
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-lime-500 transition-all duration-300 group-hover:w-full" />
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <div className="px-2 py-1 rounded-xl bg-lime-300/50 dark:bg-lime-900/30 transition">
              <Lottie
                animationData={phoneAnimation}
                loop
                autoplay
                className="w-8 h-8"
              />
            </div>

            <a
              href="tel:+8801689190142"
              className="relative group text-lime-700 dark:text-lime-400 text-base sm:text-lg font-medium transition-all duration-300 ease-out hover:text-black dark:hover:text-white hover:tracking-wide hover:drop-shadow-[0_0_10px_rgba(132,204,22,0.7)]"
            >
              +880 (16) 8919-0142
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-lime-500 transition-all duration-300 group-hover:w-full" />
            </a>
          </div>

          {/* Address - stronger glow hover:drop-shadow-[0_0_12px_rgba(132,204,22,0.9)] */}
          <div className="flex items-center gap-4">
            <div className="px-2 py-1 rounded-xl bg-lime-300/50 dark:bg-lime-900/30 transition">
              <Lottie
                animationData={locationAnimation}
                loop
                autoplay
                className="w-8 h-8"
              />
            </div>

            <a
              href="https://maps.app.goo.gl/DU2Z1NS3trbmnbcv6"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group text-lime-700 dark:text-lime-400 text-base sm:text-lg font-medium transition-all duration-300 ease-out hover:text-black dark:hover:text-white hover:tracking-wide hover:drop-shadow-[0_0_10px_rgba(132,204,22,0.7)]"
            >
              Sirajganj, Bangladesh
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-lime-500 transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleMessage} className="px-0.5">
          {/* <input
          type="hidden"
          name="subject"
          value="Md Sofian Hasan - New form Submission"
        /> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <input
              type="text"
              placeholder="Enter your name"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-lg bg-white dark:bg-darkHover/30"
              required
              name="name"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-lg bg-white dark:bg-darkHover/30"
              required
              name="email"
            />
          </div>

          {/* Subject */}
          <input
            type="text"
            placeholder="Enter your Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="flex-1 w-full mb-6 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-lg bg-white dark:bg-darkHover/30"
            required
            name="subject"
          />

          {/* Message */}
          <textarea
            rows="6"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full mb-8 px-4 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30"
            required
            name="message"
          />

          {/* Submit button */}
          {!loading ? (
            <button
              type="submit"
              className="py-2 px-8 w-max flex items-center justify-center gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border dark:border-white/30 dark:hover:bg-darkHover"
            >
              Submit now
            </button>
          ) : (
            <button
              disabled
              type="button"
              className="py-2 px-8 w-max flex items-center justify-center gap-2 bg-black/80 text-white rounded-full mx-auto cursor-not-allowed opacity-70 dark:bg-transparent dark:border dark:border-white/30"
            >
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#ffffff30"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Sending...
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;

/*  <div className="space-y-6">
          
          <div className="flex items-center 4">
            <div className="">
              <Lottie
                animationData={mailAnimation}
                loop={true}
                autoplay={true}
                className="w-10 h-10"
              />
            </div>

            <div className="text-lime-700 dark:text-lime-500 text-base sm:text-lg font-medium">
              <a href="mailto:dip.akand9899@gmail.com" className="">
                dip.akand9899@gmail.com
              </a>
            </div>
          </div>

         
          <div className="flex items-center space-x-4">
            <div className="">
              <Lottie
                animationData={phoneAnimation}
                loop={true}
                autoplay={true}
                className="w-10 h-10"
              />
            </div>

            <div className="text-lime-700 dark:text-lime-500 text-base sm:text-lg font-medium">
              <a href="tel:+8801689190142" className="">
                +880 (16) 8919-0142
              </a>
            </div>
          </div>

          
          <div className="flex items-center space-x-4">
            <div className="">
              <Lottie
                animationData={locationAnimation}
                loop={true}
                autoplay={true}
                className="w-10 h-10"
              />
            </div>

            <div className="text-lime-700 dark:text-lime-500 text-base sm:text-lg font-medium">
              <a
                href="https://maps.app.goo.gl/DU2Z1NS3trbmnbcv6"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                Sirajganj, Bangladesh
              </a>
            </div>
          </div>
        </div>
*/
