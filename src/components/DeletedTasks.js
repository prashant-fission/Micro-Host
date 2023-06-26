import React from "react";
import "./styles.css";

const DeletedTasks = ({ deletedTask }) => {
  return (
    <div>
      <div className='card'>
        <div className='card-header deleteHeader'>
          {deletedTask.length > 0 ? "Deleted Tasks" : ""}
        </div>
        {deletedTask.length > 0 ? (
          <ul className='list-group list-group-flush deleteTask'>
            {(deletedTask || []).map((task) => {
              return <li className='list-group-item'>{task}</li>;
            })}
          </ul>
        ) : (
          <div className='deleteNotavailable'>
            No Deleted Tasks are Available
          </div>
        )}
      </div>
    </div>
  );
};

export default DeletedTasks;
