import React from "react";

const DeletedTasks = () => {
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    Deleted Tasks
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
            </div>
        </div>
    )
}

export default DeletedTasks;