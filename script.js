const STRINGS = {
  ru: {
    navBrand: 'Алексей Куделин',
    heroName: 'Алексей Куделин',
    heroTitle: 'Senior Software Engineer',
    heroLocation: 'Россия',
    heroAvailability: 'Открыт к предложениям · готов к релокации',
    heroLinks: {
      email: 'Написать',
      telegram: 'Telegram',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      getcloser: 'Станем Ближе',
    },
    aboutLabel: 'Обо мне',
    aboutText: `<p>10 лет в backend-разработке высоконагруженных распределённых систем, последние три года — в финтехе (compliance, KYC, AML). Проектирую сервисную архитектуру, обеспечиваю надёжность продакшна и выстраиваю инженерные процессы: от стандартизации стека до онбординга и менторинга инженеров. Ищу Senior/Principal IC или Lead/EM роль в международной команде — удалённо или с релокацией. Параллельно исполнял роль CTO в Wellbeing & Relationship Tech стартапе — <a href="https://getcloser.ru" target="_blank" rel="noopener">Станем Ближе</a>.</p>`,
    expLabel: 'Опыт работы',
    initiativesLabel: 'Ключевые инициативы',
    achievementsLabel: 'Достижения',
    experience: [
      {
        company: 'NDA',
        context: 'Продуктовая финтех-компания с высоконагруженным продуктом. Compliance-стрим: KYC, мониторинг транзакций, ответственная игра, B2B-сверка, кешбэк, рассылка пользовательских compliance-уведомлений.',
        position: 'Программист-эксперт',
        location: 'Санкт-Петербург · Финтех, Compliance',
        period: 'Окт 2022 — н.в.',
        desc: `
          <ul>
            <li>Владею 7+ сервисами и внутренними инструментами (боты, библиотеки) в compliance-стриме; обеспечиваю SLA 99.99%</li>
            <li>Пишу production-код с применением AI-инструментов (Claude Code), провожу код-ревью</li>
            <li>Отвечаю за реагирование на инциденты и высокую доступность сервисов</li>
            <li>Провёл ~20 технических интервью</li>
            <li>Онбордил новых инженеров в команду: погружение в кодовую базу, процессы и инструменты</li>
            <li>Веду технические синки и архитектурные встречи в кросс-функциональной команде из 12 человек. Также поддерживаю кросс-командную коммуникацию на стыках доменов, провожу консультации по интеграциям с сервисами команды</li>
          </ul>
        `,
        initiatives: `
          <ul>
            <li>Инициировал внедрение Claude Code в инженерный процесс команды</li>
            <li>Инициировал применение стека Litestar + SQLAlchemy в production-сервисах команды</li>
            <li>Внедрил Helm и Vault во все сервисы команды — стандартизировал деплой и упростил управление конфигурацией и секретами</li>
            <li>Модернизировал процесс кросс-ревью: явное назначение ревьюеров заменило «ревью по запросу» — код перестал ждать проверяющего, фичи быстрее уходили на прод</li>
            <li>Ввёл культуру грумминга и еженедельные технические синки как формат обмена знаниями между разработчиками, QA и аналитиками</li>
            <li>Создал внутреннюю базу знаний: how-to статьи, технические спеки, постмортемы и лайфхаки для повседневной разработки</li>
          </ul>
        `,
        achievements: `
          <ul>
            <li>Реализовал с нуля мультиканальный сервис уведомлений: email (~10 000 писем/сутки) и корпоративный мессенджер (для систем мониторинга и информационных уведомлений в бизнес-процессах). Event-driven архитектура на Kafka; система подписок на доменные события с условиями по атрибутам (AND/OR, операторы сравнения) и UI-редактор шаблонов писем сократили TTM новых сценариев рассылок с 3–4 дней до 1 рабочего дня — высвободив ресурсы QA и разработчиков</li>
            <li>Серия оптимизаций производительности сервисов: анализ логов, бизнес-процессов и EXPLAIN ANALYZE позволяли точечно устранять бутылочные горлышки — с ощутимой экономией человеко-часов для внутренних подразделений</li>
            <li>Стандартизировал процессы разработки: единый стек инструментов (Poetry, Ruff и др.), Чистая архитектура, несколько внутренних open-source библиотек с общими паттернами (обёртки над confluent-kafka и др.) — к разработке и ревью подключились коллеги из двух смежных Python-команд</li>
          </ul>
        `,
      },
      {
        company: 'Станем Ближе',
        url: 'https://getcloser.ru',
        context: '«Станем Ближе» — Telegram Mini App: приложение для развития долгосрочных отношений и эмоциональной близости. Параллельно с основной работой.',
        position: 'CTO',
        location: 'Удалённо · Стартап',
        period: 'Мар 2025 — Апр 2026',
        desc: `
          <ul>
            <li>Отвечал за всю техническую сторону продукта: архитектура, инфраструктура, SLA сервисов</li>
            <li>Разрабатывал и поддерживал Telegram Mini App и сопутствующие сервисы</li>
            <li>Управлял продуктовой командой (разработчик, дизайнер, аналитик)</li>
          </ul>
        `,
        achievements: '', // TBD
      },
      {
        company: 'ЦИФРА.Стартап',
        url: 'https://vk.com/cifra.startup',
        position: 'Технический ментор',
        location: 'IT-акселератор',
        period: 'Окт 2025 — Дек 2025',
        desc: 'Менторил участников регионального IT-акселератора: разбирал технические проблемы проектов, отвечал на вопросы о разработке ПО и карьере в IT.',
      },
      {
        company: 'iTechArt Group',
        url: 'https://itechartgroup.by/',
        context: 'Одна из ведущих IT-компаний Беларуси с 20+ годами опыта разработки ПО. Создаёт продукты для стартапов и компаний из списка Fortune 500 в США и Европе.',
        position: 'Senior Software Engineer',
        location: 'Минск · ИТ-аутстаффинг',
        period: 'Ноя 2020 — Окт 2022',
        desc: 'Работал аутстафф-инженером в двух международных продуктовых командах — от разработки фич до роли архитектора. Менторил новых сотрудников, помогал адаптироваться и готовиться к интервью с заказчиками.',
        achievements: '', // TBD
        sub: [
          {
            title: 'Cayaba Care (ныне Nadia Care)',
            url: 'https://www.nadiacare.com/',
            context: 'Платформа поддержки беременных и молодых мам: коучинг, местные ресурсы, мультидисциплинарная команда заботы.',
            role: 'Part-time Tech Lead / Архитектор',
            desc: 'Проектировал архитектуру и частично руководил командой разработки. Платформа подтверждает снижение преждевременных родов на 38% и послеродовой депрессии на 57%.',
            achievements: `
              <ul>
                <li>Реализовал MVP на Django + React: HIPAA-compliant интеграция с Athena Health для хранения PHI-данных пациентов и с Acuity для управления расписаниями визитов (домашние визиты, очный и онлайн-приём); начальная интеграция с Metabase для data science команды</li>
                <li>Курировал двух middle-разработчиков: делегировал задачи, принимал архитектурные решения</li>
              </ul>
            `,
          },
          {
            title: 'Inspectorio',
            url: 'https://inspectorio.com',
            context: 'AI-платформа управления цепочками поставок: контроль качества, соответствие требованиям, прослеживаемость. 15 000+ клиентов по всему миру.',
            role: 'Senior Software Engineer',
            desc: 'Разрабатывал backend-сервисы для AI-платформы управления цепочками поставок, используемой 15 000+ компаниями по всему миру.',
            achievements: `
              <ul>
                <li>Переписал core auth-сервис в микросервисной архитектуре (RBAC, проверка доступа, управление токенами) на Django + DRF с применением TDD; написал интеграционные автотесты системы в BDD-стиле</li>
              </ul>
            `,
          },
        ],
      },
      {
        company: 'Тензор',
        url: 'https://tensor.ru',
        context: 'Крупнейший российский IT-разработчик: 7 000 сотрудников, 4,5 млн клиентов, лидер рынка электронного документооборота. Продукт — СБИС/Saby.',
        position: 'Инженер-программист',
        location: 'Разработка ПО (СБИС)',
        period: 'Ноя 2016 — Ноя 2020',
        desc: `
          <ul>
            <li>Backend-разработка на Python, PostgreSQL, Redis, RabbitMQ с использованием СБИС SDK — крупнейшей российской системы ЭДО</li>
            <li>Спроектировал и реализовал масштабируемый сервис межоператорного ЭДО (роуминг, спецификация РОСЭУ) для доставки большого объёма документов между операторами</li>
            <li>Разработал сервис администрирования роуминга: мониторинг состояния документов, быстрый поиск, аналитика в разных разрезах</li>
          </ul>
        `,
        achievements: `
          <ul>
            <li>Сервис межоператорного ЭДО-роуминга: очереди задач на PostgreSQL и глубокая оптимизация запросов через профилирование дали ~5× рост throughput</li>
            <li>Сервис администрирования роуминга на CQRS + Event Sourcing: статусные переходы документов хранятся как события, read-модели — денормализованные проекции из event store. Сервис устойчив к росту данных (400+ млн пакетов на момент реализации) и не нагружает мастер-БД</li>
          </ul>
        `,
      },
    ],
    skillsLabel: 'Навыки',
    skillGroups: [
      { label: 'Основной стек', tags: ['Python', 'SQL', 'Django', 'FastAPI', 'Litestar', 'SQLAlchemy', 'Docker', 'Kubernetes', 'Helm', 'Vault', 'Kafka', 'Redis', 'PostgreSQL', 'Grafana', 'Linux'] },
      { label: 'Дополнительно', tags: ['TypeScript', 'React', 'Vue', 'RabbitMQ', 'AWS'] },
      { label: 'Инструменты', tags: ['Git', 'GitHub Actions', 'GitLab CI/CD', 'Sentry', 'OpenSearch', 'Claude Code', 'Telegram Mini Apps'] },
      { label: 'Практики', tags: ['Высоконагруженные системы', 'Сервисная архитектура', 'Менторство', 'Архитектурное ревью'] },
      { label: 'Процессы', tags: ['Технические интервью', 'Фасилитация'] },
    ],
    eduLabel: 'Образование',
    education: [
      {
        school: 'Ярославский государственный университет им. П.Г. Демидова',
        degree: 'Магистр',
        field: 'Прикладная математика и информатика',
        year: '2021',
      },
      {
        school: 'Ярославский государственный университет им. П.Г. Демидова',
        degree: 'Бакалавр',
        field: 'Прикладная математика и информатика',
        year: '2018',
      },
    ],
    langsLabel: 'Языки',
    languages: [
      { name: 'Русский', level: 'Родной' },
      { name: 'Английский', level: 'B2 — технические тексты, переписка, созвоны, код-ревью' },
    ],
    footerText: 'Алексей Куделин · Senior Software Engineer',
  },

  en: {
    navBrand: 'Aleksei Kudelin',
    heroName: 'Aleksei Kudelin',
    heroTitle: 'Senior Software Engineer',
    heroLocation: 'Russia',
    heroAvailability: 'Open to worldwide opportunities · relocation ready',
    heroLinks: {
      email: 'Email',
      telegram: 'Telegram',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      getcloser: 'getcloser.ru',
    },
    aboutLabel: 'About',
    aboutText: `<p>10 years of backend engineering on high-load distributed systems, with the last three years in fintech — compliance, KYC, AML. I design service architectures, own production reliability, and shape engineering culture: from stack standardisation to onboarding and mentoring engineers. Looking for a Senior/Principal IC or Lead/EM role at an international company — remote or relocation-ready. On the side, served as CTO at a Wellbeing & Relationship Tech startup — <a href="https://getcloser.ru" target="_blank" rel="noopener">getcloser.ru</a>.</p>`,
    expLabel: 'Experience',
    initiativesLabel: 'Key initiatives',
    achievementsLabel: 'Achievements',
    experience: [
      {
        company: 'NDA',
        context: 'Product fintech company with a high-load product. Compliance stream: KYC, transaction monitoring, responsible gambling, B2B reconciliation, cashback, and compliance notification delivery service.',
        position: 'Expert Software Engineer',
        location: 'Saint Petersburg · Fintech, Compliance',
        period: 'Oct 2022 — Present',
        desc: `
          <ul>
            <li>Own 7+ services and internal tools (bots, libraries) in the compliance stream; maintain 99.99% SLA</li>
            <li>Write production code with AI tooling (Claude Code), conduct code reviews</li>
            <li>Responsible for incident response and high availability of production services</li>
            <li>Conducted ~20 engineering interviews</li>
            <li>Onboarded new engineers to the team: codebase walkthroughs, processes, and tooling</li>
            <li>Run technical syncs and architectural meetings in a 12-person cross-functional team. Support cross-team communication at domain boundaries, consult on integrations with team services</li>
          </ul>
        `,
        initiatives: `
          <ul>
            <li>Championed the adoption of Claude Code in the team's engineering workflow</li>
            <li>Championed the Litestar + SQLAlchemy stack in team's production services</li>
            <li>Introduced Helm and Vault across all team services — standardized deployment pipelines and simplified configuration and secrets management</li>
            <li>Modernised the cross-review process: explicit reviewer assignments replaced ad-hoc requests — code stopped waiting for a reviewer, shipping features to production faster</li>
            <li>Established a grooming culture and weekly technical syncs as a knowledge-sharing format across engineers, QA, and analysts</li>
            <li>Built an internal knowledge base: how-to guides, technical specs, postmortems, and everyday productivity articles</li>
          </ul>
        `,
        achievements: `
          <ul>
            <li>Built a multi-channel notification service from scratch: email (~10,000/day) and corporate messenger (for monitoring systems and business-process alerts). Event-driven via Kafka; a subscription engine with attribute-based filtering (AND/OR, comparison operators) and a UI template editor cut TTM for new notification scenarios from 3–4 days to 1 working day — freeing up QA and engineering capacity</li>
            <li>Multiple rounds of service performance optimization: log analysis, business-process review, and EXPLAIN ANALYZE to pinpoint bottlenecks — delivering measurable man-hour savings for internal teams</li>
            <li>Standardized development practices: unified toolchain (Poetry, Ruff, etc.), Clean Architecture, and several internal open-source libraries capturing common patterns (wrappers over confluent-kafka and others) — co-developed and reviewed with engineers from two adjacent Python teams</li>
          </ul>
        `,
      },
      {
        company: 'getcloser.ru',
        url: 'https://getcloser.ru',
        context: 'getcloser.ru — Telegram Mini App: an app for building long-term relationships and emotional closeness. Alongside main employment.',
        position: 'CTO',
        location: 'Remote · Startup',
        period: 'Mar 2025 — Apr 2026',
        desc: `
          <ul>
            <li>Owned the full technical side of the product: architecture, infrastructure, and service SLA</li>
            <li>Built and maintained the Telegram Mini App and supporting services</li>
            <li>Managed the product team (developer, designer, analyst)</li>
          </ul>
        `,
        achievements: '', // TBD
      },
      {
        company: 'CIFRA.Startup Accelerator',
        url: 'https://vk.com/cifra.startup',
        position: 'Tech Mentor',
        location: 'IT Accelerator',
        period: 'Oct 2025 — Dec 2025',
        desc: 'Mentored participants of a regional IT accelerator: reviewed project-level technical challenges and answered questions about software development and IT careers.',
      },
      {
        company: 'iTechArt Group',
        url: 'https://itechartgroup.by/',
        context: 'One of Belarus\'s leading IT companies with 20+ years in software development, building products for startups and Fortune 500 companies across the US and Europe.',
        position: 'Senior Software Engineer',
        location: 'Minsk · IT Outstaffing',
        period: 'Nov 2020 — Oct 2022',
        desc: 'Worked as an outstaff engineer across two international product teams — from feature development to an architecture role. Mentored new joiners and helped them prepare for client interviews.',
        achievements: '', // TBD
        sub: [
          {
            title: 'Cayaba Care (now Nadia Care)',
            url: 'https://www.nadiacare.com/',
            context: 'Pregnancy and postpartum support platform combining expert coaching, local resources, and a multidisciplinary care team.',
            role: 'Part-time Tech Lead / Architect',
            desc: 'Led architecture design and partially managed the engineering team. The platform demonstrates 38% lower preterm birth rates and 57% reduction in postpartum depression.',
            achievements: `
              <ul>
                <li>Delivered MVP on Django + React: HIPAA-compliant integration with Athena Health for PHI patient data storage and Acuity for visit scheduling (home visits, in-person and online appointments); initial Metabase integration for the data science team</li>
                <li>Mentored two middle engineers: delegated tasks and drove architectural decisions</li>
              </ul>
            `,
          },
          {
            title: 'Inspectorio',
            url: 'https://inspectorio.com',
            context: 'AI-powered supply chain management platform covering quality, compliance, and traceability. Trusted by 15,000+ companies globally.',
            role: 'Senior Software Engineer',
            desc: 'Built backend services for an AI-powered supply chain management platform used by 15,000+ companies globally.',
            achievements: `
              <ul>
                <li>Rewrote the core auth service in a microservices environment (RBAC, access verification, token management) using Django + DRF with TDD; authored BDD integration tests for the system</li>
              </ul>
            `,
          },
        ],
      },
      {
        company: 'Tensor',
        url: 'https://tensor.ru',
        context: 'Major Russian IT company: 7,000 employees, 4.5M clients, market leader in electronic document management. Product: SBIS/Saby.',
        position: 'Software Engineer',
        location: 'Software Development (SBIS)',
        period: 'Nov 2016 — Nov 2020',
        desc: `
          <ul>
            <li>Backend development in Python, PostgreSQL, Redis, RabbitMQ within the SBIS ecosystem — Russia's leading EDI platform</li>
            <li>Designed and built a scalable inter-operator EDI roaming service (ROSEU spec) handling high document volumes across operators</li>
            <li>Developed a roaming administration service: document status monitoring, fast search, multi-dimensional analytics</li>
          </ul>
        `,
        achievements: `
          <ul>
            <li>Inter-operator EDI roaming service: PostgreSQL-based task queues and deep query optimization via profiling tools yielded ~5× throughput improvement</li>
            <li>Roaming administration service built on CQRS + Event Sourcing: document status transitions stored as events, read models as denormalized projections from the event store. Handles 400M+ document packages without master DB load</li>
          </ul>
        `,
      },
    ],
    skillsLabel: 'Skills',
    skillGroups: [
      { label: 'Primary stack', tags: ['Python', 'SQL', 'Django', 'FastAPI', 'Litestar', 'SQLAlchemy', 'Docker', 'Kubernetes', 'Helm', 'Vault', 'Kafka', 'Redis', 'PostgreSQL', 'Grafana', 'Linux'] },
      { label: 'Additional', tags: ['TypeScript', 'React', 'Vue', 'RabbitMQ', 'AWS'] },
      { label: 'Tools', tags: ['Git', 'GitHub Actions', 'GitLab CI/CD', 'Sentry', 'OpenSearch', 'Claude Code', 'Telegram Mini Apps'] },
      { label: 'Practices', tags: ['High-load Systems', 'Service Architecture', 'Mentoring', 'Architecture Review'] },
      { label: 'Processes', tags: ['Technical interviews', 'Facilitation'] },
    ],
    eduLabel: 'Education',
    education: [
      {
        school: 'Yaroslavl State University (P.G. Demidov)',
        degree: "Master's Degree",
        field: 'Applied Mathematics and Computer Science',
        year: '2021',
      },
      {
        school: 'Yaroslavl State University (P.G. Demidov)',
        degree: "Bachelor's Degree",
        field: 'Applied Mathematics and Computer Science',
        year: '2018',
      },
    ],
    langsLabel: 'Languages',
    languages: [
      { name: 'Russian', level: 'Native' },
      { name: 'English', level: 'B2 — technical reading, written communication, calls, code review' },
    ],
    footerText: 'Aleksei Kudelin · Senior Software Engineer',
  },
};

