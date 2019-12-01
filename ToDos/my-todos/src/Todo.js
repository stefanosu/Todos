import React from 'react'


const Todo = (props) => {
        return ( 
        <React.Fragment>
                <p>{props.todo.name}</p>
                {console.log(props)}
        </React.Fragment> 
        );
}

export default Todo;