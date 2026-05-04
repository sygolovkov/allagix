export default function Audiences() {
  return (
    <section className="section reveal">
      <div className="panel audience-panel">
        <div className="section-head">
          <h2>Для кого</h2>
          <p>Помогаем бизнесу проводить платежи без границ.</p>
        </div>
        <div className="audiences">
          <article className="audience">
            <span className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M6 6h15l-1.5 9h-12L6 3H3" />
                <path d="M8 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
              </svg>
            </span>
            <div>
              <h3>Селлеры и e-commerce</h3>
              <p>Поставки, закупки и регулярные оплаты.</p>
            </div>
          </article>
          <article className="audience">
            <span className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="m21 16-9 5-9-5V8l9-5 9 5v8Z" />
                <path d="M3.3 7.5 12 12l8.7-4.5M12 22V12" />
              </svg>
            </span>
            <div>
              <h3>Оптовые компании</h3>
              <p>Международные закупки и логистика.</p>
            </div>
          </article>
          <article className="audience">
            <span className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 7h18v13H3z" />
                <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                <path d="M3 13h18" />
              </svg>
            </span>
            <div>
              <h3>Финансеры и агентства</h3>
              <p>Платежные задачи для клиентов и партнеров.</p>
            </div>
          </article>
          <article className="audience">
            <span className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
                <path d="M3.7 9h16.6M3.7 15h16.6M12 3c2 2.25 3 5.25 3 9s-1 6.75-3 9M12 3c-2 2.25-3 5.25-3 9s1 6.75 3 9" />
              </svg>
            </span>
            <div>
              <h3>Импортеры и дистрибьюторы</h3>
              <p>Оплата поставщиков в разных странах.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
