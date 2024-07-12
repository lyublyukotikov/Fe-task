import MainComponent from "./task_1/MainComponent";
import FunctionalCounter from "./task_2/FunctionalCounter";
import { outputData } from "./task_3/TransformData";
function App() {
  return (
    <>
      {/* first task */}
      <MainComponent />
      {/* second task */}
      <FunctionalCounter />
      {/* third task */}
      <div>
        {outputData.map((item) => (
          <div key={item.value}>{item.label}</div>
        ))}
      </div>
    </>
  );
}

export default App;
