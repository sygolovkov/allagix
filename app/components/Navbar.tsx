export default function Navbar() {
  return (
    <header className="nav">
      <a href="#" className="logo" aria-label="AllagiX">
        <svg className="mark" viewBox="0 0 96 68" aria-hidden="true">
          <defs>
            <linearGradient
              id="logoGradient"
              x1="6"
              y1="8"
              x2="86"
              y2="56"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#ffe783" />
              <stop offset=".48" stopColor="#ffca18" />
              <stop offset="1" stopColor="#f0a900" />
            </linearGradient>
          </defs>
          <path className="logo-shape" d="M7 56 35 8 50 35 42 48 34 32 20 56Z" />
          <path className="logo-shape" d="M28 56 60 22h18L46 56Z" />
          <path className="logo-shape" d="M60 35 81 56H63L51 44Z" />
        </svg>
        <span className="brand-name">
          Allagi<span className="brand-x">X</span>
        </span>
      </a>
      <nav className="nav-links" aria-label="Основная навигация">
        <a href="#commerce">Для e-commerce</a>
        <a href="#how">Как работает</a>
        <a href="#global">География</a>
      </nav>
      <a className="btn" href="#lead">
        Оставить заявку
      </a>
    </header>
  );
}
