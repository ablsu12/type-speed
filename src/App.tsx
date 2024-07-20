import { TAppContainer } from './component/TAppContainer.tsx';
import { TWordContainer } from './component/TWordContainer.tsx';

const App = () => {
  return (
    <div className={'w-full h-screen'}>
      <header
        className={
          'w-full h-20 bg-sky-700 text-white font-bold flex justify-center items-center'
        }
      >
        Type Speed App
      </header>
      <TAppContainer>
        <TWordContainer />
      </TAppContainer>
    </div>
  );
};

export default App;
