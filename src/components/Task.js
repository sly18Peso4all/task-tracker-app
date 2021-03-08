import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <article
      className={`task ${task.reminder ? "reminder" : " "}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.termin}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />{" "}
      </h3>
      <p>{task.date}</p>
    </article>
  );
};

export default Task;
