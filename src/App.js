import './App.css';
import { useState } from 'react';

function App() {

  const [todoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const changeHandeler = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      complete: false
    }
    setToDoList([...todoList, task]);
  }

  const deleteTask = (id) => {
    setToDoList(todoList.filter((task) => task.id != id))
  }

  return (
    <div className='App'>
      <div className='addTask'>
        <input type='text' onChange={changeHandeler} />
        <button onClick={addTask}>Add addTask</button>
      </div>
      <div className='list'>
        {todoList.map((x) => {
          return <div>
            <h1>{x.taskName}</h1>
            <button onClick={() => deleteTask(x.id)}>X</button>
          </div>
        })}
      </div>
    </div>
  );
}



export default App;
