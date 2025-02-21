import { FC, useState } from "react";

interface TaskInputProps {
  onSubmit: (name: string) => void;
}

const TaskInput: FC<TaskInputProps> = ({ onSubmit }) => {
  const [taskTitle, setTaskTitle] = useState("Enter a task name");
  return (
    <div className="task-input">
      <label>
        <input
          name="taskInput"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
      </label>
      <button type="button" onClick={() => onSubmit(taskTitle)}>
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
