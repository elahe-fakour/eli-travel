import React, { useState, useEffect } from "react"
import PageContainer from "../components/PageContainer"
import { FiMail, FiLinkedin, FiGithub, FiYoutube, FiSend } from "react-icons/fi"

const Contact = () => {
  const [title, setTitle] = useState("")
  const fullTitle = "Let's get in touch ✨"

  
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setTitle(fullTitle.slice(0, i) + (i < fullTitle.length ? "|" : "")) // Add blinking cursor
      i++
      if (i > fullTitle.length) {
        clearInterval(interval)
        setTitle(fullTitle) 
      }
    }, 80)
    return () => clearInterval(interval)
  }, [])

  return (
    <PageContainer>
      
      <div className="max-w-xl mx-auto bg-white/70 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-2xl shadow-brandBlue/15 border border-brandBlue/10">
        
        <h1 className="text-4xl font-extrabold text-brandBlue text-center mb-4 min-h-[40px]">
          {title}
        </h1>

        <p className="text-center text-brandBlue/70 mb-10 text-lg font-medium">Have a question, want to start a project, or just say hi? 💛</p>

        <form className="space-y-6">
          <div className="relative">
            <label className="text-brandBlue font-semibold block mb-2">Name</label>
            <input type="text" placeholder="Your name..." className="w-full rounded-xl px-4 py-3 bg-white/90 border-2 border-brandBlue/10 focus:border-brandGold focus:ring-4 focus:ring-brandGold/30 outline-none transition duration-300 shadow-sm" />
          </div>

          <div className="relative">
            <label className="text-brandBlue font-semibold block mb-2">Email</label>
            <input type="email" placeholder="Your email..." className="w-full rounded-xl px-4 py-3 bg-white/90 border-2 border-brandBlue/10 focus:border-brandGold focus:ring-4 focus:ring-brandGold/30 outline-none transition duration-300 shadow-sm" />
          </div>

          <div className="relative">
            <label className="text-brandBlue font-semibold block mb-2">Message</label>
            <textarea rows="5" placeholder="Write your message..." className="w-full rounded-xl px-4 py-3 bg-white/90 border-2 border-brandBlue/10 focus:border-brandGold focus:ring-4 focus:ring-brandGold/30 outline-none transition duration-300 shadow-sm resize-none" />
          </div>

          <button 
            type="submit" 
            className="w-full flex items-center justify-center gap-2 bg-brandBlue text-white py-3 rounded-xl 
                       font-bold hover:bg-brandGold hover:text-brandBlue transition duration-300 
                       shadow-lg shadow-brandBlue/30 hover:shadow-brandGold/50 transform hover:scale-[1.01]"
          >
            Send Message
            <FiSend size={18} />
          </button>
        </form>


        <div className="mt-14 pt-8 border-t border-brandBlue/10">
          <h2 className="text-center text-2xl font-bold text-brandBlue mb-6">Let’s connect on social media ✨</h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            
            <a href="mailto:elahe.fakoor16@gmail.com" className="flex flex-col items-center gap-2 p-4 rounded-2xl shadow-md border-t-4 border-brandGold 
                hover:shadow-xl hover:-translate-y-1 transition duration-300 bg-white">
              <FiMail size={30} className="text-brandBlue group-hover:text-brandGold" />
              <span className="text-xs font-semibold text-brandBlue/70">Email</span>
            </a>

            <a href="https://www.linkedin.com/in/elahe-fakour" className="flex flex-col items-center gap-2 p-4 rounded-2xl shadow-md border-t-4 border-brandGold
                hover:shadow-xl hover:-translate-y-1 transition duration-300 bg-white">
              <FiLinkedin size={30} className="text-brandBlue" />
              <span className="text-xs font-semibold text-brandBlue/70">LinkedIn</span>
            </a>

            <a href="https://github.com/elahe-fakour" className="flex flex-col items-center gap-2 p-4 rounded-2xl shadow-md border-t-4 border-brandGold
                hover:shadow-xl hover:-translate-y-1 transition duration-300 bg-white">
              <FiGithub size={30} className="text-brandBlue" />
              <span className="text-xs font-semibold text-brandBlue/70">GitHub</span>
            </a>

            <a href="https://youtube.com" className="flex flex-col items-center gap-2 p-4 rounded-2xl shadow-md border-t-4 border-brandGold
                hover:shadow-xl hover:-translate-y-1 transition duration-300 bg-white">
              <FiYoutube size={30} className="text-brandBlue" />
              <span className="text-xs font-semibold text-brandBlue/70">YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}

export default Contact