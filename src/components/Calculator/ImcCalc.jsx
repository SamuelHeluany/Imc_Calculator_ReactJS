import { useState } from 'react'
import Button from '../Button/Button'
import './ImcCalc.css'

const ImcCalc = () => {
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')

    const clearForm = (e) => {
        e.preventDefault()
        setHeight('')
        setWeight('')
    }

  return (
  <div id="calc-container">
    <h2>Calculadora de IMC</h2>
    <form id="imc-form">
        <div id="form-inputs">
            <div id="form-control">
                <label htmlFor="height">Altura:</label>
                <input 
                type="number" 
                name="height" 
                id="height" 
                placeholder='Exemplo 1,75'
                onChange={(e) => setHeight(e.target.value)}
                value={height}
                />
            </div>
            <div id="form-control">
                <label htmlFor="weight">Peso:</label>
                <input 
                type="number" 
                name="weight" 
                id="weight" 
                placeholder='Exemplo 71,8'
                onChange={(e) => setWeight(e.target.value)}
                value={weight}
                />
            </div>
            <div id="action-control">
                <Button id='calc-btn' text='Calcular'/>
                <Button id='clear-btn' text='Limpar' action={clearForm}/>
            </div>
        </div>
    </form>
  </div>
  )
}

export default ImcCalc