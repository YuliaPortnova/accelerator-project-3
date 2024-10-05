const newsData = [
  {
    id: 1,
    topic: 'internships',
    date: {
      year: '2023',
      month: '03',
      day: '23',
    },
    title: 'Интервью с участницей программы стажировки',
    text: 'Саша рассказывает, как попала в программу и как прошла 6-месячная стажировка в ISOFound',
  },
  {
    id: 2,
    topic: 'trips',
    date: {
      year: '2023',
      month: '03',
      day: '20',
    },
    title: 'Путешествуем по миру',
    text: 'Какие места посещают наши студенты весной',
  },
  {
    id: 3,
    topic: 'volunteering',
    date: {
      year: '2023',
      month: '03',
      day: '17',
    },
    title: 'Новая программа волонтёрства',
    text: 'Программа помощи детям длительностью 4 месяца',
  },
  {
    id: 4,
    topic: 'career',
    date: {
      year: '2023',
      month: '03',
      day: '10',
    },
    title: 'Построй свою карьеру',
    text: 'Ведущие компании готовы трудоустроить выпускников стажировки',
  },
  {
    id: 5,
    topic: 'internships',
    date: {
      year: '2023',
      month: '03',
      day: '09',
    },
    title: 'Статья про стажировку №2',
    text: 'Саша рассказывает, как попала в программу и как прошла 6-месячная стажировка в ISOFound',
  },
  {
    id: 6,
    topic: 'trips',
    date: {
      year: '2023',
      month: '03',
      day: '08',
    },
    title: 'Статья про путешествия №2',
    text: 'Какие места посещают наши студенты весной',
  },
  {
    id: 7,
    topic: 'volunteering',
    date: {
      year: '2023',
      month: '03',
      day: '07',
    },
    title: 'Статья про волонтерство №2',
    text: 'Программа помощи детям длительностью 4 месяца',
  },
  {
    id: 8,
    topic: 'career',
    date: {
      year: '2023',
      month: '03',
      day: '06',
    },
    title: 'Статья про карьеру №2',
    text: 'Ведущие компании готовы трудоустроить выпускников стажировки',
  },
  {
    id: 9,
    topic: 'internships',
    date: {
      year: '2023',
      month: '03',
      day: '05',
    },
    title: 'Статья про стажировку №3',
    text: 'Саша рассказывает, как попала в программу и как прошла 6-месячная стажировка в ISOFound',
  },
  {
    id: 10,
    topic: 'trips',
    date: {
      year: '2023',
      month: '03',
      day: '04',
    },
    title: 'Статья про путешествия №3',
    text: 'Какие места посещают наши студенты весной',
  },
  {
    id: 11,
    topic: 'volunteering',
    date: {
      year: '2023',
      month: '03',
      day: '03',
    },
    title: 'Статья про волонтерство №3',
    text: 'Программа помощи детям длительностью 4 месяца',
  },
  {
    id: 12,
    topic: 'career',
    date: {
      year: '2023',
      month: '03',
      day: '02',
    },
    title: 'Статья про карьеру №3',
    text: 'Ведущие компании готовы трудоустроить выпускников стажировки',
  },
  {
    id: 13,
    topic: 'internships',
    date: {
      year: '2023',
      month: '03',
      day: '01',
    },
    title: 'Статья про стажировку №4',
    text: 'Саша рассказывает, как попала в программу и как прошла 6-месячная стажировка в ISOFound',
  },
  {
    id: 14,
    topic: 'trips',
    date: {
      year: '2023',
      month: '02',
      day: '28',
    },
    title: 'Статья про путешествия №4',
    text: 'Какие места посещают наши студенты весной',
  },
  {
    id: 15,
    topic: 'volunteering',
    date: {
      year: '2023',
      month: '02',
      day: '27',
    },
    title: 'Статья про волонтерство №4',
    text: 'Программа помощи детям длительностью 4 месяца',
  },
  {
    id: 16,
    topic: 'career',
    date: {
      year: '2023',
      month: '02',
      day: '26',
    },
    title: 'Статья про карьеру №4',
    text: 'Ведущие компании готовы трудоустроить выпускников стажировки',
  },
  {
    id: 17,
    topic: 'internships',
    date: {
      year: '2023',
      month: '03',
      day: '01',
    },
    title: 'Статья про стажировку №5',
    text: 'Саша рассказывает, как попала в программу и как прошла 6-месячная стажировка в ISOFound',
  },
  {
    id: 18,
    topic: 'trips',
    date: {
      year: '2023',
      month: '02',
      day: '28',
    },
    title: 'Статья про путешествия №5',
    text: 'Какие места посещают наши студенты весной',
  },
  {
    id: 19,
    topic: 'volunteering',
    date: {
      year: '2023',
      month: '02',
      day: '27',
    },
    title: 'Статья про волонтерство №5',
    text: 'Программа помощи детям длительностью 4 месяца',
  },
  {
    id: 20,
    topic: 'career',
    date: {
      year: '2023',
      month: '02',
      day: '26',
    },
    title: 'Статья про карьеру №5',
    text: 'Ведущие компании готовы трудоустроить выпускников стажировки',
  },
  {
    id: 21,
    topic: 'internships',
    date: {
      year: '2023',
      month: '03',
      day: '01',
    },
    title: 'Статья про стажировку №6',
    text: 'Саша рассказывает, как попала в программу и как прошла 6-месячная стажировка в ISOFound',
  },
  {
    id: 22,
    topic: 'trips',
    date: {
      year: '2023',
      month: '02',
      day: '28',
    },
    title: 'Статья про путешествия №6',
    text: 'Какие места посещают наши студенты весной',
  },
  {
    id: 23,
    topic: 'volunteering',
    date: {
      year: '2023',
      month: '02',
      day: '27',
    },
    title: 'Статья про волонтерство №6',
    text: 'Программа помощи детям длительностью 4 месяца',
  },
  {
    id: 24,
    topic: 'career',
    date: {
      year: '2023',
      month: '02',
      day: '26',
    },
    title: 'Статья про карьеру №6',
    text: 'Ведущие компании готовы трудоустроить выпускников стажировки',
  },

];

export { newsData };
