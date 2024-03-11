// Contact.js

import React from "react";
import { CONTACT_US_URL } from "../utils/constants";
import Hero from "./Hero";

export default function Contact() {
  return (
    <div>
      <div className="contact-us m-4 mt-16 flex flex-wrap justify-center items-center">
        <div className="Formal text-center w-full sm:w-1/2 lg:w-2/5 xl:w-2/5 mx-auto">
          <h2>Get in touch..</h2>
          <p>We will be happy to hear your response.</p>
        </div>
        <div className="Form text-white w-full sm:w-4/5 lg:w-3/5 xl:w-3/5 flex m-8 rounded-xl bg-gradient-to-r from-red-600 to-blue-600 flex-col p-5 mx-auto">
          <div>
            <h1>Contact Us</h1>
          </div>
          <form className="ContactForm flex-col">
            <label htmlFor="email">Email:</label>
            <input
              className="text-black p-2 rounded-lg bg-slate-50 shadow-sm shadow-slate-400 my-2"
              id="email"
              name="email"
              type="email"
            />
            <label htmlFor="Name">Name:</label>
            <input
              className="text-black p-2 rounded-lg bg-slate-50 shadow-sm shadow-slate-400 my-2"
              id="Name"
              name="Name"
              type="text"
            />
            <label htmlFor="Message">Message:</label>
            <textarea
              className="text-black p-2 rounded-lg bg-slate-50 shadow-sm shadow-slate-400 h-16 my-2 text-sm"
              id="Message"
              name="Message"
              type="text"
            />
            <button
              className="rounded-xl text-black bg-white p-2 mx-auto"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
