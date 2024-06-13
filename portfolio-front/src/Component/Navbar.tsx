export default function Navbar() {
  return (
    <div className="sticky top-0 navbar bg-base-100">
      <div className="sticky top-0 flex-1">
        <a className="text-xl font-sen btn btn-ghost">Portfolio</a>
      </div>
      <div className="flex-none">
        <ul className="px-1 menu menu-horizontal">
          <li><a>Accueil</a></li>
          <li><a>A propos</a></li>
          <li><a>Compétences</a></li>
          <li><a>Portfolio</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
    </div>
  )
}