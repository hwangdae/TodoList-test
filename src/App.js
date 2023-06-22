import { useState } from 'react';
import './App.css';
import uuid from 'react-uuid';
import Input from './Input';
import TodoList from './TodoList';

function App() {



  const [todoList, setTodoList] = useState([
    { id: uuid(), title: "제목1", content: "내용1", isDone: false },
    { id: uuid(), title: "제목2", content: "내용2", isDone: true },
    { id: uuid(), title: "제목3", content: "내용3", isDone: true },
    { id: uuid(), title: "제목4", content: "내용4", isDone: false },
  ]);

  return (
    <>
      <Input todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} isDone={false}/>
      <TodoList todoList={todoList} setTodoList={setTodoList} isDone={true}/>
    </>
  );
}

export default App;
