

import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'

import Navbar from './components/Navbar/Navbar'
import TicketCard from './components/TicketCard/TicketCard'

const fetchCustomers = async () => {
  const res = await fetch("/tickets.json")
  return res.json()
}

function App() {

const playerPromise = fetchCustomers() 
  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
     <Suspense fallback ={<span className="loading loading-spinner loading-xl"></span>} >
      <TicketCard playerPromise= {playerPromise}></TicketCard>
     </Suspense>
    </>
  )
}

export default App
