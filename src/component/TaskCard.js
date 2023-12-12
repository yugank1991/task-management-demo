import React from 'react';
import { Dropdown, } from 'react-bootstrap';
import { format } from 'date-fns';
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      ref={ref}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      <span className="threedots" />
    </a>
  ));
  


const TaskCard = ({ task, index, handleUpdateClick, handleDeleteClick }) => {

    const getPriorityBadge = (priority) => {
        switch (priority) {
            case 'high':
                return <span className="badge badge-pill bg-soft-danger text-danger me-2">
                    {priority}
                </span>;
            case 'medium':
                return <span className="badge badge-pill bg-soft-success text-success me-2">
                    {priority}
                </span>;
            case 'low':
                return <span className="badge badge-pill bg-soft-info text-info me-2">
                    {priority}
                </span>;
            default:
                return <span className="badge badge-pill bg-soft-secondary text-secondary me-2">
                    {priority}
                </span>;
        }
    };

    const getStatusBadge = (status) => {
        switch (status) {
            case 'completed':
                return <span className="badge badge-pill bg-soft-success text-success me-2">
                    {status}
                </span>;
            case 'incomplete':
                return <span className="badge badge-pill bg-soft-danger text-danger me-2">
                    {status}
                </span>;
            default:
                return <span className="badge badge-pill bg-soft-secondary text-secondary me-2">
                    {status}
                </span>
        }
    };

    return (
        <div className="col-xl-3 col-sm-6 col-12" key={index}>
            <div className="card shadow border-0">
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <span className="h4 font-bold mb-5">{task.title}</span>
                            <span className="h6 font-semibold text-muted text-sm d-block mt-2">{task.description}</span>
                        </div>
                        <div className="col-auto">
                            <div>
                                <Dropdown >
                                    <Dropdown.Toggle as={CustomToggle} />
                                    <Dropdown.Menu size='sm' title=''>
                                        <Dropdown.Item onClick={() => handleUpdateClick(task)}><CiEdit className='m-1' /> Update</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleDeleteClick(task)}><MdDeleteOutline className='m-1' />Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 mb-0 text-sm">
                    </div>
                    <div className="mt-2 mb-0 text-sm d-flex justify-content-between">
                        <span> {getStatusBadge(task.status)}
                            {getPriorityBadge(task.priority)}</span>
                        <div>
                            <span className="p font-bold text-nowrap text-xs text-muted">Due Date: {format(new Date(task.dueDate), 'dd/MMM/yyyy')}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default TaskCard;
