import Card from "./Components/Card"
import './App.css'
import { useRef, useState } from "react";
import Filter from "./Components/Filter";

function App() {
  // eslint-disable-next-line no-unused-vars 
    const inoutEle = useRef ()
    const [cardToggle, setCardToggle] = useState(true);
    const [filterData , setFilterData] = useState(0)
    const [state, setState] = useState(
    [
      {
        id : 1,
        name: "castillo",
        age: "20",
        email: "castillo@gmail.com",
        type:  "boy"
      },
      {
      id : 2,
      name: "nada",
      age: "80",
      email: "ali@gmail.com",
      type:  "girl"
    },
    {
      id : 3,
      name: "mohamed",
      age: "28",
      email: "mohamed@gmail.com",
      type:  "boy"
    },
    {
      id : 4,
      name: "sama",
      age: "28",
      email: "mohamed@gmail.com",
      type:  "girl"
    }
    ]
    )
 
    const deleteFunc = (e, sellectedID) =>{
        setState((preveState) => {
          return preveState.filter((eleF) => eleF.id !== sellectedID);
          
        });
    }

    // const wrightconsole = () => {
    //   console.log(inoutEle.current.value);
    // }
    const clickFucos = () => {
      console.log(inoutEle.current.focus());
    }


    const filterName = (name) => {
      console.log(name);
      return setFilterData(name);
      
    }
    const filterHandler = () => {
        if (filterData.length > 0 ) {
          return state.filter(
            (ele) => ele.name.startsWith(filterData)
          );
        }
        return state;
    }
  return (
    <div>
      <h2>Boys Data</h2>
      <button
        onClick={() =>
          cardToggle ? setCardToggle(false) : setCardToggle(true)
        }
        className="px-10 py-2 bg-cyan-900 rounded-lg my-5 text-white"
      >
        {cardToggle ? "hide" : "show"}
      </button>
      <div>
        <button
          className="px-5 py-2 bg-cyan-900 rounded-lg my-5 text-white"
          onClick={clickFucos}
        >
          focus
        </button>
        <Filter filterName={filterName} />
      </div>
      <div className={cardToggle ? "block" : "hidden"}>
        <Card
          card={filterHandler()}
          deleteFunc={deleteFunc}
          border="rgb(225 29 72);"
        />
      </div>
    </div>
  );
}

export default App
