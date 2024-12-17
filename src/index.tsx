import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

const root = document.createElement("div")
document.body.appendChild(root)
const rootDiv = ReactDOM.createRoot(root)

rootDiv.render(
	<React.StrictMode>
		<h1>Hello, world!</h1>
	</React.StrictMode>
)
