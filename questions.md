### How long did you spend on the coding test? 
* it took around 1 day of time 
### What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
User context feature which is cool to manage state in small application
`
import React, { createContext, useContext, useMemo, useState } from 'react';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [completionFilter, setCompletionFilter] = useState('all');
  const [editingTask, setEditingTask] = useState(null);
  const [AddTaskModal, setAddTaskModal] = useState(false);

  const handleAddTaskModal = () => {
    setEditingTask(null);
    setAddTaskModal(true);
  };

  const handleCloseAddTaskModal = () => {
    setAddTaskModal(false)
  }

  const addTask = (task) => {
    const newTask = { ...task, id: new Date().getTime().toString() };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    sessionStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
  };

  const editTask = (editedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === editedTask.id ? editedTask : task
    );
    setTasks(updatedTasks);
    sessionStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setEditingTask(null);
  };

  const deleteTask = (id) => {
    const taskToDelete = tasks.find((task) => task.id === id);
    if (taskToDelete) {
      const updatedTasks = tasks.filter((task) => task.id !== id);
      setTasks(updatedTasks);
      sessionStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
  };

  const filterTasks = (task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPriority = priorityFilter === 'all' || task.priority === priorityFilter;

    const matchesCompletion = completionFilter === 'all' || task.status === completionFilter;

    return matchesSearch && matchesPriority && matchesCompletion;
  };

  const upcomingTasks = useMemo(() => tasks.filter(
    (task) => filterTasks(task) && new Date(task.dueDate) > new Date() && task.status !== 'completed'
  ), [tasks]);

  const overdueTasks = useMemo(() => tasks.filter(
    (task) => filterTasks(task) && new Date(task.dueDate) < new Date() && task.status !== 'completed'
  ), [tasks]);

  const completedTasks = useMemo(() => tasks.filter(
    (task) => filterTasks(task) && task.status !== 'completed'
  ), [tasks]);
  
  const allTasks = useMemo(() => tasks.filter(
    (task) => filterTasks(task) 
  ), [tasks]);
 

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        editTask,
        deleteTask,
        searchTerm,
        priorityFilter,
        completionFilter,
        setPriorityFilter,
        setSearchTerm,
        setCompletionFilter,
        filterTasks,
        editingTask,
        setEditingTask,
        AddTaskModal, setAddTaskModal,
        handleAddTaskModal,
        handleCloseAddTaskModal,
        upcomingTasks,
        overdueTasks,
        completedTasks,
        allTasks
      }}
    >
      {children}
    </TaskContext.Provider>

  );
}

export const useTaskContext = () => {
  return useContext(TaskContext);
}
`
### How would you track down a performance issue in production? Have you ever had to do this?
I have used useMemo and callaback to improve performance below are code


` const upcomingTasks = useMemo(() => tasks.filter(
    (task) => filterTasks(task) && new Date(task.dueDate) > new Date() && task.status !== 'completed'
  ), [tasks]);

  const overdueTasks = useMemo(() => tasks.filter(
    (task) => filterTasks(task) && new Date(task.dueDate) < new Date() && task.status !== 'completed'
  ), [tasks]);

  const completedTasks = useMemo(() => tasks.filter(
    (task) => filterTasks(task) && task.status !== 'completed'
  ), [tasks]);
  
  const allTasks = useMemo(() => tasks.filter(
    (task) => filterTasks(task) 
  ), [tasks]);`

`  const handleDeleteConfirm = useCallback((taskToDelete) => {
    deleteTask(taskToDelete.id);
    setIsDeleteModalOpen(false);
    setTaskToDelete(null);
  }, [taskToDelete]);`

### If you had more time, what additional features or improvements would you consider adding to the task management application?
If I have more time then I can add unit test cases and localization application as well as I can multiple features like as below

* Task assignment
* Log hours from user in task
* Create Project and add task under it
