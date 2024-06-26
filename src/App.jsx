import { useState } from "react";
import "./styles.css";

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])
  
  function handleSubmit(e)
  {
    e.preventDefault()

  }
  
  return (
  <>
     <form onSubmit = {handleSubmit} className = "new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input value = {newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item"/>
      </div>

      <button className="btn">Add</button>
    </form>
    <h1 className="header">Todo List</h1>
    <ul className="">
      <li>
        <label htmlFor="">
          <input type="checkbox" />
          Item 1
          <button className="btn btn-danger">Delete</button>
        </label>
      </li>
    </ul>
  </>
  )
}