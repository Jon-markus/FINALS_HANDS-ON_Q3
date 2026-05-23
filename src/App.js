import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./features/TaskSlice";
import "./App.css";

function App() {
  const [task, setTask] = useState("");

  const dispatch = useDispatch();

  const tasks = useSelector(
    (state) => state.tasks.taskList
  );

  const handleAddTask = () => {
  
    if (task.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }

    dispatch(addTask(task));
    setTask("");
  };

  return (
    <div className="container">
      <h1>Task Manager App</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) =>
            setTask(e.target.value)
          }
        />

        <button onClick={handleAddTask}>
          Add Task
        </button>
      </div>

      <h2>Task List</h2>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;