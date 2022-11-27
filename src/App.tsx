import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './components/model';
import TodoList from './components/TodoList';
import ShiftList from './components/ShiftList';


const App: React.FC = () => {

const[todo,setTodo] = useState<string>("");
const [todos,setTodos] = useState<Todo[]>([]);
const [count, setCount] = useState(0);

const handleAdd=(e: React.FormEvent) => {
  e.preventDefault();
  if(todo){
    setTodos([...todos,{id:Date.now(),todo,isDone:false}]);
    setTodo("");
  }
};

console.log(todos);
  return (
    <div className="App">
      <span className= "heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos ={todos} setTodos={setTodos}/>
      
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    <ShiftList/>
    </div>
  );
};

export default App;
