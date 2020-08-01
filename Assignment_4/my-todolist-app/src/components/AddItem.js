import React from 'react';
import './display.css'

class Addform extends React.Component {
    state = {
        Item:''
    }

    handleChange = (event) => {
        this.setState({
           Item: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addItem(this.state);
        this.setState({
            Item:''
        })
    }

    render(){
        return(
            <div className='for-form' onSubmit={this.handleSubmit}>
                <form className='form-style'>
                    <label  htmlFor='todotask' className='item-label' >To&nbsp;do:</label>
                    <input type='text' id='todotask' placeholder='Type here...' className='todo-task' onChange={this.handleChange} value={this.state.Item}></input>
                    <input type='submit' value='Add' className='add-button'></input>
                </form>
            </div>
            
        )
    }

    }
   

export default Addform;