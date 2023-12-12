import React from 'react';
import Modal from 'react-bootstrap/Modal';
import TaskForm from './TaskForm';
import { useTaskContext } from './TaskContext';


const AddEditFormModal = ({ show, onHide }) => {
  const { editingTask } = useTaskContext();
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title className="text-center w-100">
          {editingTask ? "Edit Task" : "Add Task"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TaskForm task={editingTask} onHide={onHide}></TaskForm>
      </Modal.Body>
    </Modal>
  )
}

export default AddEditFormModal;