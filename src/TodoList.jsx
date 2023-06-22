import React from "react";

function TodoList({todoList,setTodoList,isDone}){
    return(<div>
        <h1>{isDone ? "완료 목록" : "할일 목록"}</h1>
        <div>
          {todoList.filter((todo) => {
            return todo.isDone === isDone
          }).map((todo) => {
            return (<div style={{
              border: "solid 1px black",
              padding: "10px",
              margin: " 10px 0px"
            }}>
              <p>{todo.id}</p>
              <h2>{todo.title}</h2>
              <h3>{todo.content}</h3>
              <p>{todo.isDone.toString()}</p>
              <button onClick={() => {
                const delTodo = todoList.filter((item) => {
                  return item.id !== todo.id;
                })
                setTodoList(delTodo)
              }}>삭제</button>
              <button onClick={() => {
                setTodoList(todoList.map((item) => {
                  if (item.id === todo.id) {
                    return { ...item, isDone: !item.isDone }
                  } else {
                    return item
                  }
                }))
              }}>{isDone ? "완료 취소":"완료"}</button>
            </div>)
          })}
        </div>
      </div>)
}

export default TodoList