import { DesktopComputerIcon } from "@heroicons/react/outline";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <DesktopComputerIcon className="mx-auto text-blue-400 inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My Work
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Some examples of past work and current projects. I'm always open to feedback and questions, so feel free to reach out. 
          </p>
        </div>
        <div className="flex flex-wrap">
          {projects.map((project) => (

            <a
              href={project.repo}
              key={project.image}
              className="sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-top"
                  src={project.image}
                />
                <div className="px-8 py-10 absolute z-1 w-full h-full text-center border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-90">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>

          ))}
        </div>
      </div>
    </section>
  );
}
