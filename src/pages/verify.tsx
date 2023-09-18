import { Tektur } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import { Chakra_Petch } from "next/font/google";
import Cookies from "js-cookie";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
const tektur = Tektur({ subsets: ["latin"] });
const chakraPetch = Chakra_Petch({ weight: "300", subsets: ["latin"] });
import "../app/globals.css";
import OtpInput from "react-otp-input";

export default function Verify(){
  

const router = useRouter()

  useEffect(() => {
    setOtp(otp);
  }, [otp]);

  const handleOtpSubmit = async () => {
    try {
      const header = {
        "Content-Type": "application/json",
        method: "POST",
      };

      const payload = {
        email: params,
        otp: otp,
      };
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/verify-user`,
        payload,
        header
      );
      const token = response.data.token;
      Cookies.set("jwtToken", token, { expires: (7 * 24 * 60 * 60) / 24 });

      toast.success(`Logged In`, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      router.push("/");
    } catch (e: any) {
      const errorMessage = e.response.data.error;
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
          />
        </div>

        <Image
          width={100}
          height={100}
          alt="man"
          src="/login/man.svg"
          className="w-[85%] absolute bottom-0 object-contain"
        />
      </div>

      <section className="bg-slotBookTimeRed laptopS:w-[50%] flex justify-center flex-col items-center mobile:w-full">
        <div className="flex flex-col justify-center items-start gap-[48px] w-[75%]">
          <div className="flex flex-col justify-center items-start ">
            <h1
              className={`${tektur.className} text-black font-semibold text-slotBookHeadingFontSize`}
            >
              Almost there soldier,
            </h1>
            <h2
              className={`${chakraPetch.className} text-black font-semibold text-slotBookTimeFontSize`}
            >
              We take our job very seriously
            </h2>
          </div>
          <div className='w-full'>
          <h2 className={`${tektur.className} text-black font-semibold text-slotBookDateFontSize`}>Enter OTP</h2>
                <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            containerStyle={'w-full flex flex-row justify-between items-start'}
            inputStyle={'bg-transparent border-2 border-[2px] border-transparent border-b-black text-black font-bold focus:outline-0'}
            inputType="text"
            renderInput={(props:any) => <input {...props} suppressHydrationWarning />}
            shouldAutoFocus={true}
            />
          </div>

          <button
            className="w-full px-[1820x] py-[14px] rounded-[8px] bg-black"
            onClick={handleOtpSubmit}
          >
            Submit
          </button>
        </div>
      </section>
    </main>
  );
}
