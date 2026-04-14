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
      { title: "Биология", topics: ["Клетка", "Генетика", "Анатомия"] },
    ],
    program_tj: [
      { title: "Биология", topics: ["Ҳуҷайра", "Генетика", "Анатомия"] },
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
      { title: "Физика", topics: ["Механика", "Оптика", "Электричество"] },
    ],
    program_tj: [
      { title: "Физика", topics: ["Механика", "Оптика", "Электричество"] },
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
    slug: "english-language",
    title_ru: "Английский язык",
    title_tj: "Забони англисӣ",
    description_ru:
      "Курсы английского языка для всех уровней. Подготовка к IELTS, TOEFL.",
    description_tj:
      "Курсҳои забони англисӣ барои ҳамаи сатҳҳо. Омодагӣ ба IELTS, TOEFL.",
    program_ru: [
      { title: "General English", topics: ["Grammar", "Speaking", "Writing"] },
    ],
    program_tj: [
      { title: "General English", topics: ["Grammar", "Speaking", "Writing"] },
    ],
    duration: "6 месяцев",
    price_from: 250,
    category: "english",
    image_url: "/images/courses/english.jpg",
    is_active: true,
    order_index: 3,
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
