import React from 'react'


class Form extends React.Component {
    
    state = {  
        title: ''
    }

    handleChange = (e) => {
        this.setState({title: e.target.value})
    }
    
    handleFormSubmit = (e) => {
        e.preventDefault()
        const title = this.state.title 
        this.props.submitted(title)
        
    }
    
                

                
render() { 
    // console.log(this.props)
    const prompt = this.props.prompt;
    return (  
        <form onSubmit={this.handleFormSubmit}>
            <label>
                {prompt ? `${prompt}: ` : null}
                <input type='text' name= 'title' value={this.state.value} onChange={this.handleChange}></input>
            </label>
                <input type='submit' value='submit'></input>
        </form> );
    }
}

export default Form;