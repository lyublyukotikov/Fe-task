// из 4 таска импорт типов
import {
  UserArray,
  TransformedData,
  TransformDataFunction,
} from "../task_4/type";
const inputData: UserArray[] = [
  [
    ["id", 1],
    ["name", "Ivan"],
    ["age", 23],
  ],
  [
    ["id", 2],
    ["name", "Maria"],
    ["age", 30],
  ],
  [
    ["id", 3],
    ["name", "Anna"],
    ["age", 28],
  ],
];

const transformData: TransformDataFunction = (data) => {
  //проходимся по массиву  inputData
  return data.map((userArray) => {
    // создаем переменные
    let id: number = 0;
    let name: string = "";
    let age: number = 0;

    // проходимся  по каждому вложенному массиву
    userArray.forEach(([key, value]) => {
      if (key === "id") {
        id = value as number;
      } else if (key === "name") {
        name = value as string;
      } else if (key === "age") {
        age = value as number;
      }
    });
    // возвращаем  из массива
    return {
      label: `${name}, ${age}`,
      value: id,
    };
  });
};

const outputData: TransformedData[] = transformData(inputData);

export { outputData };
