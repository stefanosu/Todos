import React from 'react'

const Todo = (props) => {


        const handleTodo = () => {
        // console.log(props.todo.id);
        let ID = props.todo.id 
        props.removeTodo(ID)
        }

        console.log(props.removeTodo);        

        return ( 
        <React.Fragment>
                <div className='toDo-item'>
                        <p>{props.todo.name}</p> <button onClick={handleTodo}>Delete</button>
                </div>
        </React.Fragment> 
        );
}

export default Todo;