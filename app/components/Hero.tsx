export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy reveal">
        <div className="eyebrow">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M3.7 9h16.6M3.7 15h16.6M12 3c2 2.25 3 5.25 3 9s-1 6.75-3 9M12 3c-2 2.25-3 5.25-3 9s1 6.75 3 9"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          Международные платежи для бизнеса
        </div>
        <h1 className="hero-title">
          <span className="hero-line">Оплата</span>
          <span className="hero-line">поставщикам</span>
          <span className="hero-line">по всему</span>
          <span className="hero-line">миру без</span>
          <span className="hero-line accent">ограничений</span>
        </h1>
        <p className="lead">
          Решаем сложные платежи для торговых компаний, селлеров и импортеров.
          Быстро, безопасно и конфиденциально.
        </p>
        <div className="hero-actions">
          <a className="btn shine" href="#lead">
            Оставить заявку
          </a>
          <span className="micro-trust">
            Персональное решение под каждый платеж
          </span>
        </div>
        <div className="mobile-browser-note">
          Работает через браузер - без установки
        </div>
      </div>

      <div className="hero-visual reveal" aria-hidden="true">
        <div className="hero-globe" aria-hidden="true">
          <svg viewBox="0 0 660 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="globeBg" cx="42%" cy="38%" r="56%" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="rgba(255,248,220,0.95)" />
                <stop offset="55%" stopColor="rgba(245,244,255,0.75)" />
                <stop offset="100%" stopColor="rgba(220,215,255,0.55)" />
              </radialGradient>
              <radialGradient id="globeEdge" cx="50%" cy="50%" r="50%">
                <stop offset="75%" stopColor="rgba(104,39,232,0)" />
                <stop offset="100%" stopColor="rgba(104,39,232,0.2)" />
              </radialGradient>
              <radialGradient id="globeShine" cx="32%" cy="28%" r="48%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>
              <radialGradient id="cGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255,202,24,0.2)" />
                <stop offset="60%" stopColor="rgba(255,202,24,0.04)" />
                <stop offset="100%" stopColor="rgba(255,202,24,0)" />
              </radialGradient>
              <clipPath id="gc">
                <circle cx="290" cy="248" r="210" />
              </clipPath>
              <filter id="gf" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="5" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="sgf" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="12" />
              </filter>
            </defs>
            <circle cx="290" cy="248" r="240" fill="rgba(255,202,24,0.06)" />
            <circle cx="290" cy="248" r="225" fill="rgba(104,39,232,0.04)" />
            <circle cx="290" cy="248" r="210" fill="url(#globeBg)" />
            <circle cx="290" cy="248" r="210" fill="url(#globeEdge)" />
            <circle cx="290" cy="248" r="210" fill="url(#cGlow)" />
            <g clipPath="url(#gc)" className="globe-lines">
              <ellipse cx="290" cy="248" rx="210" ry="44" stroke="rgba(104,39,232,0.15)" strokeWidth="1.2" fill="none" />
              <ellipse cx="290" cy="248" rx="210" ry="92" stroke="rgba(104,39,232,0.13)" strokeWidth="1.1" fill="none" />
              <ellipse cx="290" cy="248" rx="210" ry="140" stroke="rgba(104,39,232,0.11)" strokeWidth="1" fill="none" />
              <ellipse cx="290" cy="248" rx="210" ry="178" stroke="rgba(104,39,232,0.09)" strokeWidth="0.9" fill="none" />
              <ellipse cx="290" cy="248" rx="210" ry="205" stroke="rgba(104,39,232,0.07)" strokeWidth="0.8" fill="none" />
              <line x1="80" y1="248" x2="500" y2="248" stroke="rgba(104,39,232,0.2)" strokeWidth="1.5" />
              <ellipse cx="290" cy="248" rx="44" ry="210" stroke="rgba(104,39,232,0.15)" strokeWidth="1.2" fill="none" />
              <ellipse cx="290" cy="248" rx="92" ry="210" stroke="rgba(104,39,232,0.13)" strokeWidth="1.1" fill="none" />
              <ellipse cx="290" cy="248" rx="140" ry="210" stroke="rgba(104,39,232,0.11)" strokeWidth="1" fill="none" />
              <ellipse cx="290" cy="248" rx="178" ry="210" stroke="rgba(104,39,232,0.09)" strokeWidth="0.9" fill="none" />
              <ellipse cx="290" cy="248" rx="205" ry="210" stroke="rgba(104,39,232,0.07)" strokeWidth="0.8" fill="none" />
              <line x1="290" y1="38" x2="290" y2="458" stroke="rgba(104,39,232,0.2)" strokeWidth="1.5" />
            </g>
            <circle cx="290" cy="248" r="210" fill="none" stroke="rgba(104,39,232,0.22)" strokeWidth="1.5" />
            <circle cx="290" cy="248" r="210" fill="url(#globeShine)" />
            <g className="globe-orbit">
              <ellipse cx="290" cy="248" rx="258" ry="76" stroke="rgba(104,39,232,0.16)" strokeWidth="1.5" fill="none" strokeDasharray="7 5" transform="rotate(-18 290 248)" />
            </g>
            <path className="globe-route-1" d="M186 220 Q238 180 292 195" stroke="rgba(255,202,24,0.9)" strokeWidth="2.2" fill="none" strokeLinecap="round" />
            <path className="globe-route-2" d="M292 195 Q344 175 392 205" stroke="rgba(104,39,232,0.8)" strokeWidth="2.2" fill="none" strokeLinecap="round" />
            <path className="globe-route-3" d="M186 220 Q222 272 248 296" stroke="rgba(25,184,122,0.8)" strokeWidth="2" fill="none" strokeLinecap="round" />
            <circle cx="392" cy="205" r="22" fill="rgba(255,202,24,0.12)" filter="url(#sgf)" />
            <circle cx="186" cy="220" r="18" fill="rgba(104,39,232,0.1)" filter="url(#sgf)" />
            <circle className="globe-dot-1" cx="392" cy="205" r="8" fill="#ffca18" filter="url(#gf)" />
            <circle cx="392" cy="205" r="8" fill="none" stroke="rgba(255,202,24,0.45)" strokeWidth="7" opacity="0.3" />
            <line x1="392" y1="197" x2="392" y2="158" stroke="rgba(255,202,24,0.6)" strokeWidth="1.5" />
            <rect x="360" y="136" width="64" height="22" rx="11" fill="rgba(255,255,255,0.96)" stroke="rgba(255,202,24,0.5)" strokeWidth="1.2" />
            <text x="392" y="152" textAnchor="middle" fontSize="10" fontWeight="700" fill="#7a5800" fontFamily="system-ui,sans-serif">🇨🇳 Китай</text>
            <circle className="globe-dot-2" cx="330" cy="218" r="6" fill="#6827e8" filter="url(#gf)" />
            <circle cx="330" cy="218" r="6" fill="none" stroke="rgba(104,39,232,0.4)" strokeWidth="5" opacity="0.3" />
            <circle className="globe-dot-4" cx="186" cy="220" r="7" fill="#6827e8" filter="url(#gf)" />
            <circle cx="186" cy="220" r="7" fill="none" stroke="rgba(104,39,232,0.4)" strokeWidth="6" opacity="0.28" />
            <line x1="186" y1="213" x2="158" y2="174" stroke="rgba(104,39,232,0.5)" strokeWidth="1.5" />
            <rect x="118" y="153" width="78" height="22" rx="11" fill="rgba(255,255,255,0.96)" stroke="rgba(104,39,232,0.32)" strokeWidth="1.2" />
            <text x="157" y="168" textAnchor="middle" fontSize="10" fontWeight="700" fill="#4a1a9a" fontFamily="system-ui,sans-serif">🇺🇸 США</text>
            <circle className="globe-dot-3" cx="265" cy="178" r="5" fill="#19b87a" filter="url(#gf)" />
            <circle cx="248" cy="296" r="4.5" fill="#19b87a" opacity="0.7" />
            <rect x="52" y="346" width="158" height="56" rx="17" fill="rgba(255,255,255,0.96)" stroke="rgba(255,202,24,0.45)" strokeWidth="1.3" filter="url(#gf)" />
            <text x="70" y="365" fontSize="9.5" fill="#8a8e9b" fontWeight="600" fontFamily="system-ui,sans-serif">Маршрут платежа</text>
            <text x="70" y="386" fontSize="14" fontWeight="800" fill="#151100" fontFamily="system-ui,sans-serif">USD → CNY</text>
            <circle cx="192" cy="374" r="13" fill="rgba(25,184,122,0.15)" />
            <text x="192" y="379" textAnchor="middle" fontSize="13" fill="#19b87a" fontFamily="system-ui,sans-serif">✓</text>
            <rect x="448" y="88" width="158" height="56" rx="17" fill="rgba(255,255,255,0.96)" stroke="rgba(104,39,232,0.25)" strokeWidth="1.3" filter="url(#gf)" />
            <text x="466" y="107" fontSize="9.5" fill="#8a8e9b" fontWeight="600" fontFamily="system-ui,sans-serif">Успешных платежей</text>
            <text x="466" y="130" fontSize="20" fontWeight="800" fill="#6827e8" fontFamily="system-ui,sans-serif">&gt;99%</text>
          </svg>
        </div>

        <div className="payment-card">
          <div className="payment-head">
            <span>
              Оплата поставщику<br />
              <span style={{ color: "var(--green)" }}>успешно</span>
            </span>
            <span className="check">✓</span>
          </div>
          <div className="label">Сумма</div>
          <div className="amount">12 500 USD</div>
          <div className="label">Получатель</div>
          <div className="company">Global Supply Ltd.</div>
          <div className="label">Способ оплаты</div>
          <div className="currency">
            USD <span>→</span> CNY
          </div>
        </div>

        <div className="device-wrap">
          <div className="laptop">
            <div className="side">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
            <div className="screen">
              <div className="screen-head">
                <span>Платежи</span>
                <span
                  className="mini-dot"
                  style={{ width: "72px", height: "22px", background: "#f0f2f8" }}
                ></span>
              </div>
              <div className="screen-tabs">
                <span className="tab active"></span>
                <span className="tab"></span>
                <span className="tab"></span>
              </div>
              <div className="screen-metric">
                <span className="metric-pill">
                  <strong>32</strong>заявки
                </span>
                <span className="metric-pill">
                  <strong>98%</strong>успешно
                </span>
                <span className="metric-pill">
                  <strong>24ч</strong>срок
                </span>
              </div>
              <div className="row">
                <span className="row-icon"></span>
                <span className="row-text">
                  <span className="row-title">Shenzhen Parts Co.</span>
                  <b className="bar"></b>
                  <b className="bar short"></b>
                </span>
                <span className="sum">4 850 USD</span>
              </div>
              <div className="row">
                <span className="row-icon"></span>
                <span className="row-text">
                  <span className="row-title">Istanbul Trade</span>
                  <b className="bar"></b>
                  <b className="bar short"></b>
                </span>
                <span className="sum">8 120 USD</span>
              </div>
              <div className="row">
                <span className="row-icon"></span>
                <span className="row-text">
                  <span className="row-title">Global Supply</span>
                  <b className="bar"></b>
                  <b className="bar short"></b>
                </span>
                <span className="sum">2 640 USD</span>
              </div>
            </div>
          </div>
          <div className="base"></div>
          <div className="phone">
            <div className="phone-ui">
              <div className="phone-top">
                <span>Платежи</span>
                <span className="phone-dot"></span>
              </div>
              <div className="phone-pay active">
                <span className="phone-pay-icon"></span>
                <span>
                  <strong>Global Supply</strong>
                  <span>12 500 USD</span>
                </span>
              </div>
              <div className="phone-pay">
                <span className="phone-pay-icon"></span>
                <span>
                  <strong>Europe Market</strong>
                  <span>4 850 EUR</span>
                </span>
              </div>
              <div className="phone-mini-chart">
                <i style={{ height: "18px" }}></i>
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
