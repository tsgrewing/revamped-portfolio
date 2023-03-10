import { TerminalIcon, FireIcon } from "@heroicons/react/solid";
import React from "react";
import { tech } from "../data";

export default function Skills() {

  let skillLevel = (num) => {
    let html = []

    for (let i=0; i<num; i++){
      let color = (i+3)*100;
      let snip = <FireIcon className={`text-red-${color} w-6 h-6 flex-shrink-0` }/>

      html.push(snip)
    }
    console.log(html)
    return html;
  }

  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <TerminalIcon className="w-10 inline-block mb-4 text-red-400" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            These are some of the technologies that I have worked with. I'm always looking to this list. 
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {tech.map((skill) => (
            <div key={skill.name} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full w-full">
                <span className="title-font font-medium text-white">
                  {skill.name}
                </span>
                <span className="flex ml-auto">
                {skillLevel(skill.level)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
