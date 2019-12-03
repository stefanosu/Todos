import React from 'react'
import Form from './Form'

const Todo = (props) => {


        return ( 
        <React.Fragment>
                <p>{props.todo.name}</p>
                {console.log(props)}
        </React.Fragment> 
        );
}

export default Todo;