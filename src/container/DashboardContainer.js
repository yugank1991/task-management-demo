import React, { useCallback, useState } from 'react';
import { useTaskContext } from '../component/TaskContext';
import AddEditFormModal from '../component/AddEditFormModal';
import TaskTabs from '../component/TaskTabs';
import DeleteModal from '../component/DeleteModal';

const DashboardContainer = () => {
  const {
    deleteTask,
    editingTask,
    setEditingTask,
    upcomingTasks,
    overdueTasks,
    completedTasks,
    allTasks
  } = useTaskContext();

  const tabs = [{
    eventKey: 'all',
    title: 'All Tasks',
    tasks: allTasks
  },
  {
    eventKey: 'upcoming',
    title: 'Upcoming Tasks',
    tasks: upcomingTasks
  },
  {
    eventKey: 'overdue',
    title: 'Overdue Tasks',
    tasks: overdueTasks
  },
  {
    eventKey: 'completed-tasks',
    title: 'Completed Tasks',
    tasks: completedTasks
  }]

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const handleUpdateClick = (task) => {
    setEditingTask(task);
  };

  const handleDeleteClick = (task) => {
    setTaskToDelete(task);
    setIsDeleteModalOpen(true);
  };


  const handleDeleteConfirm = useCallback((taskToDelete) => {
    deleteTask(taskToDelete.id);
    setIsDeleteModalOpen(false);
    setTaskToDelete(null);
  }, [taskToDelete]);


  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
    setTaskToDelete(null);
  };

  return (
    <>
      <AddEditFormModal show={!!editingTask} onHide={() => setEditingTask(null)} />
      <TaskTabs tabs={tabs} handleUpdateClick={handleUpdateClick} handleDeleteClick={handleDeleteClick} />
      <DeleteModal taskToDelete={taskToDelete} isDeleteModalOpen={isDeleteModalOpen} handleDeleteCancel={handleDeleteCancel} handleDeleteConfirm={handleDeleteConfirm} />
    </>
  );
}

export default DashboardContainer;
