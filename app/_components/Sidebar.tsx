import Image from "next/image";
import { TbPiano } from "react-icons/tb";
import { FiSpeaker } from "react-icons/fi";
import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <div className="hidden lg:flex min-h-screen flex-col justify-between border-e bg-white">
      <div className="px-4 py-6">
        <div className="flex items-center justify-center -mt-3">
          <Image src="/LogoIcon.png" width={40} height={40} alt="logo" />
          <h1 className="text-sm font-semibold">Rent A Riff</h1>
        </div>
        <div className="mt-10">
          <Image
            src="/pp.jpg"
            width={100}
            height={100}
            className="rounded-full object-cover h-[100px] w-[100px] mx-auto"
            alt="profile picture"
          />
          <div className="text-center mt-3">
            <h1 className="lg:text-xl font-[500]">Budi Santoso</h1>
            <p className="text-gray-300">budi@gmail.com</p>
          </div>
        </div>

        <ul className="mt-6 space-y-1">
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span className="font-medium"> Dashboard </span>
              </a>
            </li>

            <li>
              <Link href="/instrument">
                <div className="flex hover:bg-gray-100 rounded-md items-center gap-2 px-4 py-2 text-gray-700">
                  <TbPiano />
                  <span className="font-medium">Instruments</span>
                </div>
              </Link>
            </li>

            <li>
              <div className="flex hover:bg-gray-100 rounded-md items-center gap-2 px-4 py-2 text-gray-700">
                <FiSpeaker />
                <span className=" font-medium">Sound System</span>
              </div>
            </li>

            <li>
              <a
                href="#"
                className="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>

                  <span className=" font-medium">Packages</span>
                </div>

                <span className="shrink-0 rounded-full bg-gray-100 px-3 py-0.5 text-xs text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-700">
                  3
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>

                <span className=" font-medium"> Account </span>
              </a>
            </li>
          </ul>
        </ul>
      </div>
      <svg
        className="self-end"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#273036"
          fill-opacity="1"
          d="M0,32L20,48C40,64,80,96,120,128C160,160,200,192,240,176C280,160,320,96,360,106.7C400,117,440,203,480,213.3C520,224,560,160,600,138.7C640,117,680,139,720,160C760,181,800,203,840,197.3C880,192,920,160,960,170.7C1000,181,1040,235,1080,261.3C1120,288,1160,288,1200,240C1240,192,1280,96,1320,85.3C1360,75,1400,149,1420,186.7L1440,224L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Sidebar;
