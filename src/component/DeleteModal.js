import React from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { MdDeleteOutline } from 'react-icons/md';


const DeleteModal = ({ taskToDelete, isDeleteModalOpen, handleDeleteCancel, handleDeleteConfirm }) => {
  return (
    <Modal show={isDeleteModalOpen} onHide={handleDeleteCancel}>
      <Modal.Header closeButton>
        <Modal.Title><MdDeleteOutline /> Delete Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete the task titled "{taskToDelete?.title}"?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleDeleteCancel}>
          No
        </Button>
        <Button variant="danger" onClick={()=>handleDeleteConfirm(taskToDelete)}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteModal;