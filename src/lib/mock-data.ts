import type { Course, Teacher, Branch, Review } from "@/types";

export const mockCourses: Course[] = [
  {
    id: "1",
    slug: "med-cluster-5",
    title_ru: "Подготовка в медвузы (кластер 5)",
    title_tj: "Омодагӣ ба донишгоҳҳои тиббӣ (кластер 5)",
    description_ru:
      "Комплексная подготовка к вступительным экзаменам в медицинские вузы по предметам кластера 5: биология, химия, математика.",
    description_tj:
      "Омодагии мукаммал ба имтиҳонҳои дохилшавӣ ба донишгоҳҳои тиббӣ аз фанҳои кластери 5: биология, химия, математика.",
    program_ru: [
      { title: "Биология", topics: ["Клетка и её строение", "Генетика и наследственность", "Анатомия человека", "Зоология", "Ботаника"] },
      { title: "Химия", topics: ["Общая химия", "Неорганическая химия", "Органическая химия", "Биохимия"] },
      { title: "Математика", topics: ["Алгебра", "Геометрия", "Тригонометрия"] },
    ],
    program_tj: [
      { title: "Биология", topics: ["Ҳуҷайра ва сохтори он", "Генетика ва мерос", "Анатомияи инсон", "Зоология", "Ботаника"] },
      { title: "Химия", topics: ["Химияи умумӣ", "Химияи ғайриорганикӣ", "Химияи органикӣ", "Биохимия"] },
      { title: "Математика", topics: ["Алгебра", "Геометрия", "Тригонометрия"] },
    ],
    duration: "9 месяцев",
    price_from: 350,
    category: "cluster_5",
    image_url: "/images/courses/med.jpg",
    is_active: true,
    order_index: 1,
  },
  {
    id: "2",
    slug: "cluster-4",
    title_ru: "Кластер 4 (Инженерные вузы)",
    title_tj: "Кластери 4 (Донишгоҳҳои муҳандисӣ)",
    description_ru:
      "Подготовка по физике, математике и русскому языку для инженерных специальностей.",
    description_tj:
      "Омодагӣ аз физика, математика ва забони русӣ барои ихтисосҳои муҳандисӣ.",
    program_ru: [
      { title: "Физика", topics: ["Механика", "Молекулярная физика", "Электричество и магнетизм", "Оптика", "Ядерная физика"] },
      { title: "Математика", topics: ["Алгебра и начала анализа", "Геометрия", "Тригонометрия", "Комбинаторика"] },
      { title: "Русский язык", topics: ["Орфография", "Пунктуация", "Развитие речи"] },
    ],
    program_tj: [
      { title: "Физика", topics: ["Механика", "Физикаи молекулавӣ", "Электричество ва магнетизм", "Оптика", "Физикаи ядроӣ"] },
      { title: "Математика", topics: ["Алгебра ва ибтидои таҳлил", "Геометрия", "Тригонометрия", "Комбинаторика"] },
      { title: "Забони русӣ", topics: ["Орфография", "Пунктуатсия", "Инкишофи нутқ"] },
    ],
    duration: "9 месяцев",
    price_from: 300,
    category: "cluster_4",
    image_url: "/images/courses/eng.jpg",
    is_active: true,
    order_index: 2,
  },
  {
    id: "3",
    slug: "cluster-3",
    title_ru: "Кластер 3 (Естественные науки)",
    title_tj: "Кластери 3 (Илмҳои табиатшиносӣ)",
    description_ru:
      "Подготовка по химии, биологии и математике для естественно-научных факультетов.",
    description_tj:
      "Омодагӣ аз химия, биология ва математика барои факултетҳои табиатшиносӣ.",
    program_ru: [
      { title: "Химия", topics: ["Общая химия", "Органическая химия", "Аналитическая химия"] },
      { title: "Биология", topics: ["Ботаника", "Зоология", "Экология"] },
    ],
    program_tj: [
      { title: "Химия", topics: ["Химияи умумӣ", "Химияи органикӣ", "Химияи аналитикӣ"] },
      { title: "Биология", topics: ["Ботаника", "Зоология", "Экология"] },
    ],
    duration: "9 месяцев",
    price_from: 300,
    category: "cluster_3",
    image_url: "/images/courses/science.jpg",
    is_active: true,
    order_index: 3,
  },
  {
    id: "4",
    slug: "cluster-1",
    title_ru: "Кластер 1 (Гуманитарные вузы)",
    title_tj: "Кластери 1 (Донишгоҳҳои гуманитарӣ)",
    description_ru:
      "Подготовка по истории, географии и родному языку для гуманитарных факультетов.",
    description_tj:
      "Омодагӣ аз таърих, ҷуғрофия ва забони модарӣ барои факултетҳои гуманитарӣ.",
    program_ru: [
      { title: "История", topics: ["История Таджикистана", "Всемирная история", "Обществознание"] },
      { title: "Родной язык", topics: ["Грамматика", "Литература", "Сочинение"] },
    ],
    program_tj: [
      { title: "Таърих", topics: ["Таърихи Тоҷикистон", "Таърихи ҷаҳон", "Ҷомеашиносӣ"] },
      { title: "Забони модарӣ", topics: ["Грамматика", "Адабиёт", "Иншо"] },
    ],
    duration: "9 месяцев",
    price_from: 280,
    category: "cluster_1",
    image_url: "/images/courses/humanities.jpg",
    is_active: true,
    order_index: 4,
  },
  {
    id: "5",
    slug: "english-language",
    title_ru: "Английский язык",
    title_tj: "Забони англисӣ",
    description_ru:
      "Курсы английского языка для всех уровней. Подготовка к IELTS, TOEFL.",
    description_tj:
      "Курсҳои забони англисӣ барои ҳамаи сатҳҳо. Омодагӣ ба IELTS, TOEFL.",
    program_ru: [
      { title: "General English", topics: ["Grammar", "Speaking", "Writing", "Listening", "Reading"] },
      { title: "IELTS Preparation", topics: ["Academic Writing", "Speaking Practice", "Listening Strategies", "Reading Techniques"] },
    ],
    program_tj: [
      { title: "General English", topics: ["Grammar", "Speaking", "Writing", "Listening", "Reading"] },
      { title: "Омодагӣ ба IELTS", topics: ["Academic Writing", "Speaking Practice", "Listening Strategies", "Reading Techniques"] },
    ],
    duration: "6 месяцев",
    price_from: 250,
    category: "english",
    image_url: "/images/courses/english.jpg",
    is_active: true,
    order_index: 5,
  },
  {
    id: "6",
    slug: "abroad-universities",
    title_ru: "Подготовка в зарубежные вузы",
    title_tj: "Омодагӣ ба донишгоҳҳои хориҷӣ",
    description_ru:
      "Подготовка к поступлению в вузы России, Турции, Китая и других стран.",
    description_tj:
      "Омодагӣ ба дохилшавӣ ба донишгоҳҳои Русия, Туркия, Чин ва дигар кишварҳо.",
    program_ru: [
      { title: "Профильные предметы", topics: ["По выбранному направлению"] },
      { title: "Иностранные языки", topics: ["Русский", "Английский", "Турецкий"] },
    ],
    program_tj: [
      { title: "Фанҳои касбӣ", topics: ["Аз рӯи самти интихобшуда"] },
      { title: "Забонҳои хориҷӣ", topics: ["Русӣ", "Англисӣ", "Туркӣ"] },
    ],
    duration: "9 месяцев",
    price_from: 400,
    category: "abroad",
    image_url: "/images/courses/abroad.jpg",
    is_active: true,
    order_index: 6,
  },
  {
    id: "7",
    slug: "mathematics",
    title_ru: "Математика (углублённый курс)",
    title_tj: "Математика (курси амиқ)",
    description_ru:
      "Углублённый курс математики для подготовки к олимпиадам и экзаменам.",
    description_tj:
      "Курси амиқи математика барои омодагӣ ба олимпиадаҳо ва имтиҳонҳо.",
    program_ru: [
      { title: "Алгебра", topics: ["Уравнения", "Неравенства", "Функции", "Логарифмы"] },
      { title: "Геометрия", topics: ["Планиметрия", "Стереометрия", "Координатная геометрия"] },
    ],
    program_tj: [
      { title: "Алгебра", topics: ["Муодилаҳо", "Нобаробариҳо", "Функсияҳо", "Логарифмҳо"] },
      { title: "Геометрия", topics: ["Планиметрия", "Стереометрия", "Геометрияи координатӣ"] },
    ],
    duration: "6 месяцев",
    price_from: 200,
    category: "math",
    image_url: "/images/courses/math.jpg",
    is_active: true,
    order_index: 7,
  },
];

