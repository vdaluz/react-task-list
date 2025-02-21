import { ITask } from "./types";

interface TaskProps {
  task: ITask;
  onChecked: (index: number, checked: boolean) => void;
}

const Task: React.FC<TaskProps> = ({ task, onChecked }) => {
  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={(e) => onChecked(task.id, e.target.checked)}
      />
      <span>{task.title}</span>
    </div>
  );
};

export default Task;
