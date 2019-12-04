import React from 'react'
import Todo from './Todo.js'
import Form from './Form.js'

class Category extends React.Component {
    


    createNewTodo = data => {
        this.props.newToDo(data, this.props.category.id)
    }
    
    mapOverTodos = () => {
        return this.props.category.todos.map(todo => {
            return <Todo key={todo.id} todo={todo}
            removeTodo={this.props.removeTodo}
            />
        })
    }
    

        handleBtnClick = e => {  
            let id = this.props.category.id
            this.props.removeCategory(id)
        }
            

        

    render() { 
        console.log(this.props.removeTodo);        
        return ( 
            <div className="category-div"> <button onClick={this.handleBtnClick} className="category-btn">Delete</button>
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
