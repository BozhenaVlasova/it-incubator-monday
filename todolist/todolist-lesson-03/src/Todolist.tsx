import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {Button} from "./Components/Button";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (inputValue: string) => void
}

export function Todolist(props: PropsType) {
    let [inputValue, setInputValue] = useState("")

    const addTaskHandler = () => {
        props.addTask(inputValue)
        setInputValue("")
    }

    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value)
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') addTaskHandler()
    }

    const removeTaskHandler = (tId: string) => {
        props.removeTask(tId)
    }

    // const changeFilterAll = () => {
    //     props.changeFilter("all")
    // }
    // const changeFilterActive = () => {
    //     props.changeFilter("active")
    // }
    // const changeFilterCompleted = () => {
    //     props.changeFilter("completed")
    // }

    const tsarChangeFilter = (value: FilterValuesType) => {
        props.changeFilter(value)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={inputValue} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
            {/*<button onClick={addTaskHandler}>+</button>*/}
            <Button name={'+'} callBack={addTaskHandler} />
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    // const removeTaskHandler = () => {
                    //     props.removeTask(t.id)
                    //     }
                    return (<li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <Button name={'x'} callBack={()=>removeTaskHandler(t.id)} />
                    </li>)}
                    )
            }
        </ul>
        <div>
            <Button name={'All'} callBack={()=> tsarChangeFilter('all')} />
            <Button name={'Active'} callBack={()=> tsarChangeFilter('active')} />
            <Button name={'Completed'} callBack={()=> tsarChangeFilter('completed')} />
        </div>
    </div>
}