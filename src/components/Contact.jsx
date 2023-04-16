import React from 'react';
import Title from './Title';

function Contact() {
   return (
      <div className="flex flex-col mb-10 mx-auto">
         <div className="flex justify-center items-center">
            <form
               action="https://getform.io/f/d1f1ab10-b570-4eb7-80a3-c1caac07b613"
               method="POST"
               className="flex flex-col w-full md:w-7/12"
            >
               <Title>Contact</Title>
               <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                  required
               />
               <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                  required
               />
               <textarea
                  name="message"
                  placeholder="Message"
                  rows="6"
                  className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
                  required
               />
               <button
                  type="submit"
                  className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 filter drop-shadow-lg transition-all hover:stroke-white hover:scale-105"
               >
                  Work With Me
               </button>
            </form>
         </div>
      </div>
   )
}

export default Contact;