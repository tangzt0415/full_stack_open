import { useState } from "react"

const Display = (props) => {
  return <div>{props.counter}</div>
}

// const Button = (props) => {
//   return <button onClick={props.onClick}>{props.text}</button>
// }
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>


const App = () => {
  const [counter, setCounter] = useState(0)
  //function definition outside of jsx for button function -> Good practise
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)
  return (
    <div>
      <Display counter={counter} />
      <div>
        <Button
          onClick={increaseByOne}
          text="increase"
        />
        <Button
          onClick={setToZero}
          text="reset"
        />
        <Button
        onClick={decreaseByOne}
        text='minus'
      />  
      </div>
    </div>
  )
}

export default App
