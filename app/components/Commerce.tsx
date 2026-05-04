export default function Commerce() {
  return (
    <section id="commerce" className="section reveal">
      <div className="panel commerce">
        <div>
          <h2>
            Мы успешно работаем с рынком{" "}
            <span>электронной коммерции</span>
          </h2>
          <p className="section-copy">
            Поддерживаем торговые компании и селлеров любого масштаба - от
            небольших магазинов до крупных брендов. Оказываем сервис на самом
            высоком уровне.
          </p>
          <ul className="checks">
            <li>Понимаем специфику e-commerce и потребности селлеров</li>
            <li>Гибкие решения для компаний любого масштаба</li>
            <li>Персональный подход и поддержка на каждом этапе</li>
          </ul>
        </div>

        <div className="shop-visual" aria-hidden="true">
          <div className="market-card amazon">
            <span>amazon</span>
          </div>
          <div className="market-card ebay">
            <span>
              <b style={{ color: "#E53238" }}>e</b>
              <b style={{ color: "#0064D2" }}>b</b>
              <b style={{ color: "#F5AF02" }}>a</b>
              <b style={{ color: "#86B817" }}>y</b>
            </span>
          </div>
          <div className="market-card etsy">Etsy</div>
          <div className="market-card shopify">shopify</div>

          <div className="store-phone">
            <div className="sphone-notch"></div>
            <div className="sphone-screen">
              <div className="sphone-header">
                <span className="sphone-title">Мои магазины</span>
                <span className="sphone-dot"></span>
              </div>
              <div className="sphone-grid">
                <div className="sphone-item">
                  <div className="sphone-logo-wrap">
                    <svg viewBox="0 0 90 26" width="72" height="21">
                      <text x="0" y="20" fontSize="19" fontWeight="800" fill="#FF9900" fontFamily="Arial,sans-serif" letterSpacing="-0.5">amazon</text>
                    </svg>
                  </div>
                  <span className="sphone-badge active">Активен</span>
                </div>
                <div className="sphone-item">
                  <div className="sphone-logo-wrap">
                    <svg viewBox="0 0 58 26" width="52" height="21">
                      <text x="0" y="20" fontSize="20" fontWeight="900" fontFamily="Arial,sans-serif">
                        <tspan fill="#E53238">e</tspan>
                        <tspan fill="#0064D2">b</tspan>
                        <tspan fill="#F5AF02">a</tspan>
                        <tspan fill="#86B817">y</tspan>
                      </text>
                    </svg>
                  </div>
                  <span className="sphone-badge active">Активен</span>
                </div>
                <div className="sphone-item">
                  <div className="sphone-logo-wrap">
                    <svg viewBox="0 0 48 26" width="40" height="21">
                      <text x="0" y="20" fontSize="19" fontWeight="700" fill="#F1641E" fontFamily="Georgia,serif">Etsy</text>
                    </svg>
                  </div>
                  <span className="sphone-badge pending">Оплата</span>
                </div>
                <div className="sphone-item">
                  <div className="sphone-logo-wrap">
                    <svg viewBox="0 0 72 24" width="62" height="20">
                      <text x="0" y="18" fontSize="15" fontWeight="700" fill="#5A31F4" fontFamily="Arial,sans-serif">shopify</text>
                    </svg>
                  </div>
                  <span className="sphone-badge active">Активен</span>
                </div>
              </div>
              <div className="sphone-payment">
                <div className="sphone-pay-row">
                  <span className="sphone-pay-label">Последний платёж</span>
                  <span className="sphone-pay-check">✓</span>
                </div>
                <div className="sphone-pay-amount">4 850 USD</div>
                <div className="sphone-pay-sub">Поставщик: Etsy Supplier Co.</div>
              </div>
            </div>
          </div>

          <div className="bags">
            <span className="box"></span>
            <span className="box"></span>
            <span className="bag"></span>
          </div>
        </div>

        <div className="feature-grid">
          <article className="feature">
            <span className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 21h18" />
                <path d="M4 21V8l8-5 8 5v13" />
                <path d="M9 21v-7h6v7" />
                <path d="M9 10h.01M15 10h.01" />
              </svg>
            </span>
            <h3>Работаем с селлерами и брендами</h3>
            <p>Платежи поставщикам для маркетплейсов и интернет-магазинов.</p>
          </article>
          <article className="feature">
            <span className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M6 7h12l1 14H5L6 7Z" />
                <path d="M9 7a3 3 0 0 1 6 0" />
              </svg>
            </span>
            <h3>Небольшие торговые компании</h3>
            <p>Специальные условия и поддержка для малого и среднего бизнеса.</p>
          </article>
          <article className="feature">
            <span className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="m13 2-9 13h8l-1 7 9-13h-8l1-7Z" />
              </svg>
            </span>
            <h3>Быстрое подключение</h3>
            <p>Минимум документов и оперативный запуск платежей.</p>
          </article>
          <article className="feature">
            <span className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
                <path d="M18 19a2 2 0 0 0 2-2v-3h-4v5h2ZM6 19a2 2 0 0 1-2-2v-3h4v5H6Z" />
                <path d="M13 19h3" />
              </svg>
            </span>
            <h3>Сервис на высшем уровне</h3>
            <p>На связи 24/7, решаем вопросы и помогаем расти вашему бизнесу.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
