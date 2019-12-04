import React from 'react';
import './App.css';
import Category from './Category.js'
import Form from './Form'

class App extends React.Component {

    state = {
      categories: []
  }

    componentDidMount() {
        fetch('http://localhost:3000/getCategories', {
            method: 'GET',
            headers: {
            'Content-type': 'application/json', 
            }
        })
        .then(resp=>resp.json())
        .then(categories => 
            this.setState({
            categories: categories
        }))
    }
    
    
    newCategory = (data) => {
      // console.log(data);
      fetch('http://localhost:3000/newCategories',{
        method: 'POST', 
        headers: {
          'Content-type': 'application/json',
        }, 
        body: JSON.stringify({
          title: data 
        }),
      })
      .then(resp => resp.json())
      .then(data => 
        this.setState({
          categories: data  
        }))
      }        
      
          // handleSubmit(e) {
          //   e.preventDefault();
          //   const city = this.state.city;
          //   this.props.onSearchTermChange(city);
          //   this.setState({
          //     city: ''
          //   });

    showCategories = () => {
      // console.log(this.state.categories)
        return this.state.categories.map(category =>  { 
        return <Category key={category.id} category={category}  
        submitted={this.newCategory}
        newToDo={this.newToDo}
        removeCategory={this.removeCategory}
        removeTodo={this.removeTodo}/>
        // updateCategory={this.updateCategory}/>
      })}
    


    removeCategory = (id) => {   
      console.log(`Im the delete btn this is my id ${id}`)
      // let id = this.props.category.id
      fetch(`http://localhost:3000/removeCategories/${id}`, {
          method: 'DELETE' 
          })
          .then(resp => resp.json())
          .then(categoryData => {
              this.setState({
                  categories : categoryData
              })
          })        
      }
  
      // updateCategory = (id) => {
      //   console.log(`update this category${id}`)
      //   fetch(`http://localhost:3000/updateCategories/${id}`, {
      //       method: 'PATCH',
      //       headers: {
      //         'Content-type': 'application/json'
      //       }, 
      //         body: JSON.stringify({

      //         })
      //   })
      // }


      newToDo = (data, id) => {
        // console.log(data, id)
        fetch('http://localhost:3000/newTodos', {
            method: 'POST',
            headers: {
              'Content-type' : 'application/json'
            }, 
              body: JSON.stringify({
                name: data,
                category_id: id
              }),
          }) 
            .then(resp => resp.json())
            .then(data => {
              this.setState({
                categories: data 
              })
            })
      }


      removeTodo = (ID) => {
        fetch(`http://localhost:3000/removeTodos/${ID}`,{
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(todoData => {
          this.setState({
            categories: todoData
          })
        })
      }
    
      
      render() { 
        // console.log(this.state)
        // if(this.state.categories.length > 0 ){
        //   throw new Error('category component crashed!')
        // } return <React.Fragment>{this.state.categories} </React.Fragment>
        return ( 
          <div className="wrapper">
            <div className="header">
              <h1>Todo List</h1>
            </div>
            <div className="form">
                <Form submitted={this.newCategory} prompt="Categories"/>
            </div>
            <div className="container">
            {this.showCategories()}
            </div>
            </div> 
          );
      }
  }


      export default App; 