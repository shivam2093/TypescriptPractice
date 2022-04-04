import './App.css';
import Button from './components/Button';
import Box from './components/ContextExample/Box';
import { ThemeContxtProvider } from './components/ContextExample/ThemeContext';
import { UserContextProvider } from './components/ContextExample/UserContext';
import Greet from './components/Greet';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import LoggedIn from './components/StateExample/LoggedIn';
// import User from './components/StateExample/User';
import Status from './components/Status';
import Styles from './components/Styles';
import Heading from './Heading';
import User from './components/ContextExample/User';
import Counter from './components/ClassComponent/Counter'
function App() {
  const person = {
    first:'shiv',
    last:'patel'
  }
  const name = [
    {
      first:'shiv',
      last:'patel'
    },{
      first:'mahes',
      last:'patel'
    },{
      first:'chelo',
      last:'patel'
    },{
      first:'dilip',
      last:'patel'
    }
  ]
  return (
    <div className="App">
      {/* <Greet name = "shivam" 
       isLogged = {true}/>
       <Person name={person}/>
       <PersonList name={name}/>
       <Status status='loading'/>

       <Heading>Hello Shivam</Heading>
       
       <Oscar>
         <Heading>oscar goes to </Heading>
       </Oscar>
       <Button handleClick={(event, id) => {
         console.log('Buttonssssss',event , id)
       }}/>
       <Input value='' onChange={(event) => console.log(event.target.value)}/>
   <Styles styles={{border:'2px solid black', padding:'1rem'}}/> */}
    {/* <LoggedIn/>
    <User/> */}
    {/* <ThemeContxtProvider>
      <Box/>
    </ThemeContxtProvider> */}
    {/* <UserContextProvider>
      <User/>
    </UserContextProvider> */}
    <Counter message = "hello shivam" />
    </div>
  );
}

export default App;
