import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import './App.css';

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
    addTask: (title: string) => void
    checkBoxChange: (id: string, checkedValue: boolean) => void
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)
    let [buttonName, setButtonName] = useState<FilterValuesType>('all')

    const addTask = () => {
        if (title.trim()) {
            props.addTask(title.trim());
            setTitle("");
        }
        else {
            setError('Title is required')
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(null)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask();
        }
    }

    const onAllClickHandler = () => {props.changeFilter("all"); setButtonName('all')};
    const onActiveClickHandler = () => {props.changeFilter("active"); setButtonName('active')};
    const onCompletedClickHandler = () => {props.changeFilter("completed"); setButtonName('completed')};

    const onChangeCheckboxHandler = (id: string, event: boolean) => {
        props.checkBoxChange(id,event)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title} className={error ? 'error' : ''}
                   onChange={ onChangeHandler }
                   onKeyPress={ onKeyPressHandler }
            />
            <button onClick={addTask}>+</button>
            {error && <div className={'error-message'}>{error}</div>}
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    // const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
                    //     props.checkBoxChange(t.id,event.currentTarget.checked)
                    // }

                    const onClickHandler = () => props.removeTask(t.id)
                    return <li key={t.id} className={t.isDone ? 'is-done' : ''}>
                        <input type="checkbox" checked={t.isDone} onChange={(event)=>onChangeCheckboxHandler(t.id,event.currentTarget.checked)}/>
                        <span>{t.title}</span>
                        <button onClick={ onClickHandler }>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={buttonName === 'all' ? 'active-filter' : ''} onClick={ onAllClickHandler }>All</button>
            <button className={buttonName === 'active' ? 'active-filter' : ''} onClick={ onActiveClickHandler }>Active</button>
            <button className={buttonName === 'completed' ? 'active-filter' : ''} onClick={ onCompletedClickHandler }>Completed</button>
        </div>
    </div>
}
