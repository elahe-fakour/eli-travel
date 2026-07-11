import React from "react"
import { Link } from "react-router-dom"
import { FiGithub, FiYoutube, FiArrowRightCircle } from "react-icons/fi"
import { FaCode } from "react-icons/fa"
import PageContainer from "../components/PageContainer"

const HomePage = () => {
  return (
    <PageContainer>
      
      <section className="flex flex-col md:flex-row items-center justify-between gap-10 sm:gap-16 mb-24 pt-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 leading-tight">
            Hi, I'm <span className="inline-block bg-gradient-to-r from-brandGold to-yellow-400 bg-clip-text text-transparent">Eli</span> 👋
          </h1>

          <p className="text-lg sm:text-xl text-brandBlue/80 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
            A **React & Tailwind developer** who builds cozy, warm, and highly aesthetic UIs. Let's create something beautiful together.
          </p>

          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-brandGold text-brandBlue font-bold rounded-xl 
                       shadow-[0_4px_12px_rgba(255,199,0,0.45)] hover:shadow-[0_8px_20px_rgba(255,199,0,0.6)] 
                       hover:scale-[1.05] transition duration-300 transform active:scale-95"
          >
            <FaCode className="w-5 h-5"/>
            See My Projects
          </Link>
        </div>

        <div className="flex-1 flex justify-center order-first md:order-last">
          <div className="relative p-1 bg-gradient-to-br from-brandBlue to-brandGold rounded-full shadow-2xl shadow-brandBlue/20">
            <img 
              src={`${process.env.PUBLIC_URL}/images/eli-portrait.jpg`} 
              className="w-56 h-56 sm:w-72 sm:h-72 object-cover rounded-full border-4 border-brandCream" 
              alt="Eli" 
            />
          </div>
        </div>
      </section>


      <section className="mb-20">
        <h2 className="text-3xl font-extrabold text-brandBlue mb-10 border-b-2 border-brandGold pb-2 max-w-md mx-auto text-center">
            My Core Skills 🛠️
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            { title: "React Development", desc: "SPA architecture, Hooks, and optimized component lifecycle." },
            { title: "Tailwind CSS Mastery", desc: "Creating modern, responsive, and complex layouts with utility classes." },
            { title: "JavaScript/TypeScript", desc: "Solid logical foundation, asynchronous flow management, and API handling." },
            { title: "UI/UX Thinking", desc: "Focus on clean, accessible, and user-friendly 'cozy' designs." },
            { title: "API Integration", desc: "Efficient data fetching, state management, and clear loading UIs." },
            { title: "Responsive Design", desc: "Mobile-first approach, adaptive grids, and cross-device compatibility." },
          ].map((skill, i) => (
            <div 
              key={i} 
              className="bg-white p-6 rounded-xl shadow-xl border-t-4 border-brandGold 
                         hover:shadow-2xl hover:scale-[1.03] transition duration-300 
                         transform hover:border-brandBlue cursor-pointer"
            >
              <h3 className="text-xl font-bold text-brandBlue mb-2">{skill.title}</h3>
              <p className="text-brandBlue/70 text-sm">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="grid md:grid-cols-2 gap-10">
        
        <div className="bg-brandBlue p-8 rounded-2xl shadow-2xl shadow-brandBlue/30 text-brandCream">
          <h2 className="text-3xl font-bold mb-4">YouTube Vlogs 🎥</h2>
          <p className="text-brandCream/80 mb-6">Cozy vlogs, coding stories, aesthetic shorts, and more about my developer journey.</p>

          <Link 
            to="/videos" 
            className="inline-flex items-center gap-2 px-5 py-3 bg-brandGold text-brandBlue font-semibold rounded-lg 
                       shadow hover:bg-brandCream hover:text-brandBlue transition duration-300"
          >
            Explore All Videos 
            <FiYoutube className="w-5 h-5"/>
          </Link>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-2xl border border-brandGold/50">
          <h2 className="text-3xl font-bold mb-4 text-brandBlue">Featured Project ✨</h2>
          <h3 className="text-xl font-semibold mb-3 text-brandBlue/90">Personal React Portfolio</h3>
          <p className="text-brandBlue/70 mb-5">A cozy portfolio fully designed with modern Tailwind techniques and built with React.</p>

          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brandBlue hover:text-brandGold font-bold transition">
            View on GitHub 
            <FiGithub className="w-5 h-5"/>
          </a>
        </div>

      </section>
    </PageContainer>
  )
}

export default HomePage
