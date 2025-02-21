import { useState } from "react";
import { ITask } from "./types";
import Task from "./Task";
import TaskInput from "./TaskInput";

const sampleTasks: ITask[] = [
    {
        id: 1,
        title: "Task 1",
        completed: false,
    },
    {
        id: 2,
        title: "Task 2",
        completed: true,
    },
];

function TaskList() {
    const [tasks, setTasks] = useState<ITask[]>(sampleTasks);

  return (
    <>
      <TaskInput />
      {tasks.map((task: ITask) => (
        <Task key={task.id} {...task} />
      ))}
    </>
  );
}

export default TaskList;