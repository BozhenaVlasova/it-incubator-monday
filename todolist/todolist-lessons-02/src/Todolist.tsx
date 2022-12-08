import React, {useState} from 'react';
import {filterType} from "./App";

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id:number)=> void
}


export function Todolist(props: PropsType) {

    const [filterValue, setFilterValue] = useState<filterType>('All')

    let durshlag = props.tasks

    const taskFilter=(filterValue: filterType)=> {
        setFilterValue(filterValue)
    }

    if(filterValue === 'Active'){
        durshlag = props.tasks.filter(item => !item.isDone)
    }
    if(filterValue === 'Completed'){
        durshlag = props.tasks.filter(item => item.isDone)
    }


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {durshlag.map(item => {
            return (
                <li key={item.id}>
                    <input type="checkbox" checked={item.isDone}/>
                    <span>{item.title}</span>
                    <button onClick={ ()=> props.removeTask(item.id)}>✖</button>
                </li>
            )
            })}
        </ul>
        <div>
            <button onClick={()=>taskFilter('All')}>All</button>
            <button onClick={()=>taskFilter('Active')}>Active</button>
            <button onClick={()=>taskFilter('Completed')}>Completed</button>
        </div>
    </div>
}
