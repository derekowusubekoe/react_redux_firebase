

```js
const tasks = ['Wake up at 4:30am', 'Meditate for 10 minutes', 'Code for 2 hours'];
const element =
      <div>
        <h1>Task List</h1>
        <ol>
        {tasks.map((task, index) => <li key = {index}> {task} </li>)}
        </ol>
    </div>
```
