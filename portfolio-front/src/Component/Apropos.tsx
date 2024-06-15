import Illustration1 from "../Assets/Illustration1.png"


export default function Apropos() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primaryG">
      <div className="grid grid-cols-2 gap-4 pl-10 py-34"> {/*Division de la page en 2 colonnes*/} 
        <div className="flex items-center justify-center"> {/*Colonne de gauche*/}
          <img src={Illustration1} alt="Image d'illustration" />
        </div>
        <div className="p-16"> {/*Colonne de droite*/} 
          <div className="flex flex-row "> {/*Mettre sur la même ligne les 2 parties de la phrase*/} 
            <h2 className="mt-2 font-sans text-5xl font-extrabold text-left text-white">A</h2>
            <h2 className="mt-2 ml-2 font-sans text-5xl font-extrabold text-primaryC">Propos de moi</h2>
          </div>
          <div className="max-w-xl">
            <p className="text-2xl text-left mt-14">Actuellement étudiante en 1ere année du cycle ingénieur à l’ISEP à Paris spécialisé en science de la donnée, je développe des sites web et des projets scolaires </p>
            <p className="mt-8 text-2xl text-left">Grâce à un semestre réalise à l’université de Oulu en Finlande, j’ai pu améliorer mes compétences sur Unity et sur Blender </p>
            <p className="mt-8 text-2xl text-left">Passionnée par l’informatique mais aussi les jeux vidéos, j’essaye d’allier ces passions dans mes projets </p>
          </div>
        </div>
      </div>
      
    </div>
  )
}