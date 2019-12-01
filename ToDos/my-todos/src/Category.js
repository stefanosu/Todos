import React from 'react'
import Todo from './Todo.js'
import Form from './Form.js'

class Category extends React.Component {
    
    
    mapOverTodos = () => {
        return this.props.category.todos.map(todo => {
            return <Todo key={todo.id} todo={todo} />
        })
    }
    
    render() { 
        console.log(this.props);        
        return ( 
            <div className="category-div"> 
                <div className="category-header">
                    <h3>{this.props.category.title}</h3>
                </div>
                <div>
                    {this.mapOverTodos()}
                </div>
                <div>
                    <Form prompt='Todos' submitted={(text) => console.log(text)} />
                </div>
            </div> 
        );
    }
}

export default Category;
