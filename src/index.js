import React from "react"
import ReactDOM from "react-dom"
import App from "./App";
import "./components/ToDo/Styles/main.scss"

const TaskManager = () => {
  return (
    <App />
  )
}

ReactDOM.render(<TaskManager />, document.getElementById("root"))
