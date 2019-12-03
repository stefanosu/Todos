import React from 'react'
import Todo from './Todo.js'
import Form from './Form.js'

class Category extends React.Component {
    
    // createNewInstance = (data) => {
    //     this.props.newCategory(data)
    // }

    createNewTodo = data => {
        this.props.newToDo(data, this.props.category.id)
    }
    
    mapOverTodos = () => {
        return this.props.category.todos.map(todo => {
            return <Todo key={todo.id} todo={todo} 
            />
        })
    }
    
    render() { 
        console.log(this.props.category.id);        
        return ( 
            <div className="category-div"> 
                <div className="category-header">
                    <h3>{this.props.category.title}</h3>
                </div>
                <div>
                    {this.mapOverTodos()}
                </div>

                <div>
                    <Form prompt='Todos'  
                    submitted={this.createNewTodo}  />
                </div>
            </div> 
        );
    }
}

export default Category;
