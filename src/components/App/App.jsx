import React     from 'react';
import Nav       from '../Nav/Nav';
import TaskForm  from '../TaskForm';
import Footer    from '../Footer/Footer';
import TaskList  from '../TaskList';

import './App.css';
import './GA_gear.png';


class Task{
    constructor(name, desc){
      this.name = name;
      this.desc = desc;
    }
}



export default class App extends React.Component {

  constructor(props) {
    super();

    this.state = {
   //what is different with{} or []
      tasks: {},
    };

  this.addTask = this.addTask.bind(this)

addTask(name, desc){
  //... the spread operator it clones so when you change the clone it

  //supply an object fetch from localhost objst has headers.
  fetch('/task', {
    method: 'post'
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    //create to 2 values es6
    body: JSON.stringify({name, desc})
    })
    .then(r => r.json())
    .then(newTask => {
       const newState = {...this.state.tasks};
       newState[newTask.id] =newTask
       this.setState.({tasks: newState})
    })
     .catch((error) => {
       throw error;
   });

  // const newState = {...this.state.tasks}
 // Post the db, this nameand desc
 // .then update the state

 // this.setState({tasks: newState})
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
            <TaskForm />
          </section>
          {/* to do lists */}
          <section className="row">
            <article className="col-md-4">
              <h3>Open Items</h3>
              <TaskList />
            </article>

            <article className="col-md-4">
              <h3>Completed Items</h3>
              <TaskList />
            </article>

            <article className="col-md-4">
              <h3>Deleted Items</h3>
              <TaskList />
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
