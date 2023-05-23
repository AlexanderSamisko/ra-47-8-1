import { useState }  from 'react'
import './App.css';
import List from './Component/List';
import Detail from './Component/Detail';
import useFetch from './hooks/fetchHook';


function App() {
  const initialUrl= "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json";
  const [chosenItem, setChosenItem] = useState(null);
  const [{data, isLoading, hasError}] = useFetch(initialUrl);

  return (
    <div className="App">
      { 
        isLoading ? <h2>loading...</h2> : <List list={data} chosenItem={chosenItem} setChosenItem={setChosenItem} />
      }   
        <Detail item={chosenItem}  /> 
    </div>
  );
}

export default App;
