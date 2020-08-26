import React from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'


// components
import AppBar from './Components/AppBar'

class App extends React.Component {
    render(){
        return (
            <div className="bg-light">
                <AppBar />
            </div>
        )
    }
}

export default App