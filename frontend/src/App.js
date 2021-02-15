import React from 'react'

import InputForm from './components/InputForm'

// app css
import './css/App.css'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            input: ''
        }
    }

    render() {
        return (
            <div className="main-content">
                <InputForm />
            </div>
        )
    }
}

export default App