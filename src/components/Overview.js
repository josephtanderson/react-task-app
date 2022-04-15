import React from "react";
import './Overview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons'
<FontAwesomeIcon icon={ faPencil } />

const Overview = (props) => {
  const { tasks } = props;
  let outputElement = <div className="empty-list">
    Add a task to get started!
    </div>
  if (tasks.length !== 0) {
  outputElement = <ul>
  {tasks.map((task) => {
    if (task.text === '') {return}
    if (task.edit) {
      return <li className="edit-item" key={task.id}>
        <form className="edit-form" onSubmit={props.editSubmit}>
        <input placeholder={task.text} onChange={props.editChange} value={props.editValue} type="text" id={'edit'+task.id} autoFocus />
      <button className="edit-submit" type="submit" partnertask={task.id}>
      <FontAwesomeIcon className="check-icon" icon={ faCheck } />
      </button>
    </form>
        </li>
    }
    return <li className="list-item" key={task.id}>
        {task.text}
        <span>
          <button className="del-button" onClick={props.delButton} partnertask={task.id} >
          <FontAwesomeIcon className="del-icon" icon={ faTrashCan } />
          </button>
          <button className="edit-button" onClick={props.editButton} partnertask={task.id}>
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
