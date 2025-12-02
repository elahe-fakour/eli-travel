import React, { useState, useEffect } from "react"
import PageContainer from "../components/PageContainer"
import { FiGithub, FiExternalLink, FiCode, FiArrowRightCircle } from "react-icons/fi"
import { format } from "date-fns"
import { FaRegStar } from "react-icons/fa"


const GITHUB_USERNAME = "elahe-fakour"
const GITHUB_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30`

const REQUIRED_PROJECTS = ["Eli-portofilo", "morsecode"]
const MAX_PROJECTS_TO_DISPLAY = 10

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(GITHUB_URL)
        if (!response.ok) {
          throw new Error(`GitHub API Error: ${response.statusText}`)
        }
        const data = await response.json()

        let allRepos = data.filter((repo) => !repo.fork)

        
        const required = allRepos.filter((repo) => REQUIRED_PROJECTS.includes(repo.name))

        const others = allRepos.filter((repo) => !REQUIRED_PROJECTS.includes(repo.name))

        const finalProjects = [...required, ...others].slice(0, MAX_PROJECTS_TO_DISPLAY)

        setProjects(finalProjects)
      } catch (err) {
        setError("Failed to load GitHub repositories.")
        console.error("Fetching GitHub Repos failed:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const renderProjectCard = (project) => (
   
    <div 
      key={project.id} 
      className="bg-white p-6 rounded-xl shadow-xl border border-brandBlue/10 
                 hover:shadow-2xl hover:border-brandGold hover:-translate-y-1 transition duration-300 
                 flex flex-col h-full relative overflow-hidden"
    >
        
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brandGold to-brandBlue"></div>

      <div className="flex justify-between items-start mb-3 mt-1">
        <h3 className="text-xl font-bold text-brandBlue">{project.name}</h3>
        <div className="flex items-center text-brandBlue/60 text-sm gap-1 bg-brandCream/70 p-1.5 rounded-full">
          <FaRegStar className="text-brandGold"/> {project.stargazers_count}
        </div>
      </div>

      <p className="text-brandBlue/70 mb-4 flex-grow text-sm italic">{project.description || "No description available for this repository."}</p>

      <div className="mt-auto">
        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4 text-xs font-medium text-brandBlue/70">
          {project.language && (
            <span className="inline-flex items-center gap-1 font-semibold text-brandBlue">
              <FiCode /> {project.language}
            </span>
          )}
          <span>Updated: {format(new Date(project.updated_at), "MMM dd, yyyy")}</span>
        </div>

        <div className="flex gap-4 pt-3 border-t border-brandBlue/5">
          <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-brandBlue hover:text-brandGold font-bold transition">
            View Code <FiGithub />
          </a>

          {project.homepage && (
            <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-brandBlue hover:text-brandGold font-bold transition">
              Demo <FiExternalLink />
            </a>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <PageContainer>
      <div className="py-8 max-w-7xl mx-auto px-4">
        
       
        <h1 className="text-5xl font-extrabold mb-4 text-brandBlue text-center">
            <span className="inline-block bg-gradient-to-r from-brandGold to-brandBlue bg-clip-text text-transparent">GitHub Projects 💻</span>
        </h1>
        <p className="text-brandBlue/70 text-xl mb-10 text-center max-w-2xl mx-auto font-medium">A list of my latest public GitHub repositories, automatically fetched and beautifully presented.</p>

       
        <div className="text-center mb-16">
          <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-3.5 bg-brandGold text-brandBlue font-bold rounded-xl 
                       shadow-[0_4px_12px_rgba(255,199,0,0.45)] hover:shadow-[0_8px_20px_rgba(255,199,0,0.6)] 
                       hover:scale-[1.05] transition duration-300">
            View All Repositories
            <FiArrowRightCircle className="w-5 h-5" />
          </a>
        </div>

        {loading && <div className="text-center py-10 text-brandBlue text-xl animate-pulse">Loading your cozy GitHub projects...</div>}

        {error && <div className="text-center mt-16 p-8 bg-red-100/70 border border-red-300 rounded-xl shadow-lg text-red-700 font-semibold">{error}</div>}

        {!loading && !error && projects.length > 0 && <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{projects.map(renderProjectCard)}</div>}

        {!loading && !error && projects.length === 0 && (
          <div className="text-center mt-16 p-8 bg-white/80 rounded-xl shadow border border-brandBlue/10">
            <h2 className="text-2xl font-semibold text-brandBlue">No projects found.</h2>
            <p className="text-brandBlue/70 mt-2">Please make sure you have public GitHub repositories available.</p>
          </div>
        )}
      </div>
    </PageContainer>
  )
}

export default Projects