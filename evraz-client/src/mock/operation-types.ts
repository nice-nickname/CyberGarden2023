export const operationTypes = [
  {
    id: 1,
    name: "Поездная работа",
    operations: [
      {
        id: 1,
        name: "Ведение поезда по перегону",
        operationTypeId: 1,
      },
      {
        id: 2,
        name: "Движение локомотива резервом по перегону",
        operationTypeId: 1,
      },
    ],
  },
  {
    id: 2,
    name: "Маневровая работа",
    operations: [
      {
        id: 8,
        name: "Подача вагонов",
        operationTypeId: 2,
      },
      {
        id: 6,
        name: "Перестановка вагонов",
        operationTypeId: 2,
      },
      {
        id: 9,
        name: "Уборка вагонов",
        operationTypeId: 2,
      },
    ],
  },
  {
    id: 8,
    name: "Ремонтные работы",
    operations: [
      {
        id: 44,
        name: "Замена неисправного локомотива (депо)",
        operationTypeId: 8,
      },
      {
        id: 48,
        name: "Ремонт подвижного состава",
        operationTypeId: 8,
      },
    ],
  },
  {
    id: 11,
    name: "Грузовые",
    operations: [
      {
        id: 75,
        name: "Погрузка",
        operationTypeId: 11,
      },
      {
        id: 74,
        name: "Выгрузка",
        operationTypeId: 11,
      },
    ],
  },
];
