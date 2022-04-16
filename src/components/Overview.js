import React from "react";
import './Overview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Overview = (props) => {
  const { tasks, editSubmit, editChange, editValue, delButton, editButton } = props;
  //set default display if there are no list items
  let outputElement = <div className="empty-list">
    Add a task to get started!
    </div>
  //if there are items output shows list
  if (tasks.length !== 0) {
  outputElement = <ul>
  {tasks.map((task, index) => {
    //if no text in task, do not add list item
    if (task.text === '') {return};
    //if task is being edited render form to input to edit it
    if (task.edit) {
      return <li className="edit-item" key={task.id}>
        <form className="edit-form" onSubmit={editSubmit}>
        <input placeholder={task.text} onChange={editChange} value={editValue} type="text" id={'edit'+task.id} autoFocus />
      <button className="edit-submit" type="submit" partnertask={task.id}>
      <FontAwesomeIcon className="check-icon" icon={ faCheck } />
      </button>
    </form>
        </li>
    }
    //'normal' output for list items
    return <li className="list-item" key={task.id}>
        {index+1}. {task.text}
        <span>
          <button className="del-button" onClick={delButton} partnertask={task.id} >
          <FontAwesomeIcon className="del-icon" icon={ faTrashCan } />
          </button>
          <button className="edit-button" onClick={editButton} partnertask={task.id}>
          <FontAwesomeIcon className="edit-icon" icon={ faPencil } />
          </button>
        </span>
      </li>;
  })}
  </ul>
  }

  return (
    outputElement
  );
};

export default Overview;
