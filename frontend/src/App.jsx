import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

import Layout from "./component/Layout"

function App() {
  const randjsx = <h2>Foot Control App</h2>

  return (
    <MantineProvider>
      <div>
        <Layout  main={randjsx}/>
      </div>
    </MantineProvider>
  )
}

export default App
