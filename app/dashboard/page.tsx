import React from "react";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";

function Dashboard() {
  return (
    <div className="col-span-3 p-5">
      <section>
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl font-[500]">Hello Budi</h1>
            <p className="text-gray-400">Today is Monday, 20 Oktober 2017</p>
          </div>
          <div className="flex gap-2">
            <div className="bg-gray-300 w-10 h-10 rounded-md flex items-center justify-center">
              <IoSearch className="text-xl" />
            </div>
            <button className="text-xs sm:text-base px-6 h-10 rounded-md bg-[#252525] text-[#eaeaea]">
              Add New Product
            </button>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6">
        <div className="bg-[#252525]/90 p-3 sm:p-5 text-sm rounded-xl  shadow-md">
          <div className="flex justify-between items-center">
            <Image
              src="/orang.webp"
              width={25}
              height={25}
              alt="orang"
              className="w-10 h-10 rounded-full"
            />
            <IoMdMore className="text-white text-2xl font-semibold" />
          </div>
          <div className="my-5">
            <h1 className="text-xl font-[600] text-white">Instruments</h1>
          </div>
          <div className="mt-10">
            <h1 className="text-white text-sm mb-3">10 tasks | 96%</h1>
            <div>
              <span id="ProgressLabel" className="sr-only">
                Loading
              </span>

              <span
                role="progressbar"
                aria-labelledby="ProgressLabel"
                aria-valuenow="75"
                className="relative block rounded-full bg-[#252525]"
              >
                <span className="block h-2 rounded-full bg-white text-center w-[75%]">
                  {" "}
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[#3e3e3e]/90 p-5 rounded-xl shadow-md">
          <div className="flex justify-between items-center">
            <Image
              src="/orang.webp"
              width={25}
              height={25}
              alt="orang"
              className="w-10 h-10 rounded-full"
            />
            <IoMdMore className="text-white text-2xl font-semibold" />
          </div>
          <div className="my-5">
            <h1 className="text-xl font-[600] text-white">Sound System</h1>
          </div>
          <div className="mt-10">
            <h1 className="text-white text-sm mb-3">10 tasks | 96%</h1>
            <div>
              <span id="ProgressLabel" className="sr-only">
                Loading
              </span>

              <span
                role="progressbar"
                aria-labelledby="ProgressLabel"
                aria-valuenow="75"
                className="relative block rounded-full bg-[#282828]"
              >
                <span className="block h-2 rounded-full bg-white text-center w-[75%]">
                  {" "}
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[#282828]/60 p-5 rounded-xl shadow-md">
          <div className="flex justify-between items-center">
            <Image
              src="/orang.webp"
              width={25}
              height={25}
              alt="orang"
              className="w-10 h-10 rounded-full"
            />
            <IoMdMore className="text-white text-2xl font-semibold" />
          </div>
          <div className="my-5">
            <h1 className="text-xl font-[600] text-white">Packages</h1>
          </div>
          <div className="mt-10">
            <h1 className="text-white text-sm mb-3">10 tasks | 96%</h1>
            <div>
              <span id="ProgressLabel" className="sr-only">
                Loading
              </span>

              <span
                role="progressbar"
                aria-labelledby="ProgressLabel"
                aria-valuenow="75"
                className="relative block rounded-full bg-[#282828]"
              >
                <span className="block h-2 rounded-full bg-white text-center w-[75%]">
                  {" "}
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 grid sm:grid-cols-2 gap-5">
        <div>
          <h1 className="text-xl font-semibold">Task for Today</h1>

          <div className="flex gap-3 my-5 bg-[#fdfdfd] shadow-sm">
            <div className="kiri w-3 rounded-tl-xl rounded-bl-xl bg-[#252525]"></div>
            <div className="kanan flex items-center justify-between w-full">
              <div>
                <h1 className="text-lg font-semibold my-3">Mobile App</h1>
                <h5 className="text-sm text-gray-400 my-3">
                  Prepare Figma File
                </h5>
              </div>
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300 mr-10"
                id="Option2"
              />
            </div>
          </div>

          <div className="flex gap-3 my-5 bg-[#fdfdfd] shadow-sm">
            <div className="kiri w-3 rounded-tl-xl rounded-bl-xl bg-[#3e3e3e]"></div>
            <div className="kanan flex items-center justify-between w-full">
              <div>
                <h1 className="text-lg font-semibold my-3">Mobile App</h1>
                <h5 className="text-sm text-gray-400 my-3">
                  Prepare Figma File
                </h5>
              </div>
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300 mr-10"
                id="Option2"
              />
            </div>
          </div>
          <div className="flex gap-3 my-5 bg-[#fdfdfd] shadow-sm">
            <div className="kiri w-3 rounded-tl-xl rounded-bl-xl bg-[#282828]/20"></div>
            <div className="kanan flex items-center justify-between w-full">
              <div>
                <h1 className="text-lg font-semibold my-3">Mobile App</h1>
                <h5 className="text-sm text-gray-400 my-3">
                  Prepare Figma File
                </h5>
              </div>
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300 mr-10"
                id="Option2"
              />
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-xl font-semibold">Statistic</h1>
          <div className="my-5 gap-3 grid lg:grid-cols-3 w-full">
            <div className=" p-5 h-32 bg-[#FDFDFD] border border-[#EFEFEF] rounded-lg">
              <h1 className="text-2xl font-semibold">28 H</h1>
              <h5 className="mt-3 text-gray-500">Tracked Time</h5>
            </div>
            <div className=" p-5 h-32 bg-[#FDFDFD] border border-[#EFEFEF] rounded-lg">
              <h1 className="text-2xl font-semibold">28 H</h1>
              <h5 className="mt-3 text-gray-500">Tracked Time</h5>
            </div>
            <div className=" p-5 h-32 bg-[#FDFDFD] border border-[#EFEFEF] rounded-lg">
              <h1 className="text-2xl font-semibold">28 H</h1>
              <h5 className="mt-3 text-gray-500">Tracked Time</h5>
            </div>
          </div>
          <div className="border border-[#EFEFEF] p-5 rounded-md flex gap-5 w-full">
            <div className="w-1/2">
              <h1 className="text-2xl font-semibold">$9.99 p/m</h1>
              <h5 className="font-semibold mt-3">Pro Plan</h5>
              <p className="text-gray-500">More productivity with premium!</p>
            </div>
            <div className="w-1/2">
              <Image
                src="icon2.svg"
                width={200}
                height={200}
                className="mx-auto"
                alt="icon2"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
