import React from 'react'

// componentes
import InputForm from './components/InputForm'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

// app css
import './css/App.css'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            input: '',
            isLoading: false
        }
    }

    render() {
        return (
            <div className="main-page">
                <Navbar />
                <div className="main-content">
                    <InputForm />
                </div>
                <Footer />
            </div>
        )
    }
}

export default App