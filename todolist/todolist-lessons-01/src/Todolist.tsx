import React from "react";

type TodolistPropsType={
    title: string
    tovar?: number
    tasks: Array<TaskType>
}

type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

export const Todolist = (props: TodolistPropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <h3>{props.tovar}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map(item => {
                    return (
                        <li><input type="checkbox" checked={item.isDone}/> <span>{item.title}</span></li>
                    )
                })}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}