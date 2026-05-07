type Metric = {
  value: string;
  label: string;
  image: string;
  tone: 'green' | 'white';
};

type MediaCard = {
  index: string;
  title: string;
  text: string;
  active?: boolean;
};

const navItems = ['Главная', 'О нас', 'Отделы', 'Вакансии', 'Контакты'];

const metrics: Metric[] = [
  {
    value: '8 МЛН$',
    label: 'прибыльность\nза год',
    image: '/assets/metric-1.png',
    tone: 'green',
  },
  {
    value: '56',
    label: 'человек в\nкоманде',
    image: '/assets/metric-2.png',
    tone: 'white',
  },
  {
    value: '10+',
    label: 'партнеров\nуже с нами!',
    image: '/assets/metric-3.png',
    tone: 'white',
  },
];

const mediaCards: MediaCard[] = [
  {
    index: '01',
    title: 'МЕДИА 1',
    text: 'ТУТ ЧТО ПИШУТ',
    active: true,
  },
  {
    index: '02',
    title: 'МЕДИА 2',
    text: 'A creative template highly suitable for interior design firms and those. creative template highly.',
  },
  {
    index: '03',
    title: 'МЕДИА 3',
    text: 'A creative template highly suitable for interior design firms and those. creative template highly.',
  },
];

function Marquee() {
  const items = Array.from({ length: 5 }, (_, index) => index);

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((item) => (
          <span className="marquee__item" key={item}>
            <span className="marquee__seal">✹</span>
            ПОСМОТРЕТЬ НАШИ ВАКАНСИИ
          </span>
        ))}
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <a className="header__logo" href="#" aria-label="Lead Hunters">
        <img src="/assets/logo.png" alt="Lead Hunters" />
      </a>
      <nav className="nav" aria-label="Основная навигация">
        {navItems.map((item, index) => (
          <a className={index === 0 ? 'nav__link nav__link--active' : 'nav__link'} href="#" key={item}>
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <Header />
        <div className="hero__copy">
          <div className="hero__small-star" aria-hidden="true" />
          <h1>LEAD HUNTERS</h1>
          <p className="hero__subtitle">
            Льем трафик <mark>лучше</mark> всех на рынке
          </p>
          <div className="hero__actions">
            <a className="button" href="#contacts">
              Хочу с вами!
            </a>
            <a className="watch-link" href="#video">
              <span className="watch-link__icon" aria-hidden="true" />
              Watch Video
            </a>
          </div>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <div className="burst burst--green hero__burst" />
          <img src="/assets/spiderman.png" alt="" />
        </div>
        <div className="money" aria-hidden="true">
          $$$
        </div>
        <aside className="social-rail" aria-label="Социальные сети">
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">Dribbble</a>
        </aside>
      </div>
      <Marquee />
    </section>
  );
}

function Stats() {
  return (
    <section className="section stats">
      <div className="container">
        <h2>мы в цифрах:</h2>
        <div className="section-line" />
        <div className="stats__grid">
          {metrics.map((metric) => (
            <article className="metric" key={metric.value}>
              <img className="metric__image" src={metric.image} alt="" />
              <div className={`burst metric__burst burst--${metric.tone}`} />
              <div className="metric__content">
                <strong className={metric.value.length > 3 ? 'metric__value metric__value--small' : 'metric__value'}>
                  {metric.value}
                </strong>
                <span>{metric.label}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="section video-section" id="video">
      <div className="container">
        <h2>Зачем слова - лучше взгляни:</h2>
        <div className="section-line section-line--dark" />
        <div className="video-section__stars" aria-hidden="true">
          <div className="burst burst--blue burst--small" />
          <div className="burst burst--blue burst--large" />
        </div>
        <button className="video-card" type="button" aria-label="Смотреть видео">
          <img src="/assets/video-still.png" alt="" />
          <span className="video-card__top" aria-hidden="true" />
          <span className="video-card__play" aria-hidden="true" />
          <span className="video-card__bottom" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <div className="burst burst--green cta__star" aria-hidden="true" />
        <h2>
          Тоже хочешь работать <br /> и жить <span>в удовольствие,</span>
        </h2>
        <p>как все в нашей команде? Тогда ждем тебя!</p>
      </div>
      <Marquee />
    </section>
  );
}

function Media() {
  return (
    <section className="section media">
      <div className="container">
        <h2>Что пишут о нас:</h2>
        <div className="section-line" />
        <div className="media__layout">
          <p className="media__lead">А в этом году о нас напишут еще больше!</p>
          <div className="media__cards">
            {mediaCards.map((card) => (
              <article className={card.active ? 'media-card media-card--active' : 'media-card'} key={card.index}>
                <strong>{card.index}</strong>
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="media__news" aria-hidden="true">
          <div className="burst burst--green" />
          <span>NEWS</span>
        </div>
        <div className="media__arrows" aria-hidden="true">
          <span>←</span>
          <span>→</span>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <main className="page">
      <Hero />
      <Stats />
      <VideoSection />
      <Cta />
      <Media />
      <footer className="footer" id="contacts" />
    </main>
  );
}

export default App;
