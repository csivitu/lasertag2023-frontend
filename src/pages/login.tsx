"use client";
import { Tektur } from "next/font/google";
import { Chakra_Petch } from "next/font/google";
import Image from "next/image";
const tektur = Tektur({ subsets: ["latin"] });
const chakraPetch = Chakra_Petch({ weight: "300", subsets: ["latin"] });
import "../app/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const contactNumberRef = useRef<HTMLInputElement>(null);
  const sendOtpButton = useRef<HTMLButtonElement>(null);
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [error, setError] = useState<String>("");

  const handleButtonClick = async (e: any) => {
    e.preventDefault();
    try {
      const header = {
        "Content-Type": "application/json",
        method: "POST",
      };
      const payload = {
        phoneno: `+91${contactNumber}`,
        email: email.toString().toLowerCase(),
      };
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/login`,
        payload,
        header
      );

      console.log(response);
      toast.success("Sending OTP...", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      router.push(`/verify?email=${email}`);
    } catch (e: any) {
      setError(e?.response?.data.error);
      const errorMessage = e?.response?.data.error;
      // console.log(e.response.data)
      toast.error(`${errorMessage}`, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <main className="w-full flex flex-row bg-black h-screen">
      <ToastContainer />
      <div className="laptopS:w-[50%] mobile:w-0  flex flex-col justify-start items-start relative">
        <div className="w-full ml-[20px]">
          <Image
            width={150}
            height={150}
            alt="man"
            src="/login/lasertagLogo.svg"
            className="mobile:hidden laptopS:block"
          />
        </div>

        <Image
          width={100}
          height={100}
          alt="man"
          src="/login/man.svg"
          className="w-[85%] absolute bottom-0 object-contain mobile:hidden laptopS:block"
        />
      </div>

      <section className="bg-slotBookTimeRed laptopS:w-[50%] flex justify-center flex-col items-center tab:w-full">
        <div className="flex flex-col justify-center items-start gap-[48px] w-[75%]">
          <div className="flex flex-col justify-center items-start ">
            <h1
              className={`${tektur.className} text-black font-semibold text-slotBookHeadingFontSize`}
            >
              Let&apos;s get you equipped,
            </h1>
            <h2
              className={`${chakraPetch.className} text-black font-semibold text-slotBookTimeFontSize`}
            >
              Enter your details to sign in
            </h2>
          </div>

          <div className="w-full">
            <h2
              className={`${tektur.className} text-black font-semibold text-slotBookDateFontSize `}
            >
              Gravitas Registered Email Address
            </h2>
            <h1
              className={`${tektur.className} text-black font-semibold text-[16px]`}
            >
              {" "}
              OTP will be sent to email
            </h1>
            <input
              type="text"
              className={`${chakraPetch.className} bg-transparent  text-black border-b-black border-transparent border-[2px] w-full  placeholder-[#222222]`}
              placeholder="studentname@vit.ac.in"
              ref={emailRef}
              value={email}
              onChange={(e: any) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="w-full">
            <h2
              className={`${tektur.className} text-black font-semibold text-slotBookDateFontSize`}
            >
              Contact Number (Indian Number)
            </h2>
            <h1
              className={`${tektur.className} text-black font-semibold text-[16px]`}
            >
              Without Country code
            </h1>
            <input
              type="text"
              className={`${chakraPetch.className} bg-transparent border-b-black border-transparent border-[2px] w-full text-black placeholder-[#222222]`}
              placeholder="810xxxxxxx"
              ref={contactNumberRef}
              onChange={(e: any) => {
                setContactNumber(e.target.value);
              }}
              value={contactNumber}
            />
          </div>

          <button
            className="w-full px-[1820x] py-[14px] rounded-[8px] bg-black"
            onClick={handleButtonClick}
            ref={sendOtpButton}
          >
            Send OTP to Email
          </button>
        </div>
      </section>
    </main>
  );
}
