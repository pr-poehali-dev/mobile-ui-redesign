export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">КОМФОРТ<span style={{ color: "var(--primary)" }}>+</span></div>
        <nav>
          <a href="#">Услуги</a>
          <a href="#">О нас</a>
          <a href="#">Преимущества</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Получить консультацию</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ВАШИ ЗАДАЧИ —
              <br />
              НАШ <span>КОМФОРТ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Компания «Комфорт +» — широкий спектр услуг для вашего дома и бизнеса. Качественно, надёжно и с заботой о каждом клиенте.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a href="tel:+79021258767">
                <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                  Позвонить нам
                </button>
              </a>
              <button className="btn-cta" style={{ background: "white" }}>
                Узнать подробнее
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              РАБОТАЕМ
              <br />
              ДЛЯ ВАС
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #КАЧЕСТВО
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              НАДЁЖНО
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ПРОФЕССИОНАЛЬНЫЕ УСЛУГИ * НАДЁЖНЫЙ ПАРТНЁР * КОМФОРТ ДЛЯ КАЖДОГО * ЗВОНИТЕ НАМ * РАБОТАЕМ ПО ВСЕМУ ГОРОДУ *
            ПРОФЕССИОНАЛЬНЫЕ УСЛУГИ * НАДЁЖНЫЙ ПАРТНЁР * КОМФОРТ ДЛЯ КАЖДОГО * ЗВОНИТЕ НАМ * РАБОТАЕМ ПО ВСЕМУ ГОРОДУ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">НАШИ УСЛУГИ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Все услуги
            </a>
          </div>

          <div className="menu-grid">
            {/* Услуга 1 */}
            <div className="menu-card">
              <span className="menu-tag">Популярное</span>
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Услуга 1"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Уборка и клининг</h3>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Профессиональная уборка помещений: квартиры, офисы, после ремонта. Быстро и качественно.
                </p>
              </div>
            </div>

            {/* Услуга 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Востребовано
              </span>
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Услуга 2"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Ремонт и отделка</h3>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Все виды ремонтных работ: от косметического до капитального. Сдаём в срок.</p>
              </div>
            </div>

            {/* Услуга 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Выгодно
              </span>
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Услуга 3"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Бытовые услуги</h3>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Помощь по дому, мелкий ремонт, сборка мебели и многое другое. Звоните — поможем!
                </p>
              </div>
            </div>

            {/* Услуга 4 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--primary)", color: "white" }}>
                Хендмейд
              </span>
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Поделки из дерева"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Вырезание поделок из досок</h3>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Изготовление деревянных поделок и изделий на заказ: декор, таблички, фигурки и сувениры ручной работы.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">МЫ ЗДЕСЬ ДЛЯ ВАС.</h2>
            <p className="vibe-text">
              «Комфорт +» — это команда профессионалов, которая ценит ваше время и доверие. Мы работаем честно, оперативно и с душой.
              Обращайтесь за консультацией или оформлением заказа — всегда рады помочь!
            </p>
            <a href="tel:+79021258767">
              <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
                Позвонить: +7 (902) 125-87-67
              </button>
            </a>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            ПОЧЕМУ ВЫБИРАЮТ НАС
          </h2>
          <div className="social-grid">
            <div className="social-item" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "var(--cream)", fontSize: "18px", fontWeight: 800, textAlign: "center", padding: "20px" }}>
              ОПЫТ И ПРОФЕССИОНАЛИЗМ
            </div>
            <div className="social-item" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "var(--primary)", color: "white", fontSize: "18px", fontWeight: 800, textAlign: "center", padding: "20px" }}>
              ДОСТУПНЫЕ ЦЕНЫ
            </div>
            <div className="social-item" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "var(--accent)", fontSize: "18px", fontWeight: 800, textAlign: "center", padding: "20px" }}>
              БЫСТРОЕ ВЫПОЛНЕНИЕ
            </div>
            <div className="social-item" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "var(--secondary)", color: "white", fontSize: "18px", fontWeight: 800, textAlign: "center", padding: "20px" }}>
              ГАРАНТИЯ КАЧЕСТВА
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">КОМФОРТ+</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Профессиональные услуги для вашего дома и бизнеса. Обращайтесь — всегда рады помочь!
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Услуги
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Политика
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Условия
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li>
              <a href="tel:+79021258767" style={{ color: "inherit", textDecoration: "none" }}>
                +7 (902) 125-87-67
              </a>
            </li>
            <li>
              <a href="https://comfo1.nethouse.ru" target="_blank" style={{ color: "inherit", textDecoration: "none" }}>
                comfo1.nethouse.ru
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>2026 КОМФОРТ+</span>
          <span>ВАШИ ЗАДАЧИ — НАШ КОМФОРТ</span>
          <span>ВАШ НАДЁЖНЫЙ ПАРТНЁР</span>
        </div>
      </footer>
    </>
  );
}