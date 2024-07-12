/* eslint-disable */
import { Fragment, memo, useCallback } from "react";
// Мемоизация не работала,потому что при каждом рендере компонента  MainComponent создавалась новая функция makeLog
//  ChildComponent получал новый пропс  при каждом последующем рендаре  MainComponent и  ChildComponent повторно рендарелся
// Основной компонент
const MainComponent = () => {
  // Используем хук useCallback для оптимизации
  // Функция makeLog мемоизируется и возвращается новая функция только тогда, когда изменяются зависимости (в нашем случае пустой массив зависимостей)
  const makeLog = useCallback(() => console.log("hi from MainComponent"), []);

  return (
    <Fragment>
      <ChildComponent makeLog={makeLog} />
    </Fragment>
  );
};

// Мемоизированный компонент
// Используем memo, чтобы не перерисовывать ChildComponent, пока пропс makeLog остается неизменным
const ChildComponent = memo(({ makeLog }) => (
  <button onClick={makeLog}>say Hi from ChildComponent</button>
));

export default MainComponent;
