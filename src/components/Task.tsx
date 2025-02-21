import { ITask } from "./types";

function Task(task: ITask) {
    return (
        <li>
            <label>
                <input  type="checkbox" /> 
                {task.title}
            </label>
            
        </li>
    )
}

export default Task;