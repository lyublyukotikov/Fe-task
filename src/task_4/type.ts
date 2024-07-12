//вложенный
type UserData = ["id", number] | ["name", string] | ["age", number];

// массив из массивов
type UserArray = UserData[];

// output
interface TransformedData {
  label: string;
  value: number;
}

// function
type TransformDataFunction = (data: UserArray[]) => TransformedData[];

export { UserArray, TransformedData, TransformDataFunction };
