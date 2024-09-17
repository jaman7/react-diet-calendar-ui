import MainMenu from 'view/MainMenu';
import Frontpage from 'view/main-view/Frontpage';

const App = () => {
  return (
    <>
      <MainMenu />
      <div className="content">
        <Frontpage />
      </div>
    </>
  );
};

export default App;
