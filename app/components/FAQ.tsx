"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Это безопасно?",
    answer:
      "Все транзакции проходят через лицензированных платёжных партнёров. Ваши данные защищены шифрованием.",
  },
  {
    question: "Какие комиссии?",
    answer: "Фиксированная комиссия от 1.5%. Никаких скрытых платежей.",
  },
  {
    question: "В каких странах работает сервис?",
    answer:
      "Поддерживаем платежи в 180+ странах включая Китай, ОАЭ, Турцию, Европу.",
  },
  {
    question: "Как быстро проходит платёж?",
    answer:
      "Большинство платежей - от 1 до 3 рабочих дней в зависимости от страны.",
  },
  {
    question: "Нужно ли юрлицо?",
    answer: "Работаем как с юрлицами так и с ИП и самозанятыми.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="faq reveal">
      <div className="panel faq-panel">
        <div className="section-head">
          <h2>Частые вопросы</h2>
          <p>Коротко о безопасности, сроках, комиссиях и географии платежей.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <article
              key={index}
              className={`faq-item${openIndex === index ? " is-open" : ""}`}
            >
              <button
                className="faq-question"
                type="button"
                aria-expanded={openIndex === index}
                onClick={() => toggle(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-toggle" aria-hidden="true"></span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
