import { FC, useState } from "react";
import { ITask } from "./types";
import Task from "./Task";
import TaskInput from "./TaskInput";
import './TaskList.css';

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

const TaskList: FC = () => {
  const [tasks, setTasks] = useState<ITask[]>(sampleTasks);

  const handleChecked = (index: number, checked: boolean) => {
    const newTasks = [...tasks];
    newTasks[index - 1].completed = checked;
    setTasks(newTasks);
  };

  const handleNewTask = (title: string) => {
    const newTasks = [...tasks];
    // We assume the tasks are always sorted by id
    newTasks.push({
      id: tasks[tasks.length - 1]?.id + 1,
      title: title,
      completed: false,
    });
    setTasks(newTasks);
  };

  // Using task id as the key here instead of index,
  // index as a key in list items can cause performance issues when adding new items to the list
  // https://legacy.reactjs.org/docs/reconciliation.html#recursing-on-children
  return (
    <div className="task-list">
      <TaskInput onSubmit={handleNewTask} />
      {tasks.map((task: ITask) => (
        <Task key={task.id} task={task} onChecked={handleChecked} />
      ))}
    </div>
  );
};

export default TaskList;
