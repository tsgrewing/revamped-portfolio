import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hey there, 
            <br className="hidden lg:inline-block" />
            I'm Tony, a full stack developer living in Nashville. 
          </h1>
          <p className="mb-8 leading-relaxed">
            I have experience working across the stack and creating apps on my own or in collaboration with a team. I primarily work in JavaScript, Node.js, Express.js and React, but I am always ready to branch out and take on new technologies and learn new skills. Take a look at some of my past projects for a better idea of my skills and strengths, and don't hesitate to get in touch with me to offer feedback or ideas, or just to say hello.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded text-lg">
              Get in Touch
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 hover:text-white rounded text-lg">
              Projects
            </a>
            <a
              href="#skills"
              className="ml-4 inline-flex text-white bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 hover:text-white hover:animate-pulse rounded text-lg">
              Skills
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src="./glacier.jpg"
          />
        </div>
      </div>
    </section>
  );
}
