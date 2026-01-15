"use client";
import BlueBtn from "@/app/components/blueBtn";
import InputField from "@/app/components/InputField";
import React, { useState } from "react";

const ContactForm = () => {
  const [contactData, setContactData] = useState({
    fullName: "", 
    email: "",
    message: ""
  });
  const [err, setErr] = useState({
    fullName: "", 
    email: "",
    message: ""
  });
  const handleChanges  = (e)=>{
        const {name, value} = e.target;
        setContactData((prev)=>({
            ...prev, 
            [name]: value
        }))
      setErr((prev)=>({
        ...prev, 
        [name]: ""
      }))
    }
   
  const handleSubmit = (e)=>{
    e.preventDefault();
    let emailPattern = /^[a-zA-Z0-9.-=/*%{}#|]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]/;
    if(!contactData.fullName.trimStart())return setErr({fullName: "Please enter your full name."});
    if(!contactData.email)return setErr({email: "Email address is required"});
    if(!emailPattern.test(contactData.email))return setErr({email: "Please enter a valid email address."});
    if(!contactData.message.trimStart())return setErr({message: "Please enter your message."});
    setContactData({
      fullName: "",
      email: "",
      message: ""
    })
    setErr({
      fullName: '',
      email: "",
      message: ""
    })
    alert("✓ Thank you! Your message has been sent to Calcora.")
  }
  return (
    <form 
    action={'https://formsubmit.co/calcora.contact@gmail.com'}
    method="POST"
    onSubmit={handleSubmit}
    className="md:w-[50vw] w-[90vw] flex flex-col mb-20   mt-15 bg-white rounded-md p-5 shadow-sm">
        <h2 className="font-semibold text-2xl md:text-[30px] tracking-tight self-center">Contact Form</h2>
      <InputField
        placeholder="Enter your full name."
        autoFocus={true}
        value={contactData.fullName}
        name="fullName"
        classes={`mt-5 `}
        handleChanges={handleChanges}
      />
      {err.fullName && <p className="self-start   text-red-500">{err.fullName}</p>}
      <InputField
        placeholder="Enter you email address."
        value={contactData.email}
        type="text"
        classes={`mt-5`}
        name="email"
        handleChanges={handleChanges}
      />
      {err.email && <p className="self-start text-red-500">{err.email}</p>}
      <textarea
        placeholder="Type your message here."
        value={contactData.message}
        name="message"
        onChange={handleChanges}
        className="outline-0 border mt-5 border-gray-400 w-full rounded-md  p-3 resize-none overflow-x-auto h-[150px]"
      />
        {err.message && <p className="self-start   text-red-500">{err.message}</p>}
      <BlueBtn btnText={`Send Message`} type="submit" classes="mt-3 self-center" />
    </form>
  );
};
export default ContactForm

