'use client'

import { useEffect, useRef, useState } from "react";
import Alert from "./Alert";
import useAlert from "@/hooks/useAlert";
import { useFormState } from "react-dom";
import { sendEmail } from "@/lib/action";
import { FiArrowUpRight } from "react-icons/fi";

const ContactForm = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [state, formAction] = useFormState(sendEmail, undefined);
  const [loading, setLoading] = useState(false);

  const sendingEmail = () => {
    showAlert({
        show: true,
        text: "Sending emall...",
        type: "success",
      });
    const formData = new FormData(formRef.current);
    formData.append("name", form.name); 
    formData.append("email", form.email); 
    formData.append("message", form.message); 
    formAction(formData);
  };

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    sendingEmail()
  };


  useEffect(() => {
    if (state) {
        hideAlert();
        if (state.status === "success"){
            showAlert({
                show: true,
                text: "Thank you for your message 😃",
                type: "success",
            });
            setLoading(false);
            setTimeout(() => {
              hideAlert();
              setForm({
                name: "",
                email: "",
                message: "",
              });
            }, 5000);
        
        } else {

                showAlert({
                    show: true,
                    text: state.message,
                    type: "danger",
                });
                setLoading(false);
                setTimeout(() => {
                  hideAlert();
                }, 5000);
                // router.refresh()
        }
    }
  },[state])

    return (
        <div className="flex flex-col pointer-events-stroke lg:w-1/2 w-full absolute z-10 lg:pt-24 lg:pl-24 px-10 pt-40">
          {alert.show && <Alert {...alert} />}
            <h3 className='flex text-white/60 font-fog lg:text-4xl text-2xl'>Contact.</h3>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className='mt-4 flex flex-col gap-4'
            >
              <label className='flex flex-col'>
                <span className='text-white/60 font-fog mb-2  text-sm lg:text-md '>Your Name</span>
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  required
                  className='text-black text-sm lg:text-md  md:py-3 md:px-6 py-2 px-4 font-fog placeholder:text-secondary rounded-lg outline-none border-none'
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white/60 font-fog mb-2 text-sm lg:text-md'>Your email</span>
                <input
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email address?"
                  required
                  className='text-black text-sm lg:text-md md:py-3 md:px-6 py-2 px-4 font-fog placeholder:text-secondary rounded-lg outline-none border-none'
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white/60 font-fog mb-2 text-sm lg:text-md'>Your Message</span>
                <textarea
                  rows={3}
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  placeholder='What you want to say?'
                  required
                  className='text-black text-sm lg:text-md md:py-3 md:px-6 py-2 px-4 font-fog placeholder:text-secondary rounded-lg outline-none border-none font-medium'
                />
              </label>
              
              <div className="flex flex-row gap-20">
                <div>
                  
                  <button
                    type='submit'
                    {...(loading ? { disabled: true } : {})}
                    className='flex items-center  mt-2 self-end md:text-3xl text-2xl font-light leading-none tracking-wider pointer-events-auto text-white/60 transition-all font-fog hover-effect'
                  >
                   
                    {loading ? "Sending..." : "Send"}
                  </button>
                </div>
                
              </div>
            </form>
        </div>
    )
}

export default ContactForm