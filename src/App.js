import './App.css';
import CurrencyRow from './components/CurrencyRow';

const App = () => {
  return (
    <>
      <h1> Convert </h1>

      <CurrencyRow />

      <div className='equals'>
        =
      </div>

      <CurrencyRow />
    </>
  );
}

export default App;
