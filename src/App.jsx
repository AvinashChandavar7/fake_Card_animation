import Cards from './components/Cards/Cards';
import './App.css';
import Card1 from './components/Card1/Card1';

const App = () => {
  return (
    <>
      <div className="app_container">
        <Cards />
        <Card1 />
      </div>
    </>
  );
};

export default App;
