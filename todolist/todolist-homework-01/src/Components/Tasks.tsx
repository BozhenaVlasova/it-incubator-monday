import {DataType} from "../App";

type ArrayType = {
    data: DataType
}

export const Tasks = (props: ArrayType) => {
    return (
        <>
            <h1>{props.data.title}</h1>
            <ul>
                {props.data.tasks.map(item => {
                    return (
                        <li>
                            <input type={"checkbox"} checked={item.isDone}/>
                            <span> {item.taskId}</span>
                            <span> {item.title}</span>
                        </li>)
                })}
            </ul>
            <ul>
                {props.data.students.map(item => <li>{item}</li>)}
            </ul>
        </>
    )
}