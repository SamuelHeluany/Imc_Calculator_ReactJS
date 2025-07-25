import Button from '../Button/Button'
import './ImcCalc.css'
const ImcCalc = () => {
  return <div id="calc-container">
    <h2>Calculadora de IMC</h2>
    <form id="imc-form">
        <div id="form-inputs">
            <div id="form-control">
                <label htmlFor="height">Altura:</label>
                <input type="text" name="height" id="height" placeholder='Exemplo 1,75'/>
            </div>
            <div id="form-control">
                <label htmlFor="weight">Peso:</label>
                <input type="text" name="weight" id="weight" placeholder='Exemplo 71,8'/>
            </div>
            <div id="action-control">
                <Button id='calc-btn' text='Calcular'/>
                <Button id='clear-btn' text='Limpar'/>
            </div>
        </div>
    </form>
  </div>
}

export default ImcCalc