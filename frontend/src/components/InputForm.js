import React from 'react'

// inputform css
import '../css/InputForm.css'

const InputForm = ({ onChangeHourHandler, onSubmitButton }) => {
    return (
        <div className="z-depth-5 input-content">
            <h5>Jornada de trabalho</h5>
            <div className="time-inputs">
                <input onChange={c => onChangeHourHandler(c, 'firstHour')} type="text" className="timepicker"></input>
                <span>às</span>
                <input onChange={c => onChangeHourHandler(c, 'secondHour')} type="text" className="timepicker"></input>
            </div>
            <div className="submit-button">
                <button onClick={() => onSubmitButton()} className="btn waves-effect waves-light" type="submit" name="action">
                    Calcular
                    <i className="material-icons right"></i>
                </button>
            </div>
        </div>
    )
}

export default InputForm