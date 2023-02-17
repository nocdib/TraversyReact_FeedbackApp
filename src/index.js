import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// Point to the root div object in the index.html to insert the code into
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
<React.StrictMode>
    <App/>
</React.StrictMode>)