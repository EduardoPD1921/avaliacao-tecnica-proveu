import React from 'react'

// inputform css
import '../css/InputForm.css'

const InputForm = props => {
    return (
        <div className="z-depth-5 input-content">
            <h5>Jornada de trabalho</h5>
            <div className="time-inputs">
                <input type="text" className="timepicker"></input>
                <span>às</span>
                <input type="text" className="timepicker"></input>
            </div>
            <div className="submit-button">
                <button className="btn waves-effect waves-light" type="submit" name="action">
                    Calcular
                    <i className="material-icons right"></i>
                </button>
            </div>
        </div>
    )
}

export default InputForm