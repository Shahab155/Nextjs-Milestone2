import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-auto">
    <div className="flex flex-row justify-between">
      <div className="flex flex-col my-24 mx-10 text-white">
        <p className="text-xl mt-4 text-white font-bold">Hello, This is </p>
        <h1 className="name text-5xl my-5  text-yellow-500 font-bold animate-bounce  ">
          {" "}
          Shahab Ud Din
        </h1>
        <h2 className="text-2xl mb-3 text-green-400 font-bold">
          I am Front-end Developer.
        </h2>
        <p className="mb-3 ">
          I am passionate about building interactive websites, <br />
          and solving real world problems by using coding skills.
        </p>
        <div>
        <button className="text-xl font-bold text-black rounded-lg px-2 py-2 mt-4 bg-yellow-500 hover:border-2 border-yellow-300 ">
          <Link href="https://nextjs.org/" target="_blank">
            Learn more
          </Link>{" "}
        </button>
      </div>
      </div>
      
      <div className="mt-28 mr-28">
        <Image
          className="pic"
          src="/pic.png"
          alt="profile pic"
          width={150}
          height={150}
        ></Image>
      </div>
    </div>
    </main>
  );
}
