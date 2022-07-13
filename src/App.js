import './App.css';
import { Stack } from './components/stack/stack';
import {Linkedlist} from './components/linkedlist/linkedlist';
//import {TreeNode} from './components/tree/treenode';
import {Stacks} from './pages/stacks';

function App() {
  const stackvalues = [1,2,3,4,5];
  
  return (
    <div className="App">
      <header className='App-header'>
        <Stack values = {stackvalues}/>
        <Linkedlist values = {stackvalues}/>
        <Stacks />
        </header>
       </div>
  );
}

export default App;
