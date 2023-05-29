import React from "react";
import { FaTimes } from "react-icons/fa";

const TaskImport = ({ tasks, onDel, onToggle }) => {
  return (
    <div
      className={`task ${tasks.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(tasks.id)}
    >
      <h3>
        {tasks.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDel(tasks.id)}
        />
      </h3>
      <p>{tasks.day}</p>
    </div>
  );
};

export default TaskImport;
