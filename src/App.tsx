import { TContainer } from "./component/TContainer.tsx";

const App = () => {
  return (
    <div className={"w-full h-screen"}>
      <header
        className={
          "w-full h-20 bg-sky-700 text-white font-bold flex justify-center items-center"
        }
      >
        Type Speed App
      </header>
      <div
        className={"w-full h-3/4 p-2 flex flex-col justify-evenly items-center"}
      >
        <TContainer />
      </div>
    </div>
  );
};

export default App;
