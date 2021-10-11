import React from "react"
import ReactDOM from "react-dom"
import "./main.css"

const UserList = () => {
  return (
    <div className="body">
      <h1 className="title">Artur's React Template</h1>
    </div>
  )
}

ReactDOM.render(<UserList />, document.getElementById("app"))