export const mockTeachers: Teacher[] = [
  {
    id: "1",
    name_ru: "Алиев Фаррух Саидович",
    name_tj: "Алиев Фаррух Саидович",
    subject_ru: "Биология",
    subject_tj: "Биология",
    bio_ru: "Кандидат биологических наук, 15 лет опыта преподавания.",
    bio_tj: "Номзади илмҳои биологӣ, 15 сол таҷрибаи омӯзгорӣ.",
    experience_years: 15,
    photo_url: "/images/teachers/teacher-1.jpg",
    order_index: 1,
  },
  {
    id: "2",
    name_ru: "Рахимова Нигина Бахтиёровна",
    name_tj: "Раҳимова Нигина Бахтиёровна",
    subject_ru: "Химия",
    subject_tj: "Химия",
    bio_ru: "Доцент кафедры химии, автор учебных пособий.",
    bio_tj: "Дотсенти кафедраи химия, муаллифи дастурҳои таълимӣ.",
    experience_years: 12,
    photo_url: "/images/teachers/teacher-2.jpg",
    order_index: 2,
  },
];

export const mockBranches: Branch[] = [
  {
    id: "1",
    city_ru: "Душанбе",
    city_tj: "Душанбе",
    address_ru: "ул. Рудаки 120, 3 этаж",
    address_tj: "кӯч. Рӯдакӣ 120, ошёнаи 3",
    phone: "+992 900 123 456",
    working_hours: "09:00 – 20:00",
    latitude: 38.5598,
    longitude: 68.787,
    photos: [],
  },
  {
    id: "2",
    city_ru: "Худжанд",
    city_tj: "Хуҷанд",
    address_ru: "ул. Ленина 45",
    address_tj: "кӯч. Ленин 45",
    phone: "+992 927 654 321",
    working_hours: "09:00 – 19:00",
    latitude: 40.2826,
    longitude: 69.6291,
    photos: [],
  },
];

export const mockReviews: Review[] = [
  {
    id: "1",
    student_name: "Сафаров Далер",
    university: "ТГМУ им. Авиценны",
    course_id: "1",
    text_ru:
      "Благодаря центру «Репетитор» я поступил в медицинский университет с первого раза. Преподаватели — настоящие профессионалы!",
    text_tj:
      "Бо шарофати маркази «Репетитор» ман аз бори аввал ба донишгоҳи тиббӣ дохил шудам. Омӯзгорон — мутахассисони воқеӣ!",
    photo_url: "/images/reviews/student-1.jpg",
    video_url: null,
    year: 2024,
  },
  {
    id: "2",
    student_name: "Каримова Мадина",
    university: "Российский университет дружбы народов",
    course_id: "3",
    text_ru:
      "Курс английского помог мне получить IELTS 7.0 и поступить в РУДН. Спасибо «Репетитор»!",
    text_tj:
      "Курси забони англисӣ ба ман кӯмак кард, ки IELTS 7.0 гирам ва ба РУДН дохил шавам. Ташаккур «Репетитор»!",
    photo_url: "/images/reviews/student-2.jpg",
    video_url: null,
    year: 2024,
  },
];
