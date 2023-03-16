import { useState } from 'react'
import './App.css'
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App() {
   const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };


  return (
    <div className="App flex justify-center gap-2 flex-col items-center h-screen w-full text-2xl p-2 sm:p-8 font-sans text-gray-100 bg-black">

      <h1 className='mt-4 mb-12 text-3xl'>To-Do List</h1>
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList list={todos} remove={deleteTodo} />
    </div>
  )
}



export default App
