import ImagePortfolio from "../Assets/ImagePortfolio.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { IoMail } from "react-icons/io5"

export default function Accueil() {
  return (
    <div className="min-h-screen bg-primaryB">
      <div className="grid grid-cols-2 gap-4 py-48 pl-16"> {/*Division de la page en 2 colonnes*/} 
        <div className="pl-16"> {/*Colonne de gauche*/} 
          <h2 className="mt-4 font-sans text-4xl font-extrabold text-left text-white">Bonjour, mon nom est</h2>
          <h1 className="mt-2 font-extrabold text-left text-white font-sen text-7xl">Ambre Giraud-Lanza</h1>
          <div className="flex flex-row "> {/*Mettre sur la même ligne les 2 parties de la phrase*/} 
            <h2 className="mt-2 font-sans text-4xl font-extrabold text-left text-white">Et je suis une  </h2>
            <h2 className="mt-2 ml-2 font-sans text-4xl font-extrabold text-primaryC">Développeuse</h2>
          </div>
          <p className="mt-4 text-2xl text-left">Je suis une développeuse web junior avec des compétences en front et back end.</p>

          <div className="flex mt-4 space-x-4">
            <a
              href="https://github.com/integeek"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 transition duration-300 rounded-full hover:border-4 hover:border-primaryC"
            > 
              <FaGithub className="w-8 h-8 text-primaryC" />
            </a>
            <a
              href="https://fr.linkedin.com/in/ambre-giraud-lanza-069201236 "
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 transition duration-300 rounded-full hover:border-4 hover:border-primaryC"
            >
              <FaLinkedin className="w-8 h-8 text-primaryC" />
            </a>
            <a
              href="mailto:ambre.giraudlanza@outlook.fr"
              className="p-2 transition duration-300 rounded-full hover:border-4 hover:border-primaryC"
            >
              <IoMail className="w-8 h-8 text-primaryC" />
            </a>
          </div>

          <div className="pl-16">
            <a href="/CV.pdf" download="Ambre Giraud-Lanza CV" target="_blank">
              <button 
                type="button" 
                className="absolute left-0 px-10 py-4 mt-6 ml-32 text-lg text-black transition-transform transform rounded-lg shadow-lg bg-primaryC hover:bg-primaryC-dark hover:scale-105"
              >
      Télécharger mon CV
              </button>
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center ml-12"> {/*Colonne de droite*/} 
          <img src={ImagePortfolio} alt="logo" />
        </div>
        
      </div>
      
    </div>
  )
}