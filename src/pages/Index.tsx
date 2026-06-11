export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">ДЕЛОВОЙ КАЙФ</div>
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
              НАШ <span>КАЙФ</span>
            </h1>

            <div className="mb-8 p-5 rounded-xl bg-white/80 border border-gray-200 text-left text-[#444] text-sm leading-relaxed">
              <p className="font-semibold text-base mb-2 text-[#222]">Контактная информация компании «Деловой Кайф»</p>
              <p>Компания «Деловой Кайф», предоставляющая разные услуги, доступна для связи следующим образом:</p>
              <p className="mt-2">📞 Телефон: <a href="tel:+79021258767" className="font-medium text-[var(--primary)]">+7 (902) 125-87-67</a></p>
              <p>🌐 Сайт: <a href="https://comfo1.nethouse.ru" target="_blank" rel="noopener noreferrer" className="font-medium text-[var(--primary)]">comfo1.nethouse.ru</a></p>
              <p className="mt-2">Обращайтесь для получения консультаций и оформления заказов.</p>
            </div>

            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Компания «Деловой Кайф» — широкий спектр услуг для вашего дома и бизнеса. Качественно, надёжно и с заботой о каждом клиенте.
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
            &nbsp; * ПРОФЕССИОНАЛЬНЫЕ УСЛУГИ * НАДЁЖНЫЙ ПАРТНЁР * ДЕЛОВОЙ КАЙФ * ЗВОНИТЕ НАМ * РАБОТАЕМ ПО ВСЕМУ ГОРОДУ *
            ПРОФЕССИОНАЛЬНЫЕ УСЛУГИ * НАДЁЖНЫЙ ПАРТНЁР * ДЕЛОВОЙ КАЙФ * ЗВОНИТЕ НАМ * РАБОТАЕМ ПО ВСЕМУ ГОРОДУ
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
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Вкусно
              </span>
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Бургеры"
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
                  <h3>Бургеры</h3>
                  <span className="price">350 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Готовим сочные бургеры на заказ. Свежие ингредиенты, домашний вкус — попробуйте!
                </p>
              </div>
            </div>

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
                  <span className="price">от ... ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Изготовление деревянных поделок и изделий на заказ: декор, таблички, фигурки и сувениры ручной работы. Стоимость зависит от сложности и размера поделки.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">МЫ ЗДЕСЬ ДЛЯ ВАС.</h2>
            <p className="vibe-text">
              «Деловой Кайф» — это команда профессионалов, которая ценит ваше время и доверие. Мы работаем честно, оперативно и с душой.
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

        <section style={{ padding: "60px 20px", background: "#f0f7ff", borderTop: "4px solid #0077ff" }}>
          <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
            <div style={{ display: "inline-block", background: "#0077ff", color: "white", fontWeight: 800, fontSize: "0.85rem", padding: "6px 18px", borderRadius: 50, marginBottom: 16, letterSpacing: 1 }}>
              🎁 ПРОМОКОД
            </div>
            <h2 style={{ fontSize: "2rem", fontWeight: 900, color: "#111", marginBottom: 12 }}>Скидка по промокоду</h2>
            <p style={{ color: "#444", fontSize: "1.1rem", marginBottom: 24 }}>
              Вступите в наше сообщество ВКонтакте и при заказе укажите промокод — получите специальную скидку!
            </p>
            <div style={{ display: "inline-block", background: "white", border: "3px dashed #0077ff", borderRadius: 16, padding: "20px 48px", marginBottom: 28 }}>
              <div style={{ fontSize: "0.85rem", color: "#888", marginBottom: 6, fontWeight: 600, letterSpacing: 1 }}>ВАШ ПРОМОКОД</div>
              <div style={{ fontSize: "2.2rem", fontWeight: 900, color: "#0077ff", letterSpacing: 3 }}>ЛЕТО2026</div>
            </div>
            <br />
            <a href="https://vk.ru/club238740831" target="_blank" rel="noopener noreferrer">
              <button style={{ background: "#0077ff", color: "white", fontWeight: 800, fontSize: "1.1rem", padding: "16px 40px", borderRadius: 50, border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(0,119,255,0.3)", letterSpacing: 0.5 }}>
                Перейти в сообщество ВКонтакте
              </button>
            </a>
            <p style={{ color: "#888", marginTop: 16, fontSize: "0.9rem" }}>Сделайте заказ в сообществе и укажите промокод ЛЕТО2026</p>
          </div>
        </section>

        <section style={{ padding: "60px 20px", background: "var(--primary)" }}>
          <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
            <div style={{ display: "inline-block", background: "rgba(255,255,255,0.2)", color: "white", fontWeight: 800, fontSize: "0.85rem", padding: "6px 18px", borderRadius: 50, marginBottom: 16, letterSpacing: 1 }}>
              ВАКАНСИЯ
            </div>
            <h2 style={{ fontSize: "2rem", fontWeight: 900, color: "white", marginBottom: 12 }}>Требуется Помощник</h2>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.1rem", marginBottom: 32 }}>
              Срочно ищем помощника! Если вы готовы приступить к работе — звоните прямо сейчас.
            </p>
            <a href="tel:+79021258767">
              <button style={{ background: "white", color: "var(--primary)", fontWeight: 800, fontSize: "1.2rem", padding: "18px 40px", borderRadius: 50, border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(0,0,0,0.2)", letterSpacing: 0.5 }}>
                📞 +7 (902) 125-87-67
              </button>
            </a>
            <p style={{ color: "rgba(255,255,255,0.7)", marginTop: 20, fontSize: "0.9rem" }}>Звоните — ответим немедленно</p>
          </div>
        </section>

        <section id="contacts" style={{ padding: "80px 20px", background: "var(--cream)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: 8 }}>Контакты</h2>
            <p style={{ color: "#666", marginBottom: 40 }}>Свяжитесь с нами любым удобным способом</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
              <div style={{ background: "white", borderRadius: 16, padding: 32, boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>📞</div>
                <h3 style={{ fontWeight: 700, marginBottom: 8 }}>Телефон</h3>
                <a href="tel:+79021258767" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "none", fontSize: "1.1rem" }}>
                  +7 (902) 125-87-67
                </a>
              </div>
              <div style={{ background: "white", borderRadius: 16, padding: 32, boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>🌐</div>
                <h3 style={{ fontWeight: 700, marginBottom: 8 }}>Сайт</h3>
                <a href="https://comfo1.nethouse.ru" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "none" }}>
                  comfo1.nethouse.ru
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ background: "var(--dark)", color: "white", padding: "40px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 12 }}>ДЕЛОВОЙ КАЙФ</div>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 16 }}>Качественные услуги для вашего дома и бизнеса</p>
          <a href="tel:+79021258767" style={{ color: "var(--primary)", fontWeight: 700, textDecoration: "none" }}>
            +7 (902) 125-87-67
          </a>
          <p style={{ color: "rgba(255,255,255,0.4)", marginTop: 24, fontSize: "0.85rem" }}>
            © 2024 Деловой Кайф. Все права защищены.
          </p>
        </div>
      </footer>
    </>
  );
}