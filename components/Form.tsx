"use client";

import React, { FormEvent, useState } from "react";
import { CustomButton } from "@/components";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: any) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ name, email, message }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        // Handle success, e.g., show a success message to the user
        console.log("Form submitted successfully");
      } else {
        // Handle errors if the server responds with an error status
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div>
      <div className="responsive">
        <div className=" h-[70vh]">
          <form onSubmit={handleSubmit}>
            <div className="relative mb-6">
              <input
                required
                type="text"
                className="peer block min-h-[auto] w-full rounded border-b-1 border-fcs_black/20 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleInput7"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
              />
              {name === "" && (
                <label
                  htmlFor="exampleInput7"
                  className="pointer-events-none absolute left-3 top-2 mt-0 max-w-[90%] truncate leading-[1.6] text-fcs_black text-base transition-all duration-200 ease-out dark:text-neutral-200"
                >
                  Name
                </label>
              )}
            </div>

            <div className="relative mb-6">
              <input
                required
                type="email"
                className="peer block min-h-[auto] w-full rounded border-b-1 border-fcs_black/20 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleInput8"
                placeholder="Email address"
                value={email}
                onChange={handleEmailChange}
              />
              {email === "" && (
                <label
                  htmlFor="exampleInput8"
                  className="pointer-events-none absolute left-3 top-2 mt-0 max-w-[90%] truncate leading-[1.6] text-fcs_black text-base transition-all duration-200 ease-out"
                >
                  Email address
                </label>
              )}
            </div>

            <div className="relative mb-6">
              <textarea
                required
                className="peer block min-h-[auto] w-full rounded border-b-1 border-fcs_black/20 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlTextarea13"
                placeholder="Message"
                value={message}
                onChange={handleMessageChange}
              ></textarea>
              {message === "" && (
                <label
                  htmlFor="exampleFormControlTextarea13"
                  className="pointer-events-none absolute left-3 top-2 mt-0 max-w-[90%] truncate leading-[1.6] text-fcs_black text-base transition-all duration-200 ease-out dark:text-neutral-200"
                >
                  Message
                </label>
              )}
            </div>

            <CustomButton
              type="submit"
              title="Submit"
              buttonStyle="w-full text-base bg-fcs_orange text-fcs_white hover:bg-fcs_white hover:text-fcs_orange rounded-full"
              size="md"
              href="#"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
