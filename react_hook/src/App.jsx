
import './App.css'
import Useeffect from './Useeffect';
import Usestate from './Usestate';

function App() {
//HOOKS : hooks in  react enable functional component to use state and lilfestyle features .
 

// USESTATE :  ` usestate()` in react that allows you to mannage the state in functional components. 

//SYNTAX :  import {usestate} from "react"
 // const [nam,setname] = usestate("") --> const[variable : store the value,function : to update the value]

 //const [count, setCount] = useState(0); //count is assigned a value but never used.


  return (
    <div>
    
    <Usestate/>
    <Useeffect/>

    </div>
  );
};

export default App
