import React from 'react';
import Task from './Task';

const TaskList = props => {

    const generateTasks = collection =>
      Object.keys(collection)
      //filter works ny returning true or faults
       .filter(taskID => props.filter(collection[taskID]))
       .map((taskID, i) => (
           <Task
              key={i}
              title={props.collection[taskID].name}
              desc={props.collection[taskID].description}
              />
        ));

  return(
  <div className="list-group">
  {generateTasks(props.collection)}
  </div>
 );

}

export default TaskList;
