import React from 'react';
import TaskCard from './TaskCard';

const Tasks = ({ tasks, handleUpdateClick, handleDeleteClick }) => {

    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-2 m-0'>
            {tasks
                .map((task) =>
                    <TaskCard task={task} key={task.id} handleUpdateClick={handleUpdateClick} handleDeleteClick={handleDeleteClick} />
                )}
            {tasks.length === 0 && (
                <h5 className="w-100 text-center">No data found</h5>
            )}
        </div>
    );
}

export default Tasks;
