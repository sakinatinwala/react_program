import './App.css';
import { Stack } from './components/stack/stack';
import {Linkedlist} from './components/linkedlist/linkedlist';
import {Stacks} from './pages/stacks';

function App() {
  const stackvalues = [1,2,3];
  
  return (
    <div className="App">
      <header className='App-header'>
        <Stack values = {stackvalues}/>
        <Linkedlist values = {stackvalues}/>
        <Stacks values = {stackvalues}/>
        </header>
       </div>
  );
}

export default App;
