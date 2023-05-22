import { useState, useEffect }  from 'react'
import './App.css';
import List from './Component/List';
import Detail from './Component/Detail';


function App() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const initialUrl= "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json";
  const [chosenItem, setChosenItem] = useState(null);

  useEffect(
    () => {
      (async () => {
        setLoading(true);
        const response = await fetch(initialUrl);
        if (response.ok) {
          const data = await response.json();
          setList(data);
          setLoading(false);
        } else (
          console.log("шо-то не так")
        )
      })()
    }
  ,[])

  return (
    <div className="App">
      { 
        loading ? <h2>loading...</h2> : <List list={list} chosenItem={chosenItem} setChosenItem={setChosenItem} />
      }   
        <Detail item={chosenItem}  /> 
    </div>
  );
}

export default App;
