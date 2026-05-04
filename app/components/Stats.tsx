export default function Stats() {
  return (
    <section className="stats reveal" aria-label="Ключевые показатели">
      <div className="stat">
        <span className="icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
            <path d="M3.7 9h16.6M3.7 15h16.6M12 3c2 2.25 3 5.25 3 9s-1 6.75-3 9M12 3c-2 2.25-3 5.25-3 9s1 6.75 3 9" />
          </svg>
        </span>
        <p>
          <strong>500+</strong>
          <span>компаний уже с нами</span>
        </p>
      </div>
      <div className="stat">
        <span className="icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            <path d="m9 12 2 2 4-5" />
          </svg>
        </span>
        <p>
          <strong>150+</strong>
          <span>стран и направлений</span>
        </p>
      </div>
      <div className="stat">
        <span className="icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 6v6l4 2" />
            <path d="M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
            <path d="M8 2h8" />
          </svg>
        </span>
        <p>
          <strong>от 24 часов</strong>
          <span>средний срок проведения платежа</span>
        </p>
      </div>
      <div className="stat">
        <span className="icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
            <path d="m9 12 2 2 4-5" />
          </svg>
        </span>
        <p>
          <strong>&gt;99%</strong>
          <span>успешных платежей</span>
        </p>
      </div>
    </section>
  );
}
