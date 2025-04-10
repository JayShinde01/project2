import React, { useState } from "react";
import "./todo.css";

function Todo() {
  const [taskList, setTaskList] = useState([]);
  const [list, setList] = useState("");

  function handleClick() {
    if (list.trim() !== "") {
      setTaskList([...taskList, { text: list, completed: false }]);
      setList("");
    }
  }

  function handleInput(e) {
    setList(e.target.value);
  }

  function handleDelete(index) {
    const arr = taskList.filter((_, i) => i !== index);
    setTaskList(arr);
  }

  function handleCheck(index) {
    const updatedList = taskList.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setTaskList(updatedList);
  }

  return (
    <div className="box">
      <input type="text" onChange={handleInput} value={list} />
      <button onClick={handleClick} id="addbtn">
        Add Task
      </button>
      <div className="container">
        {taskList.length === 0 ? (
          <h1>Empty...</h1>
        ) : (
          <ul>
            {taskList.map((item, index) => (
              <li
                key={index}
                className={`para ${item.completed ? "checked" : ""}`}
                onClick={() => handleCheck(index)}
              >
                {item.text}
                <button
                  id="delbtn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(index);
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Todo;
