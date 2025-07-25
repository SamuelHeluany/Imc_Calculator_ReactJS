import { useState } from 'react'
import Button from '../Button/Button'
import './ImcCalc.css'

const ImcCalc = ( { calcImc } ) => {
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')

    const clearForm = (e) => {
        e.preventDefault()
        setHeight('')
        setWeight('')
    }

    // Validar digitos, de 0 a 9 e virgula. O resto substitui por nada
    const validDigits = (text) => {
        return text.replace(/[^0-9,]/g, '')
    }

    const handleHeightChange = (e) => {
        // os digitos validos vão ser o que foi digitado
        const updateValue = validDigits(e.target.value)

        // e a mudança de estado vão ser os digitos validos
        setHeight(updateValue)
    }

    const handleWeightChange = (e) => {
        // os digitos validos vão ser o que foi digitado
        const updateValue = validDigits(e.target.value)

        // e a mudança de estado vão ser os digitos validos
        setWeight(updateValue)
    }

  return (
  <div id="calc-container">
    <h2>Calculadora de IMC</h2>
    <form id="imc-form">
        <div id="form-inputs">
            <div id="form-control">
                <label htmlFor="height">Altura:</label>
                <input 
                type="text" 
                name="height" 
                id="height" 
                placeholder='Exemplo 1,75'
                onChange={(e) => handleHeightChange(e)}
                value={height}
                />
            </div>
            <div id="form-control">
                <label htmlFor="weight">Peso:</label>
                <input 
                type="text" 
                name="weight" 
                id="weight" 
                placeholder='Exemplo 71,8'
                onChange={(e) => handleWeightChange(e)}
                value={weight}
                />
            </div>
            <div id="action-control">
                <Button id='calc-btn' text='Calcular' action={(e) => calcImc(e, height, weight)}/>
                <Button id='clear-btn' text='Limpar' action={clearForm}/>
            </div>
        </div>
    </form>
  </div>
  )
}

export default ImcCalc