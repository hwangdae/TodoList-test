import React from "react";
import uuid from 'react-uuid';
import { useState } from "react";

function Input({todoList,setTodoList}) {

    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");

    return (<div>
        <form onSubmit={(event) => {
            event.preventDefault();
            const newTodo = {
                id: uuid(),
                title,
                content,
                isDone: false
            }
            setTodoList([...todoList, newTodo])
            setTitle("")
            setContent("")
        }}>
            <input value={title} onChange={(event) => {
                setTitle(event.target.value)
            }}></input>
            <input value={content} onChange={(event) => {
                setContent(event.target.value)
            }}></input>
            <button>작성하기</button>
        </form>
    </div>)
}

export default Input