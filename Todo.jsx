import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid' // Import UUID
import { toast } from 'react-toastify'


function Todo() {
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)


  //  Add Task (Create)
  const addTask = () => {
    if (!task.trim()) {
      toast.error('Task cannot be empty!')
      return
    }


    const newTask = { id: uuidv4(), name: task }
    setTasks([...tasks, newTask])
    setTask('')
    toast.success('Task added successfully!')
  }


  //  Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id))
    toast.error('Task deleted!')
  }


  //  Edit Task (Prepare update)
  const editTask = (id) => {
    const foundTask = tasks.find((t) => t.id === id)
    setTask(foundTask.name)
    setIsEditing(true)
    setEditId(id)
  }


  //  Update Task
  const updateTask = () => {
    if (!task.trim()) {
      toast.error('Task cannot be empty!')
      return
    }


    setTasks(tasks.map((t) => (t.id === editId ? { ...t, name: task } : t)))
    setTask('')
    setIsEditing(false)
    setEditId(null)
    toast.info('Task updated successfully!')
  }


  return (
    <div className='container mt-4'>
      <h2 className='mb-3 text-center'>Todo List</h2>


      {/* Input Section */}
      <div className='d-flex'>
        <input
          type='text'
          className='form-control me-2'
          placeholder='Enter task'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        {isEditing ? (
          <button className='btn btn-warning' onClick={updateTask}>
            Update
          </button>
        ) : (
          <button className='btn btn-success' onClick={addTask}>
            Add Task
          </button>
        )}
      </div>


      {/* Task List */}
      <ul className='list-group mt-3'>
        {tasks.length === 0 && (
          <li className='list-group-item text-center'>No tasks available</li>
        )}
        {tasks.map((t) => (
          <li
            key={t.id}
            className='list-group-item d-flex justify-content-between align-items-center'
          >
            {t.name}
            <div>
              <button
                className='btn btn-primary btn-sm me-2'
                onClick={() => editTask(t.id)}
              >
                Edit
              </button>
              <button
                className='btn btn-danger btn-sm'
                onClick={() => deleteTask(t.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}


export default Todo