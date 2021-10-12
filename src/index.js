import React from "react"
import ReactDOM from "react-dom"
import App from "./App";
import "./components/ToDo/Styles/main.scss"

const UserList = () => {
  return (
    <App />
  )
}

ReactDOM.render(<UserList />, document.getElementById("app"))
