import React from 'react';
import './styles.css'
import { Row, Col } from "react-bootstrap"
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
// @material-ui/core components

import Checkbox from "@material-ui/core/Checkbox";

// core components
import { useState } from 'react';
import { useEffect } from 'react';



export default function TaskList() {
    
    const [todo, setTodo] = useState(""); //this is the list of items wrtten in input
    const [todoList, setTodoList] = useState(() => {
        return JSON.parse(localStorage.getItem('todoList')) || []
    }) //sets useState as information within localStorage : set as empty array

    useEffect(() => {
        if (todoList.length > 0) {
            localStorage.setItem('todoList', JSON.stringify(todoList))
        }
    }, [todoList]) //useffect that renders evertime input is added. todolist > 0 adds to LocalStorage

    
    const submitButton = () => {
        setTodoList([...todoList, {id: Math.floor(Math.random() * 1000), task: todo }]);
        console.log(todoList)
    }

    const preventDefault = (e) => {
        e.preventDefault();
        setTodo('');

    }

    const deleteHandler = (id) => {
        const newList = todoList.filter((item)=> item.id !== id);
        setTodoList(newList);
    }

    

  return (
    <div>
        <div className="todo-container" style={{overflowY: "scroll"}}>

            {todoList.map((object) => (
                <div className='box' key={object.id}>
                    <Row>
                        <Col className='checkbox'><Checkbox /></Col>
                        <Col xs={7} className="context">{object.task}</Col>

                        <Col className='editDeleteButtons'>

                                <button id="EditButton">
                                    <BiEditAlt />
                                </button>

                                <button id="DeleteButton"
                                    onClick={() => {deleteHandler(object.id)}}>
                                    <MdDeleteForever />
                                    
                                </button>
                                
                        </Col>
                    </Row>
                    


                </div>
            ))}



        </div>

        <div className='input'>
            <form className='form' onSubmit={preventDefault}>
                <input id="inputBox" type="text" placeholder='Enter a new task' value={todo} onChange={(e) => {setTodo(e.target.value)}}/>
                <button class="btn btn-outline-primary" onClick={submitButton}>submit</button>
            </form>
            
        </div>
    </div>

  )
}
