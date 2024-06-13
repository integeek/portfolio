export default function Navbar() {
  return (
    <div className="navbar sticky top-0 bg-base-100">
      <div className="flex-1 sticky top-0">
        <a className="btn btn-ghost text-xl">Portfolio</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
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