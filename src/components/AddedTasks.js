import React, { useState } from "react";
import TrashIcon from '../icons/trash_icon.svg';

const AddedTasks = ({todo}) => {
    const [tasks, setTasks] = useState([
        {
            'id': '1',
            'name': 'An item',
        },
        {
            'id': '2',
            'name': 'A Second Item',
        },
        {
            'id': '3',
            'name': 'A Third Item',
        }
    ]);

    const taskItems = todo.map((task, index) => 
        <li className="list-group-item" key={index}>{task}
            <img className="trash-icon" src={TrashIcon}></img>
        </li>
    )

    return (
        <div>
            <div className="card">
                <div className="card-header">
                    Added Tasks
                </div>
                <ul className="list-group list-group-flush">
                    {taskItems}
                </ul>
            </div>
        </div>
    )
}

export default AddedTasks;