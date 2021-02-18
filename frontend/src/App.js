import React from 'react'
import axios from 'axios'

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
    }

    onSubmitButton = async () => {
        const data = {
            firstTime: this.state.firstHour,
            secondTime: this.state.secondHour
        }

        try {
            const response = await axios({
                method: 'POST',
                url: 'http://localhost:8080/calculo',
                data: data
            })

            console.log(response.data)
        } catch(error) {
            console.log(error.response)
        }
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