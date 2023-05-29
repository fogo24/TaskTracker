import Button from "./Button";
import React from "react";

const Header = ({ title, onAdd, showAddTask }) => {
  return (
    <header className="header">
      <h1>{title}'s ToDo List</h1>
      <Button
        color={showAddTask ? "red" : "green"}
        text={showAddTask ? "CLOSE" : "ADD"}
        onClick={onAdd}
      />
    </header>
  );
};

export default Header;
