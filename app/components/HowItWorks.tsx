export default function HowItWorks() {
  return (
    <section id="how" className="section reveal">
      <div className="panel how">
        <div className="section-head">
          <h2>Как это работает</h2>
          <p>
            Прозрачный процесс без лишней бюрократии: от заявки до оплаты
            поставщику.
          </p>
        </div>
        <div className="steps">
          <article className="step">
            <span className="num">1</span>
            <div>
              <h3>Вы оставляете заявку</h3>
              <p>Расскажите, куда и кому нужно сделать платеж.</p>
            </div>
          </article>
          <article className="step">
            <span className="num">2</span>
            <div>
              <h3>Передаете данные поставщика</h3>
              <p>Реквизиты, сумма и детали платежа уходят в работу.</p>
            </div>
          </article>
          <article className="step">
            <span className="num">3</span>
            <div>
              <h3>Мы подбираем способ оплаты</h3>
              <p>Вы получаете расчет, сроки и подтверждаете маршрут.</p>
            </div>
          </article>
          <article className="step">
            <span className="num">4</span>
            <div>
              <h3>Поставщик получает деньги</h3>
              <p>Платеж проводится в согласованные сроки.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
