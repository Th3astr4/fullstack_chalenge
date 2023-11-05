import { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Parts = (props) => {
  return (
    <div>
     <p>Part: {props.parts} {props.exercises}</p>
    </div>
       
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Total of exercises: {props.exercises}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {name: 'Fundamentals of React', exercises: 10 },
    {name: 'Using props to pass data', exercises: 7 },
    {name: 'State of a component', exercises: 14 }
  ]


  return (
    <div>
      <Header course={course}/>
      <Parts parts={parts[0].name} exercises={parts[0].exercises}/>
      <Parts parts={parts[1].name} exercises={parts[1].exercises}/>
      <Parts parts={parts[2].name} exercises={parts[2].exercises}/>
      <Total exercises={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
    </div>
  )
}

export default App
