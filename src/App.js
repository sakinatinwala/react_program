import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Trees } from './pages/tree';
//import { Tree } from './components/tree/treenode';
//import { Linkedlist } from './components/linkedlist/linkedlist';
//import { LinkList } from './pages/linkedlist';
//import { Queues } from './pages/queue';
//import { Stack } from './components/stack/stack';
//import {Stacks} from './pages/stacks';
//import {Queue} from './components/queue/queue';

function App() {
  const stackvalues = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  
  return (
    <div className="App">
      <header className='App-header'>
      <Trees value= {stackvalues}/><br /> 
      
        </header>
       </div>
  );
}

export default App;
