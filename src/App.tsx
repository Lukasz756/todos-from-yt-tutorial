import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './components/model';
import TodoList from './components/TodoList';
import ShiftList from './components/ShiftList';
import MyForm from './components/MyForm';



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
      <ShiftList/>
    
      <MyForm/>
    
    </div>
  );
};

export default App;
