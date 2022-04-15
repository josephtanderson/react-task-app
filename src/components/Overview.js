import React from "react";

const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return <li key={task.id}>{task.text} <button onClick={props.delButton}>DELETE</button></li>;
      })}
    </ul>
  );
};

export default Overview;
