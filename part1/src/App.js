import { useState } from "react"

const Display = (props) => {
  return <div>{props.counter}</div>
}

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>
}

const App = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <Display counter={counter} />
      <div>
        <Button
          onClick={() => {
            setCounter(counter + 1)
          }}
          text="increase"
        />
        <Button
          onClick={() => {
            setCounter(0)
          }}
          text="reset"
        />
      </div>
    </div>
  )
}

export default App