// ── State ──
let currentLang = localStorage.getItem('cv-lang') || 'ru';
let currentTheme = localStorage.getItem('cv-theme') || 'light';

// ── Render ──
function render() {
  const s = STRINGS[currentLang];

  // Theme
  document.documentElement.setAttribute('data-theme', currentTheme);
  document.getElementById('theme-btn').textContent = currentTheme === 'dark' ? '☀' : '☾';

  // Lang buttons
  document.getElementById('lang-ru').classList.toggle('active', currentLang === 'ru');
  document.getElementById('lang-en').classList.toggle('active', currentLang === 'en');

  // Nav
  document.getElementById('nav-brand').textContent = s.navBrand;

  // Hero
  document.getElementById('hero-name').textContent = s.heroName;
  document.getElementById('hero-title').textContent = s.heroTitle;
  document.getElementById('hero-location').textContent = s.heroLocation;
  document.getElementById('hero-availability').textContent = s.heroAvailability;
  document.getElementById('link-email').textContent = s.heroLinks.email;
  document.getElementById('link-telegram').textContent = s.heroLinks.telegram;
  document.getElementById('link-github').textContent = s.heroLinks.github;
  document.getElementById('link-linkedin').textContent = s.heroLinks.linkedin;
  document.getElementById('link-getcloser').textContent = s.heroLinks.getcloser;

  // About
  document.getElementById('about-label').textContent = s.aboutLabel;
  document.getElementById('about-text').innerHTML = s.aboutText;

  // Experience
  document.getElementById('exp-label').textContent = s.expLabel;
  const expList = document.getElementById('exp-list');
  expList.innerHTML = s.experience.map(exp => `
    <div class="exp-item">
      <div class="exp-header">
        <div>
          <div class="exp-company">${exp.url ? `<a href="${exp.url}" target="_blank" rel="noopener">${exp.company}</a>` : exp.company}</div>
          <div class="exp-position">${exp.position}</div>
          <div class="exp-location">${exp.location}</div>
        </div>
        <span class="exp-period">${exp.period}</span>
      </div>
      ${exp.context ? `<div class="exp-context">${exp.context}</div>` : ''}
      ${exp.desc ? `<div class="exp-desc">${exp.desc}</div>` : ''}
      ${exp.initiatives ? `<div class="exp-initiatives"><div class="exp-initiatives-label">${s.initiativesLabel}</div>${exp.initiatives}</div>` : ''}
      ${exp.achievements ? `<div class="exp-achievements"><div class="exp-achievements-label">${s.achievementsLabel}</div>${exp.achievements}</div>` : ''}
      ${exp.sub ? exp.sub.map(sub => `
        <div class="exp-sub">
          <div class="exp-sub-title">${sub.url ? `<a href="${sub.url}" target="_blank" rel="noopener">${sub.title}</a>` : sub.title}</div>
          ${sub.context ? `<div class="exp-sub-context">${sub.context}</div>` : ''}
          <div class="exp-sub-role">${sub.role}</div>
          <div class="exp-sub-desc">${sub.desc}</div>
          ${sub.achievements ? `<div class="exp-achievements"><div class="exp-achievements-label">${s.achievementsLabel}</div>${sub.achievements}</div>` : ''}
        </div>
      `).join('') : ''}
    </div>
  `).join('');

  // Skills
  document.getElementById('skills-label').textContent = s.skillsLabel;
  document.getElementById('skills-grid').innerHTML = s.skillGroups.map(g => `
    <div class="skill-group">
      <span class="skill-group-label">${g.label}</span>
      <div class="tags">${g.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    </div>
  `).join('');

  // Education
  document.getElementById('edu-label').textContent = s.eduLabel;
  document.getElementById('edu-list').innerHTML = s.education.map(e => `
    <div class="edu-item">
      <div class="edu-school">${e.school}</div>
      <div class="edu-degree">${e.degree}</div>
      <div class="edu-field">${e.field}</div>
      <div class="edu-year">${e.year}</div>
    </div>
  `).join('');

  // Languages
  document.getElementById('langs-label').textContent = s.langsLabel;
  document.getElementById('lang-list').innerHTML = s.languages.map(l => `
    <div class="lang-item">
      <span class="lang-name">${l.name}</span>
      <span class="lang-level">${l.level}</span>
    </div>
  `).join('');

  // Footer
  document.getElementById('footer-text').textContent = s.footerText;

  // Page title
  document.title = currentLang === 'ru'
    ? 'Алексей Куделин — Senior Software Engineer'
    : 'Aleksei Kudelin — Senior Software Engineer';
}

// ── Event listeners ──
document.getElementById('lang-ru').addEventListener('click', () => {
  currentLang = 'ru';
  localStorage.setItem('cv-lang', 'ru');
  render();
});

document.getElementById('lang-en').addEventListener('click', () => {
  currentLang = 'en';
  localStorage.setItem('cv-lang', 'en');
  render();
});

document.getElementById('print-btn').addEventListener('click', () => window.print());

document.getElementById('theme-btn').addEventListener('click', () => {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem('cv-theme', currentTheme);
  render();
});

// ── Init ──
render();
