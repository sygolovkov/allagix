export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <a href="#" className="logo" aria-label="AllagiX">
            <svg className="mark" viewBox="0 0 96 68" aria-hidden="true">
              <defs>
                <linearGradient
                  id="logoGradientFooter"
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
              <path
                className="logo-shape"
                style={{ fill: "url(#logoGradientFooter)" }}
                d="M7 56 35 8 50 35 42 48 34 32 20 56Z"
              />
              <path
                className="logo-shape"
                style={{ fill: "url(#logoGradientFooter)" }}
                d="M28 56 60 22h18L46 56Z"
              />
              <path
                className="logo-shape"
                style={{ fill: "url(#logoGradientFooter)" }}
                d="M60 35 81 56H63L51 44Z"
              />
            </svg>
            <span className="brand-name">
              Allagi<span className="brand-x">X</span>
            </span>
          </a>
          <p>Международные платежи для бизнеса</p>
          <p>© 2026 AllagiX</p>
        </div>
        <div className="footer-bottom">
          <span>
            Все платежи защищены · Лицензированные платёжные партнёры
          </span>
          <div className="socials" aria-label="Социальные сети">
            <span>Мы в соцсетях</span>
            <a className="social" href="#" aria-label="Telegram">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="m21 3-7.5 18-4-8-7.5-3 19-7Z" />
                <path d="M9.5 13 21 3" />
              </svg>
            </a>
            <a
              className="social"
              href="mailto:hello@allagix.com"
              aria-label="Email"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M4 5h16v14H4z" />
                <path d="m4 7 8 6 8-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
