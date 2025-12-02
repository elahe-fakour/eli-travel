import React from "react";
import PageContainer from "../components/PageContainer";
import { FaCode, FaReact, FaMobileAlt, FaPalette } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";


const skills = [
  { 
    name: "Tailwind CSS Mastery", 
    icon: SiTailwindcss, 
    description: "Rapid and responsive styling using Utility-First CSS, specialized in modern and clean layouts.",
    color: "text-cyan-500",
    shadow: "shadow-cyan-400/30"
  },
  { 
    name: "React Development", 
    icon: FaReact, 
    description: "Building advanced Single Page Applications (SPAs) and implementing optimized state management.",
    color: "text-blue-500",
    shadow: "shadow-blue-400/30"
  },
  { 
    name: "JavaScript/ES6+", 
    icon: SiJavascript, 
    description: "Writing robust and clean client-side logic utilizing the latest JavaScript standards and features.",
    color: "text-yellow-500",
    shadow: "shadow-yellow-400/30"
  },
  { 
    name: "Responsive Design", 
    icon: FaMobileAlt, 
    description: "Ensuring flawless and consistent user experience across all devices: mobile, tablet, and desktop.",
    color: "text-green-500",
    shadow: "shadow-green-400/30"
  },
];

function AboutMe() {
  return (
    <PageContainer>
      <div className="max-w-6xl mx-auto px-4 py-12">
        
      
        <section className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-brandBlue/10 relative overflow-hidden">
          
          
          <div className="absolute inset-0 rounded-3xl p-1 bg-gradient-to-br from-brandBlue to-brandGold">
            <div className="bg-brandCream rounded-[calc(1.5rem-4px)] h-full"></div>
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            
            <div className="flex-shrink-0">
              <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-full p-1 bg-gradient-to-tr from-brandGold to-brandBlue transform hover:scale-105 transition duration-500 shadow-xl">
                <img 
                  src="/images/eli-portrait.jpg" 
                  alt="Eli portrait" 
                  className="w-full h-full object-cover rounded-full border-4 border-brandCream" 
                />
              </div>
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-brandBlue mb-3">
                <span className="inline-block bg-gradient-to-r from-brandBlue to-brandGold bg-clip-text text-transparent">Eli Travel</span>
              </h1>
              
              <p className="text-xl leading-relaxed text-gray-700">
                Hi, I'm <span className="font-bold text-brandBlue">Eli</span>, a Front-End Developer and content creator from Iran.
              </p>
              
              <p className="mt-4 text-lg text-gray-600 italic">
                My passion lies in blending <span className="font-semibold text-brandBlue">coding</span> 💻 with <span className="font-semibold text-brandGold">storytelling</span> 🎬 to build unique digital experiences.
              </p>
              
              <div className="mt-6">
                <a 
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-lg font-bold rounded-full text-brandCream bg-brandBlue hover:bg-brandBlue/90 transition-all duration-300 shadow-lg shadow-brandBlue/40 hover:shadow-xl"
                >
                  <FaCode className="text-brandGold"/>
                  Start a Project
                </a>
              </div>
            </div>
          </div>
        </section>

       
        <section className="mt-16">
          <h2 className="text-3xl font-extrabold text-center text-brandBlue mb-10 border-b-2 border-brandGold pb-2 max-w-lg mx-auto">
            🛠️ Key Front-End Skills
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className={`
                  p-6 bg-white rounded-xl shadow-xl border-t-4 border-brandGold
                  hover:shadow-2xl hover:scale-[1.03] transition duration-300 ease-in-out
                  transform hover:shadow-brandGold/30
                `}
              >
                <skill.icon className={`w-10 h-10 mb-4 ${skill.color} transform transition duration-500 hover:rotate-6`} />
                <h3 className="text-xl font-bold text-brandBlue mb-2">{skill.name}</h3>
                <p className="text-gray-600 text-base">{skill.description}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </PageContainer>
  );
}

export default AboutMe;