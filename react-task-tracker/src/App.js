import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () =>{
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
            day: '5thFeb at 2:30pm',
            reminder: true
        },
        {
            id: 2,
            text: 'Meeting at school',
            day: 'Feb 6th at 1:30pm',
            reminder: true
        },
        {
            id: 3,
            text: 'Food Shooping',
            day: 'Feb 5th at 2:30pm',
            reminder: false
        },
    ])
    const deleteTask = (id) => {
        setTasks(tasks.filter((task)=>task.id!==id))
    }
    const toggleReminder = (id) => {
        setTasks(tasks.map((task) =>
            task.id === id ? { ...task, reminder: !task.reminder } :task))
    }
    return (
        <div className='container'>
            <Header />
            <h1>Hello from react</h1>
            <Tasks tasks={tasks} onDelete=
                {deleteTask} onToogle={ toggleReminder}/>
        </div>
  );
}

export default App;
