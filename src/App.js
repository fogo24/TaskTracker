import Header from "./components/Header";
import Task from "./components/Task";
import { useState } from "react";
import AddTask from "./components/AddTask";
import "./index.css";
const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "fogo is a boy",
      day: "01",
      reminder: true,
    },
    {
      id: 2,
      text: "essien is tall",
      day: "02",
      reminder: false,
    },
    {
      id: 3,
      text: "bontu is wasted",
      day: "03",
      reminder: false,
    },
    {
      id: 4,
      text: "iyare is 4th",
      day: "04",
      reminder: true,
    },
    {
      id: 5,
      text: "quincy na kagawa",
      day: "05",
      reminder: false,
    },
  ]);

  //DELETE TASK
  const deleteTask = (id) => {
    setTasks(tasks.filter((fogo) => fogo.id !== id));
  };

  //TOGGLE REMINDER
  const toggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  //ADD TASK
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header
        title="Fogo"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAddTask={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Task tasks={tasks} onDelete={deleteTask} onToggle={toggle} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
};

export default App;
