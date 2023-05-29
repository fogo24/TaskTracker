import React from "react";
import TaskImport from "./TaskImport";

const Task = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((fogo) => (
        <TaskImport
          key={fogo.id}
          tasks={fogo}
          onDel={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Task;
