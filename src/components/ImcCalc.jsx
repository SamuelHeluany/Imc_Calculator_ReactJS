import './ImcCalc.css'
const ImcCalc = () => {
  return <div className="calc-container">
    <h2>Calculadora de IMC</h2>
    <form className="imc-form">
        <div className="form-inputs">
            <div className="form-control">
                <label htmlFor="height">Height:</label>
                <input type="text" name="height" id="height" placeholder='Exemplo 1,75'/>
            </div>
            <div className="form-control">
                <label htmlFor="weight">Weight:</label>
                <input type="text" name="weight" id="weight" placeholder='Exemplo 71,8'/>
            </div>
            <div className="action-control">
                <button>Calculate</button>
                <button>Clear</button>
            </div>
        </div>
    </form>
  </div>
}

export default ImcCalc