import placeholder from "../placeholder.webp"

export default function Accueil() {
  return (
    <div className="bg-primaryB">
      <div className="grid grid-cols-2 gap-4 pl-10 pt-10 pb-4">
        <div className="">
          <h2 className="mt-4 text-2xl text-left font-bold text-white">Bonjour, mon nom est</h2>
          <h1 className="mt-2 text-4xl text-left font-bold text-white">Ambre Giraud-Lanza</h1>
          <div className="flex flex-row ">
            <h2 className="mt-2 text-2xl text-left font-bold text-white">Et je suis une  </h2>
            <h2 className=" ml-2 mt-2 text-2xl font-bold text-primaryC">Développeuse</h2>
          </div>
          <p className="mt-4 text-left">Je suis une développeuse web junior avec des compétences en front et back end.</p>

        </div>
        <div className="">
          <img src={placeholder} alt="logo" />

        </div>

      </div>
      
    </div>
  )
}