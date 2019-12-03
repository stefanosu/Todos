import React from 'react';
import './App.css';
import Category from './Category.js'
import Form from './Form'

class App extends React.Component {

    state = {
      categories: []
  }

    componentDidMount() {
        fetch('http://localhost:3000/categories', {
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
      console.log(data);
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

    showCategories = () => {
      console.log(this.state.categories)
      if(this.state.categories.length > -1) {
        return this.state.categories.map(category =>  { 
        return <Category key={category.id} category={category}  
        submitted={this.newCategory}
        newToDo={this.newToDo}/>
      })
        } else {
          return 'isLoading...'
        }
    }

      newToDo = (data, id) => {
        console.log(data, id)
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


          // alert(`hi from toodos ${data} my id is ${id}`)
          // console.log(data, id);
          
      }

      render() { 
        console.log(this.state)
        return ( 
          <div className="wrapper">
            <div className="header">
              <h1>Stefo Todo List</h1>
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