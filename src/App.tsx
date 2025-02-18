import { Button } from './components'
import Typography from './components/Typography/Typopgraphy'

function App() {
  return (
    <>
      {/* <Button as='button' variant='primary'>My Button</Button> */}
      <Button as='a' variant='primary'>My Button</Button>
      <Button variant='secondary'>My Button</Button>
      <Typography size='lg'>Hello</Typography>
    </>
  )
}

export default App
