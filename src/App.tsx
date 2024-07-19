import { TAppContainer } from './component/TAppContainer.tsx';
import { TWordContainer } from './component/TWordContainer.tsx';

const App = () => {
  return (
    <div className={'w-full h-screen'}>
      <TAppContainer>
        <TWordContainer />
      </TAppContainer>
    </div>
  );
};

export default App;
