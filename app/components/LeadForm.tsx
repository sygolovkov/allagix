"use client";

import { useState } from "react";

export default function LeadForm() {
  const [btnText, setBtnText] = useState("Оставить заявку");
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBtnText(value.trim() ? "Заявка принята" : "Введите контакт");
    setTimeout(() => setBtnText("Оставить заявку"), 2200);
  };

  return (
    <section id="lead" className="cta reveal">
      <div>
        <h2>Готовы оплатить поставщика?</h2>
        <p>
          Оставьте заявку - мы свяжемся с вами и найдем лучшее решение уже
          сегодня.
        </p>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="contact"
          placeholder="Ваш email или Telegram"
          aria-label="Ваш email или Telegram"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="btn" type="submit">
          {btnText}
        </button>
      </form>
    </section>
  );
}
