import nestjs from "../Assets/nestjs.svg"
import react from "../Assets/react.svg"
import tailwind from "../Assets/tailwind.svg"
import python from "../Assets/python.svg"
import vscode from "../Assets/vscode.svg"
import github from "../Assets/github.svg"
import unity from "../Assets/unity.svg"
import wordpress from "../Assets/wordpress.svg"
import figma from "../Assets/figma.svg"
import blender from "../Assets/blender.svg"
import french from "../Assets/french.svg"
import uk from "../Assets/uk.svg"
import team from "../Assets/team.svg"


export default function MesCompetences() {
  return (
    <div className="min-h-screen p-16 bg-primaryB">
      <div className="flex flex-row items-center justify-center mt-8 "> {/*Mettre sur la même ligne les 2 parties de la phrase*/} 
        <h2 className="mt-2 font-sans text-5xl font-extrabold text-left text-white">Mes</h2>
        <h2 className="mt-2 ml-2 font-sans text-5xl font-extrabold text-primaryC">Compétences</h2>
      </div>
      
      <div className="flex flex-row justify-center gap-x-16 "> {/*Les 3 cards*/} 
        <div className="card w-[400px] h-[430px] bg-primaryG shadow-xl mt-16 flex items-center">
          <div className="card-body">
            <h2 className="flex items-center justify-center text-3xl text-white card-title">Développement web</h2>

            <div className="flex flex-row mt-4 gap-x-24">{/*Première ligne d'image*/} 
              <img src={nestjs} alt="Logo NestJS" className="w-[94px] h-[94px]" />
              <img src={react} alt="Logo React" className="w-[94px] h-[94px]"  />
            </div>
            <div className="flex flex-row mt-20 gap-x-24">{/*Deuxième ligne d'image*/} 
              <img src={wordpress} alt="Logo React" className="w-[94px] h-[94px]"/>
              <img src={tailwind} alt="Logo tailwind" className="w-[94px] h-[94px]"/>
            </div>
          </div>
        </div>

        <div className="card w-[400px] h-[430px] bg-primaryG shadow-xl mt-16 flex items-center">
          <div className="card-body">
            <h2 className="flex items-center justify-center text-3xl text-white card-title">Compétences techniques</h2>
            <div className="flex flex-row mt-4 gap-x-8 ">{/*Première ligne d'image*/} 
              <img src={python} alt="Logo Python" className="w-[94px] h-[94px]" />
              <img src={vscode} alt="Logo Vscode" className="w-[94px] h-[94px]"  />
              <img src={github} alt="Logo Github" className="w-[94px] h-[94px]"  />
            </div>
            <div className="flex flex-row mt-20 gap-x-4">{/*Deuxième ligne d'image*/} 
              <img src={unity} alt="Logo Unity" className="w-[94px] h-[94px]"/>
              <img src={figma} alt="Logo Figma" className="w-[94px] h-[94px]"/>
              <img src={blender} alt="Logo Blender" className="w-[94px] h-[94px]"  />

            </div>      
          </div>
        </div>

        <div className="card w-[400px] h-[430px] bg-primaryG shadow-xl mt-16 flex items-center">
          <div className="card-body">
            <h2 className="flex items-center justify-center text-3xl text-white card-title">Compétences générales</h2>
            <div className="flex flex-row mt-4 gap-x-24">{/*Première ligne d'image*/} 
              <img src={french} alt="Logo drapeau français" className="w-[94px] h-[94px]" />
              <img src={uk} alt="Logo drapeau anglais" className="w-[94px] h-[94px]"  />
            </div>
            <div className="flex flex-row mt-20 gap-x-24">{/*Deuxième ligne d'image*/} 
              <img src={team} alt="Logo communication en team" className="w-[94px] h-[94px]"/>
              <img src={tailwind} alt="Logo tailwind" className="w-[94px] h-[94px]"/>
            </div>          </div>
        </div>
      </div>
      
    </div>
  )
}