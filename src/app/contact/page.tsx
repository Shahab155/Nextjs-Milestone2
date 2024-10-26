import React from "react";

export default function Contact() {
  return (
    <main className="h-auto">
      <div className=" flex justify-evenly flex-col items-center">
        <h1 className="text-2xl font-bold text-white my-5">CONTACT ME</h1>

         <div className="flex flex-col px-3 py-3 shadow-xl shadow-black  bg-white rounded-xl ">
        <form className="gap-7  py-5">
          <label htmlFor="name" className="flex flex-col w-96 ">
            Name <input type="text" placeholder="Enter your name" className="h-12 mt-2 rounded-lg text-black px-2 border border-black" />
          </label>
          <label htmlFor="email" className="flex flex-col w-96 mt-3">
            Email <input type="email" placeholder="Enter your email" className="h-12 mt-2  rounded-lg text-black px-2 border border-black"  />
          </label>
          
          
          <label htmlFor="message" className="flex flex-col w-96 mt-2">
            Send Message
            <textarea
              name="message"
              id="message"
              placeholder="Send your message..."
              className="h-20  mt-2 rounded-lg text-black border border-black px-2 "
            ></textarea>
          </label>
        </form>
        
        <button className="bg-black py-3 px-3 text-white mt-6 rounded-lg font-bold hover:border-2 border-white">Submit</button>
        </div>
      </div>
    </main>
  );
}
