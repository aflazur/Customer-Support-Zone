import { Suspense, useState } from 'react'
import './App.css'

import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import TicketCard from './components/TicketCard/TicketCard'
import TaskStatus from './components/TaskStatus/TaskStatus'

import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/Footer/Footer'

const fetchCustomers = async () => {
  const res = await fetch("/tickets.json")
  return res.json()
}

function App() {

  const playerPromise = fetchCustomers()

  const [tasks, setTasks] = useState([])
  const [resolved, setResolved] = useState([])
  const [removed, setRemoved] = useState([])

  const handleAddTask = (ticket) => {

    if (tasks.find(t => t.id === ticket.id)) {
      toast.error("Already added")
      return
    }

    setTasks([...tasks, ticket])

    toast.success("Ticket added to task")

  }

  const handleComplete = (id) => {

    const completed = tasks.find(t => t.id === id)

    setTasks(tasks.filter(t => t.id !== id))

    setResolved([...resolved, completed])

    setRemoved([...removed, id])

    toast.success("Task Completed")

  }

  return (
    <>

      <div className="bg-[#F5F5F5]">
        <Navbar></Navbar>
        <Banner inProgress={tasks.length}
          resolved={resolved.length}>
        </Banner>

        <div className="grid md:grid-cols-3 gap-6 p-6">

          <div className="md:col-span-2">

            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>} >
              <TicketCard
                playerPromise={playerPromise}
                handleAddTask={handleAddTask}
                removed={removed}
              ></TicketCard>
            </Suspense>
          </div>

          <TaskStatus
            tasks={tasks}
            handleComplete={handleComplete}
          ></TaskStatus>
        </div>

        <ToastContainer></ToastContainer>
        <Footer></Footer>
      </div>

    </>
  )
}

export default App