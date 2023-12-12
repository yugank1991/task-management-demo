import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Tasks from './Tasks';

const TaskTabs = ({ tabs, handleUpdateClick, handleDeleteClick }) => {

    return (
        <Tabs
            defaultActiveKey="all"
            className="mb-3 m-1 my-3 border border-1"
            fill
            variant="pills"
        >
            {tabs.map((tab) => (<Tab eventKey={tab.eventKey} title={tab.title} key={tab.eventKey}>
                <Tasks tasks={tab.tasks} handleUpdateClick={handleUpdateClick} handleDeleteClick={handleDeleteClick} />
            </Tab>))}
        </Tabs>
    )
}

export default React.memo(TaskTabs);