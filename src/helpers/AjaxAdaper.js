function indexByKeyName(arr, keyName) {
  return arr.reduce((obj,el) =>
  obj[e][keyName]] =el;
  return obj;
 }, {});
}

export default class AjaxAdapter {

static getTasks() {
    return fetch('/tasks')
    .than(r => r.json());
    .then(data => indexByKeyName(data, 'id'));
}


static createTask(newTask) {
    return fetch('/task', {
    method: 'post'
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    //create to 2 values es6
    body: JSON.stringify({name, desc})
    })
    .then(r => r.json());
    }


deleteTask(id){
  return fetch(`/tasks/${id}`, {
       method: 'DELETE',
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
       },
  })
  .then(r => r.json());
 }
}













  }

}
