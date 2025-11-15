import { useState, useEffect } from 'react'

import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

import Layout from "./component/Layout"

function App() {
  const [workouts, setWorkouts] = useState('wala pa')

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')
      console.log(response)
      const json = await response.json()

      if (response.ok) {
        console.log(json)
        setWorkouts(json)
      }
    }

    fetchWorkouts()
  }, [])

  const randjsx = (
  <div>
    <h2>Foot Control App</h2>
    <p>{workouts}</p>
  </div>
  )

  return (
    <MantineProvider>
      <div>
        <Layout  main={randjsx}/>
      </div>
    </MantineProvider>
  )
}

export default App
