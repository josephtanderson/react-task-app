import React from "react";
import './Overview.css';

const Overview = (props) => {
  const { tasks } = props;
  let outputElement = <div className="empty-list">
    Add a task to get started!
    </div>
  if (tasks.length !== 0) {
  outputElement = <ul>
  {tasks.map((task) => {
    if (task.edit) {
      return <li className="edit-item" key={task.id}>
        <form className="edit-form" onSubmit={props.editSubmit}>
        <input placeholder={task.text} onChange={props.editChange} value={props.editValue} type="text" id={'edit'+task.id} />
      <button className="edit-submit" type="submit" partnertask={task.id}>
        E
      </button>
    </form>
        </li>
    }
    return <li className="list-item" key={task.id}>
        {task.text}
        <span>
          <button className="del-button" onClick={props.delButton} partnertask={task.id} >
            D
          </button>
          <button className="edit-button" onClick={props.editButton} partnertask={task.id}>
            E
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
