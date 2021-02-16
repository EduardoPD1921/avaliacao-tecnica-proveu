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
            firstHour: '',
            secondHour: '',
            isLoading: false
        }
    }

    // com o order é possível utilizar essa mesma função para tratar os dois casos de mudança dos horários
    onChangeHourHandler = (content, order) => {
        this.setState({
            [order]: content.target.value
        })

        console.log(content.target.value)
    }

    onSubmitButton = () => {
        console.log(this.state)
    }

    render() {
        return (
            <div className="main-page">
                <Navbar />
                <div className="main-content">
                    <InputForm onChangeHourHandler={this.onChangeHourHandler} onSubmitButton={this.onSubmitButton} />
                </div>
                <Footer />
            </div>
        )
    }
}

export default App