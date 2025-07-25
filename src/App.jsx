import './App.css'
import { useState } from 'react'

import { data } from './data/data'

import ImcCalc from './components/Calculator/ImcCalc'
import ImcInfo from './components/ImcInfo/ImcInfo'

function App() {
  const [imc, setImc] = useState('')
  const [info, setInfo] = useState('')
  const [infoClass, setInfoClass] = useState('')

  const calcImc = (e, height, weight) => {
    e.preventDefault()

    if(!height || !weight ) return

    // o sinal de + tranforma o valor em number, Unary Plus.
    const heightFloat = +height.replace(',','.')
    const weightFloat = +weight.replace(',','.')

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1)

    setImc(imcResult)

    data.forEach((item) => {
      if(imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info)
        setInfoClass(item.infoClass)
      }
    })
  }

  const resetCalculator = (e) => {
    e.preventDefault()

    setImc('')
    setInfo('')
    setInfoClass('')
  }

  return (
    <>
     <div className="container">
      {!imc ? (
          <ImcCalc calcImc={calcImc}/>
      ) : (
        <ImcInfo data={data} imc={imc} info={info} infoClass={infoClass} resetCalculator={resetCalculator}/>
      )}
      
     </div>
    </>
  )
}

export default App
