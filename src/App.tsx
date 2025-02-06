import { Button } from './components/Button'

function App() {
  return (
    <>
      <h1>teste</h1>
      <Button as="div" onClick={() => console.log('clicked')} variant='primary'>Teste</Button>
    </>
  )
}

export default App
