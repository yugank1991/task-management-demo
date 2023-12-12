import React from "react";
import AddEditFormModal from "./AddEditFormModal";
import { useTaskContext } from "./TaskContext";

const NavbarSection = () => {
  const { searchTerm,
    priorityFilter,
    completionFilter,
    setPriorityFilter,
    setSearchTerm,
    setCompletionFilter,
    AddTaskModal,
    handleAddTaskModal,
    handleCloseAddTaskModal } = useTaskContext();

  return (<>
    <header className="bg-surface-primary border-bottom pt-6 pb-4">
      <div className="container-fluid">
        <div className="mb-npx">
          <div className="row align-items-center">
            <div className="col-sm-6 col-12 mb-4 mb-sm-0">
              <h4 className="h3 mb-0 ls-tight">Task Management</h4>
            </div>
            <div className="col-sm-6 col-12 text-sm-end">
              <div className="mx-n1">
                <a className="btn d-inline-flex btn-sm btn-neutral border-base mx-1">
                  <span className=" pe-2">
                    <i className="bi bi-search" />
                  </span>
                  <input
                    type="text"
                    placeholder="Search by title or description"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </a>
                <a className="btn d-inline-flex btn-sm btn-primary mx-1">
                  <span className=" pe-2">
                    <i className="bi bi-plus" />
                  </span>
                  <span onClick={handleAddTaskModal}>Create Task</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div className="col-sm-6 col-12 text-sm-start ">
      <div className="m-1">
        <a className="btn d-inline-flex btn-sm btn-neutral border-base mx-1">
          <span className=" pe-2">
            <i className="bi bi-funnel" />
          </span>
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
          >
            <option value="all">All Priorities</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </a>
        <a className="btn d-inline-flex btn-sm btn-neutral border-base mx-1 ">
          <span className=" pe-2">
          </span>
          <select
            as="select"
            value={completionFilter}
            onChange={(e) => setCompletionFilter(e.target.value)}
          >
            <option value="all">All Tasks</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </a>
      </div>
    </div>
    <AddEditFormModal show={AddTaskModal}
      onHide={handleCloseAddTaskModal}
    />
  </>
  );
};

export default NavbarSection;
