import placeholder from "../placeholder.webp"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { IoMail } from "react-icons/io5"

export default function Accueil() {
  return (
    <div className="bg-primaryB">
      <div className="grid grid-cols-2 gap-4 py-48 pl-10"> {/*Division de la page en 2 colonnes*/} 
        <div className=""> {/*Colonne de gauche*/} 
          <h2 className="mt-4 text-2xl text-left text-white font-sans font-extrabold">Bonjour, mon nom est</h2>
          <h1 className="mt-2  font-sen font-extrabold text-4xl text-left text-white">Ambre Giraud-Lanza</h1>
          <div className="flex flex-row "> {/*Mettre sur la même ligne les 2 parties de la phrase*/} 
            <h2 className="mt-2 text-2xl font-sans font-extrabold text-left text-white">Et je suis une  </h2>
            <h2 className="mt-2 ml-2 text-2xl font-sans font-extrabold text-primaryC">Développeuse</h2>
          </div>
          <p className="mt-4 text-left">Je suis une développeuse web junior avec des compétences en front et back end.</p>

          <div className="flex mt-4 space-x-4">
            <a
              href="https://github.com/integeek"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:border-4 hover:border-primaryC transition duration-300"
            > 
              <FaGithub className="text-primaryC w-8 h-8" />
            </a>
            <a
              href="https://fr.linkedin.com/in/ambre-giraud-lanza-069201236 "
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:border-4 hover:border-primaryC transition duration-300"
            >
              <FaLinkedin className="text-primaryC w-8 h-8" />
            </a>
            <a
              href="mailto:ambre.giraudlanza@outlook.fr"
              className="p-2 rounded-full hover:border-4 hover:border-primaryC transition duration-300"
            >
              <IoMail className="text-primaryC w-8 h-8" />
            </a>
          </div>

          <div>
            <button className="absolute left-0 mt-6 ml-10 text-black btn btn-active hover:bg-primaryC bg-primaryC">Télécharger mon CV</button>
          </div>
        </div>
        <div className="ml-12"> {/*Colonne de droite*/} 
          <img src={placeholder} alt="logo" />
        </div>
      </div>
      
    </div>
  )
}