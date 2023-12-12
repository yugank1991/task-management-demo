// TaskForm.js
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useTaskContext } from './TaskContext';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  dueDate: Yup.date().required('Due Date is required'),
  priority: Yup.string().required('Priority is required'),
  status: Yup.string().required('Status is required'),
});

function TaskForm({ onHide }) {
  const { addTask, editTask, editingTask } = useTaskContext();

  return (
    <Formik
      initialValues={{
        id: editingTask ? editingTask.id : '',
        title: editingTask ? editingTask.title : '',
        description: editingTask ? editingTask.description : '',
        dueDate: editingTask ? editingTask.dueDate : '',
        priority: editingTask ? editingTask.priority : 'low',
        status: editingTask ? editingTask.status : 'incomplete',
        isEditing: Boolean(editingTask),
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        if (values.isEditing) {
          editTask(values);
        } else {
          addTask(values);
          resetForm()
        }
        onHide();
      }}
    >
      {({ handleSubmit, setFieldValue,resetForm }) => (
        <Form onSubmit={handleSubmit} className='m-2 p-3'>
          <Form.Group controlId="title">
          <Form.Label className='mt-3'>Title:</Form.Label>
            <Field type="text" placeholder="Title"
              aria-label="Title" name="title" className="form-control" />
            <ErrorMessage name="title" component="div" className="text-danger" />
          </Form.Group>

          <Form.Group controlId="description">
          <Form.Label className='mt-3'>Description:</Form.Label>
            <Field as="textarea" name="description" placeholder="Description"
              aria-label="Description" className="form-control " />
            <ErrorMessage name="description" component="div" className="text-danger" />
          </Form.Group>

          <Form.Group controlId="dueDate">
          <Form.Label className='mt-3'>Due Date:</Form.Label>
            <Field type="date" placeholder="Due Date"
              aria-label="Due Date" name="dueDate" min={new Date().toISOString().split('T')[0]} className="form-control " />
            <ErrorMessage name="dueDate" component="div" className="text-danger" />
          </Form.Group>

          <Form.Group controlId="priority">
          <Form.Label className='mt-3'>Priority:</Form.Label>
            <Field as="select" placeholder="Priority"
              aria-label="Priority" name="priority" className="form-control " >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </Field>
            <ErrorMessage name="priority" component="div" className="text-danger" />
          </Form.Group>

          <Form.Group controlId="status">
          <Form.Label className='mt-3'>Status:</Form.Label>
            <Field as="select" placeholder="Status"
              name="status" className="form-control " >
              <option value="incomplete">Incomplete</option>
              <option value="completed">Complete</option>
            </Field>
            <ErrorMessage name="status" component="div" className="text-danger" />
          </Form.Group>
          <div className="text-center">
            <Button variant="success" type="submit" className="mt-3 m-1 w-100">
              {editingTask ? 'Edit Task' : 'Add Task'}
            </Button>
            <Button variant="primary" className="ml-2 mt-3 m-1 w-100" onClick={() => resetForm()}>
              Clear
            </Button>
          </div>

        </Form>
      )}
    </Formik>
  );
}

export default TaskForm;
