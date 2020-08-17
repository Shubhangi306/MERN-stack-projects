import React from'react';
import './display.css';

const Display =({todoItems,deleteItem,crossItem})=>{
    //console.log(todoItems);
    const itemList =todoItems.length? todoItems.map((task, index) => {
        const{Item}=task
        return(
            <div className='item' key={task.id}>
                <div className='task'>
                    <span>{index+1}.</span><p className='inside-task' style={{textDecoration: task.crossed? 'line-through' :'none'}}>{Item}</p>
                    <button className='cross-button' onClick={()=>{crossItem(task.id)}} >Done</button>
                    <button className='delete-button' onClick={() => {deleteItem(task.id)}}>Delete</button>
                </div>
            </div>
        )

    }): <p className='empty-list'>Nothing to do!!!</p>
    return(
    <div className='display-item'>
        {itemList}
    </div>
    )
};

export default Display;