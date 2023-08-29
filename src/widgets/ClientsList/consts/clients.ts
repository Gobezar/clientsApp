// import Kravtsova from '../../../images/clients/Kravtsova.png'

export type Notes = {
  id: number;
  date: string;
  text: string;
  image?: string;
};

export type Consultations = {
  id: number;
  date: string;
  time: string;
  text: string;
  image?: string;
};
export type Videos = {
  id: number;
  date: string;
  author: string;
  name: string;
  image?: string;
};
export type Events = {
  id: number;
  name: string;
  time: string;
  date: string;
  type: string;
  image?: string;
};

export interface IClientsProps {
  id: number;
  name: string;
  surname: string;
  secondName: string;
  age: number;
  photo: string;
  sex: "жен" | "муж";
  notes: Notes[];
  consultations: Consultations[];
  videos: Videos[];
  events: Events[];
}

export const clients: IClientsProps[] = [
  {
    id: 1,
    name: "Александра",
    surname: "Кравцова",
    secondName: "Николаевна",
    photo: require("../../../images/clients/Kravtsova.png"),
    age: 31,
    sex: "жен",
    notes: [
      {
        id: 1,
        date: "20.12.2019",
        text: "Физические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.",
      },
      {
        id: 2,
        date: "20.12.2019",
        text: "Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.",
        image: require("../../../images/Map.png"),
      },
    ],
    consultations: [
      {
        id: 1,
        date: "15.01.2019",
        time: "12:30-13:00",
        text: "Онлайн-консультация",
        image: require("../../../images/onlineConsultationBlue.png"),
      },
      {
        id: 2,
        date: "15.01.2019",
        time: "12:30-13:00",
        text: "Онлайн-консультация",
        image: require("../../../images/onlineConsultationGray.png"),
      },
      {
        id: 3,
        date: "15.01.2019",
        time: "12:45-13:10",
        text: "Личный прием",
        image: require("../../../images/personalReception.png"),
      },
    ],
    videos: [
      {
        id: 1,
        date: "15.03.2019",
        author: "Астахова Е.В.",
        name: "Разминка для локтевого сустава",
        image: require("../../../images/video2.png"),
      },
      {
        id: 2,
        date: "16.03.2019",
        author: "Астахова Е.В.",
        name: "Крабик, ходьба в бок в приседе с двумя резинками",
        image: require("../../../images/video1.png"),
      },
    ],
    events: [
      {
        id: 1,
        name: "Тяга резинки в шаге со сгибанием локтя под 90 градусов ",
        type: "Вебинар",
        date: "13.08.2019",
        time: "17:00-18:00",
        image: require("../../../images/event.png"),
      },
    ],
  },
  {
    id: 2,
    name: "Денис",
    surname: "Рожков",
    secondName: "Петрович",
    photo: require("../../../images/clients/Rozhkov.png"),
    age: 30,
    sex: "муж",
    notes: [
      {
        id: 1,
        date: "21.10.2019",
        text: "Физические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.",
      },
      {
        id: 2,
        date: "21.10.2019",
        text: "Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.",
        image: require("../../../images/Map.png"),
      },
    ],
    consultations: [
      {
        id: 1,
        date: "14.01.2019",
        time: "13:30-14:00",
        text: "Онлайн-консультация",
        image: require("../../../images/onlineConsultationGray.png"),
      },
      {
        id: 2,
        date: "14.01.2019",
        time: "13:30-14:00",
        text: "Онлайн-консультация",
        image: require("../../../images/onlineConsultationBlue.png"),
      },
      {
        id: 3,
        date: "16.01.2019",
        time: "17:45-18:15",
        text: "Личный прием",
        image: require("../../../images/personalReception.png"),
      },
    ],
    videos: [
      {
        id: 1,
        date: "15.08.2019",
        author: "Астахова Е.В.",
        name: "Разминка для локтевого сустава",
        image: require("../../../images/video1.png"),
      },
      {
        id: 2,
        date: "16.08.2019",
        author: "Астахова Е.В.",
        name: "Крабик, ходьба в бок в приседе с двумя резинками",
        image: require("../../../images/video2.png"),
      },
    ],
    events: [
      {
        id: 1,
        name: "Тяга резинки в шаге со сгибанием локтя под 90 градусов ",
        type: "Вебинар",
        date: "13.08.2020",
        time: "16:00-16:30",
        image: require("../../../images/event.png"),
      },
    ],
  },
  {
    id: 3,
    name: "Алевтина",
    surname: "Диброва",
    secondName: "Владимировна",
    age: 28,
    photo: require("../../../images/clients/Dibrova.png"),
    sex: "жен",
    notes: [
      {
        id: 1,
        date: "21.10.2020",
        text: "Физические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.",
        image: require("../../../images/Map.png"),
      },
      {
        id: 2,
        date: "24.10.2020",
        text: "Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.",
        image: require("../../../images/Map.png"),
      },
    ],
    consultations: [
      {
        id: 1,
        date: "14.04.2020",
        time: "15:30-16:00",
        text: "Онлайн-консультация",
        image: require("../../../images/onlineConsultationBlue.png"),
      },

      {
        id: 2,
        date: "16.01.2020",
        time: "15:45-16:15",
        text: "Личный прием",
        image: require("../../../images/personalReception.png"),
      },
    ],
    videos: [
      {
        id: 1,
        date: "18.08.2020",
        author: "Астахова Е.В.",
        name: "Разминка для локтевого сустава",
        image: require("../../../images/video2.png"),
      },
      {
        id: 2,
        date: "17.08.2020",
        author: "Астахова Е.В.",
        name: "Крабик, ходьба в бок в приседе с двумя резинками",
        image: require("../../../images/video1.png"),
      },
    ],
    events: [
      {
        id: 1,
        name: "Тяга резинки в шаге со сгибанием локтя под 90 градусов ",
        type: "Вебинар",
        date: "13.10.2020",
        time: "15:00-16:00",
        image: require("../../../images/event.png"),
      },
    ],
  },
  {
    id: 4,
    name: "Дмитрий",
    surname: "Иванов",
    secondName: "Александрович",
    age: 26,
    photo: require("../../../images/clients/Ivanov.png"),
    sex: "муж",
    notes: [
      {
        id: 1,
        date: "21.11.2021",
        text: "Физические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.",
        image: require("../../../images/Map.png"),
      },
      {
        id: 2,
        date: "24.11.2021",
        text: "Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.",
      },
    ],
    consultations: [
      {
        id: 1,
        date: "14.11.2021",
        time: "15:20-15:30",
        text: "Онлайн-консультация",
        image: require("../../../images/onlineConsultationGray.png"),
      },
      {
        id: 2,
        date: "16.11.2021",
        time: "15:45-16:20",
        text: "Личный прием",
        image: require("../../../images/personalReception.png"),
      },
    ],
    videos: [
      {
        id: 1,
        date: "18.11.2021",
        author: "Астахова Е.В.",
        name: "Разминка для локтевого сустава",
        image: require("../../../images/video2.png"),
      },
      {
        id: 2,
        date: "17.11.2021",
        author: "Астахова Е.В.",
        name: "Крабик, ходьба в бок в приседе с двумя резинками",
        image: require("../../../images/video1.png"),
      },
    ],
    events: [
      {
        id: 1,
        name: "Тяга резинки в шаге со сгибанием локтя под 90 градусов ",
        type: "Вебинар",
        date: "13.11.2021",
        time: "12:00-13:00",
        image: require("../../../images/event.png"),
      },
    ],
  },
  {
    id: 5,
    name: "Александр",
    surname: "Форс",
    secondName: "Николаевич",
    age: 17,
    photo: require("../../../images/clients/Fors.png"),
    sex: "муж",
    notes: [
      {
        id: 1,
        date: "21.12.2021",
        text: "Физические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.",
      },
      {
        id: 2,
        date: "24.12.2021",
        text: "Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.",
        image: require("../../../images/Map.png"),
      },
    ],
    consultations: [
      {
        id: 1,
        date: "14.12.2021",
        time: "15:55-17:00",
        text: "Онлайн-консультация",
        image: require("../../../images/onlineConsultationGray.png"),
      },
      {
        id: 2,
        date: "16.12.2021",
        time: "15:15-17:00",
        text: "Личный прием",
        image: require("../../../images/personalReception.png"),
      },
    ],
    videos: [
      {
        id: 1,
        date: "18.12.2021",
        author: "Астахова Е.В.",
        name: "Разминка для локтевого сустава",
        image: require("../../../images/video1.png"),
      },
      {
        id: 2,
        date: "17.12.2021",
        author: "Астахова Е.В.",
        name: "Крабик, ходьба в бок в приседе с двумя резинками",
        image: require("../../../images/video2.png"),
      },
    ],
    events: [
      {
        id: 1,
        name: "Тяга резинки в шаге со сгибанием локтя под 90 градусов ",
        type: "Вебинар",
        date: "13.12.2021",
        time: "11:00-12:00",
        image: require("../../../images/event.png"),
      },
    ],
  },
  {
    id: 6,
    name: "Артур",
    surname: "Ахмедов",
    secondName: "Гаджиевич",
    age: 38,
    photo: require("../../../images/clients/Ahmedov.png"),
    sex: "муж",
    notes: [
      {
        id: 1,
        date: "11.12.2022",
        text: "Физические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.",
        image: require("../../../images/Map.png"),
      },
      {
        id: 2,
        date: "11.12.2022",
        text: "Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.",
      },
    ],
    consultations: [
      {
        id: 1,
        date: "11.12.2022",
        time: "17:55-18:30",
        text: "Онлайн-консультация",
        image: require("../../../images/onlineConsultationBlue.png"),
      },
      {
        id: 2,
        date: "11.12.2022",
        time: "18:15-18:30",
        text: "Личный прием",
        image: require("../../../images/personalReception.png"),
      },
    ],
    videos: [
      {
        id: 1,
        date: "11.12.2022",
        author: "Астахова Е.В.",
        name: "Разминка для локтевого сустава",
        image: require("../../../images/video1.png"),
      },
      {
        id: 2,
        date: "11.12.2022",
        author: "Астахова Е.В.",
        name: "Крабик, ходьба в бок в приседе с двумя резинками",
        image: require("../../../images/video2.png"),
      },
    ],
    events: [
      {
        id: 1,
        name: "Тяга резинки в шаге со сгибанием локтя под 90 градусов ",
        type: "Вебинар",
        date: "11.12.2022",
        time: "10:00-11:00",
        image: require("../../../images/event.png"),
      },
    ],
  },
  {
    id: 7,
    name: "Игорь",
    surname: "Блажевич",
    secondName: "Алексеевич",
    age: 45,
    photo: require("../../../images/clients/Blazhevitch.png"),
    sex: "муж",
    notes: [
      {
        id: 1,
        date: "09.12.2022",
        text: "Физические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.",
      },
      {
        id: 2,
        date: "09.12.2022",
        text: "Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.",
        image: require("../../../images/Map.png"),
      },
    ],
    consultations: [
      {
        id: 1,
        date: "09.12.2022",
        time: "14:55-15:30",
        text: "Онлайн-консультация",
        image: require("../../../images/onlineConsultationGray.png"),
      },
      {
        id: 2,
        date: "09.12.2022",
        time: "11:15-12:30",
        text: "Личный прием",
        image: require("../../../images/personalReception.png"),
      },
    ],
    videos: [
      {
        id: 1,
        date: "09.12.2022",
        author: "Астахова Е.В.",
        name: "Разминка для локтевого сустава",
        image: require("../../../images/video2.png"),
      },
      {
        id: 2,
        date: "09.12.2022",
        author: "Астахова Е.В.",
        name: "Крабик, ходьба в бок в приседе с двумя резинками",
        image: require("../../../images/video1.png"),
      },
    ],
    events: [
      {
        id: 1,
        name: "Тяга резинки в шаге со сгибанием локтя под 90 градусов ",
        type: "Вебинар",
        date: "09.12.2022",
        time: "16:00-16:30",
        image: require("../../../images/event.png"),
      },
    ],
  },
  {
    id: 8,
    name: "Руфина",
    surname: "Валиева",
    secondName: "Руфатовна",
    age: 42,
    photo: require("../../../images/clients/Valieva.png"),
    sex: "жен",
    notes: [
      {
        id: 1,
        date: "15.12.2022",
        text: "Физические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.",
        image: require("../../../images/Map.png"),
      },
      {
        id: 2,
        date: "15.12.2022",
        text: "Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.",
      },
    ],
    consultations: [
      {
        id: 1,
        date: "15.12.2022",
        time: "14:10-14:30",
        text: "Онлайн-консультация",
        image: require("../../../images/onlineConsultationBlue.png"),
      },
      {
        id: 2,
        date: "15.12.2022",
        time: "11:10-11:30",
        text: "Личный прием",
        image: require("../../../images/personalReception.png"),
      },
    ],
    videos: [
      {
        id: 1,
        date: "15.12.2022",
        author: "Астахова Е.В.",
        name: "Разминка для локтевого сустава",
        image: require("../../../images/video2.png"),
      },
      {
        id: 2,
        date: "15.12.2022",
        author: "Астахова Е.В.",
        name: "Крабик, ходьба в бок в приседе с двумя резинками",
        image: require("../../../images/video1.png"),
      },
    ],
    events: [
      {
        id: 1,
        name: "Тяга резинки в шаге со сгибанием локтя под 90 градусов ",
        type: "Вебинар",
        date: "15.12.2022",
        time: "18:00-18:30",
        image: require("../../../images/event.png"),
      },
    ],
  },
  {
    id: 9,
    name: "Виктория",
    surname: "Волошина",
    secondName: "Сергеевна",
    age: 36,
    photo: require("../../../images/clients/Voloshina.png"),
    sex: "жен",
    notes: [
      {
        id: 1,
        date: "15.10.2022",
        text: "Физические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.",
      },
      {
        id: 2,
        date: "15.10.2022",
        text: "Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.",
        image: require("../../../images/Map.png"),
      },
    ],
    consultations: [
      {
        id: 1,
        date: "15.10.2022",
        time: "18:10-19:00",
        text: "Онлайн-консультация",
        image: require("../../../images/onlineConsultationGray.png"),
      },
      {
        id: 2,
        date: "15.10.2022",
        time: "12:10-13:00",
        text: "Личный прием",
        image: require("../../../images/personalReception.png"),
      },
    ],
    videos: [
      {
        id: 1,
        date: "15.10.2022",
        author: "Астахова Е.В.",
        name: "Разминка для локтевого сустава",
        image: require("../../../images/video1.png"),
      },
      {
        id: 2,
        date: "15.10.2022",
        author: "Астахова Е.В.",
        name: "Крабик, ходьба в бок в приседе с двумя резинками",
        image: require("../../../images/video2.png"),
      },
    ],
    events: [
      {
        id: 1,
        name: "Тяга резинки в шаге со сгибанием локтя под 90 градусов ",
        type: "Вебинар",
        date: "15.10.2022",
        time: "20:00-21:00",
        image: require("../../../images/event.png"),
      },
    ],
  },
];
