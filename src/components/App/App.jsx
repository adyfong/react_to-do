import React     from 'react';
import Nav       from '../Nav/Nav';
import TaskForm  from '../TaskForm';
import Footer    from '../Footer/Footer';
import TaskList  from '../TaskList';
import AjaxAdapter from '../../helpers/AjaxAdapter';

import './App.css';
import './GA_gear.png';

export default class App extends React.Component {

  constructor(props) {
    super();

    this.state = {
   //what is different with{} or []
      tasks: {},
    };

  this.addTask = this.addTask.bind(this);
}

componentDidMount() {
  AjaxAdapter.getTasks()
  .then(allTasks =>
       this.setState({tasks: newTasks})
    )
  .catch((error) => {
    throw error;
  });
}

addTask(name, desc){
  //... the spread operator it clones so when you change the clone it

  //supply an object fetch from localhost objst has headers.

  // const newState = {...this.state.tasks}
 // Post the db, this nameand desc
 // .then update the state

 // this.setState({tasks: newState})
AjaxAdapter.createTask({name, desc})
.then(newTask => {
       const newState = {...this.state.tasks};
       newState[newTask.id] =newTask
       this.setState({tasks: newState})
    })
     .catch((error) => {
       throw error;
   });
}



  render() {
    return (
      <container>
        <header>
          <Nav />
        </header>
        <main className="container">
          <section className="jumbotron">
            <h1>Task Manager</h1>
            <TaskForm addTask={this.addTask} />
          </section>
          {/* to do lists */}
          <section className="row">
            <article className="col-md-4">
              <h3>Open Items</h3>
              <TaskList
               filter={task => !task.deleted && task.completed}
               collection={this.state.tasks}
                />
            </article>

            <article className="col-md-4">
              <h3>Completed Items</h3>
              filter={task => !task.deleted && task.completed}
              <TaskList collection={this.state.tasks} />
            </article>

            <article className="col-md-4">
              <h3>Deleted Items</h3>

              <TaskList
              filter={task => task.deleted}
              collection={this.state.tasks} />
            </article>
          </section>
        </main>
        <footer>
          <Footer />
        </footer>

      </container>
    );
  }

}
