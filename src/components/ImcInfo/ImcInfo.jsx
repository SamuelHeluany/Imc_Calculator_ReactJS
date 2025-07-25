import Button from "../Button/Button"
import './ImcInfo.css'


const ImcInfo = ( { data, imc, info, infoClass, resetCalculator }) => {

  return <div id="result-container">
    <p id="imc-number">
        Seu Imc: {imc}
    </p>
    <p id="imc-info">
        Situação atual: {info} 
    </p>
    <h3>Confira as classificações: </h3>
    <div id="imc-table">
        <div id="table-header">
            <h4>IMC</h4>
            <h4>Classificação</h4>
            <h4>Obesidade</h4>
        </div>
        {data.map((item) => (
            <div id="table-data" key={item.info}>
                <p>{item.classification}</p>
                <p>{item.info}</p>
                <p>{item.obesity}</p>
            </div>
        ))}
    </div>
    <Button id='back-btn' text='voltar' action={resetCalculator}/>
  </div>
}

export default ImcInfo