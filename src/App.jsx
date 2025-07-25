import './App.css'
import { useState } from 'react'

import { data } from './data/data'

import ImcCalc from './components/Calculator/ImcCalc'
import ImcInfo from './components/ImcInfo/ImcInfo'

function App() {
  const [imc, setImc] = useState('')
  const [info, setInfo] = useState('')
  const [infoCalass, setInfoClass] = useState('')

  const calcImc = (e, height, weight) => {
    e.preventDefault()

    if(!height || !weight ) return

    // o sinal de + tranforma o valor em numero, metodo Unary Plus.
    const heightFloat = +height.replace(',','.')
    const weightFloat = +weight.replace(',','.')

    const imcResult = (weightFloat / heightFloat **2).toFixed(1)

    setImc(imcResult)
  }

  return (
    <>
     <div className="container">
      {!imc ? (
          <ImcCalc calcImc={calcImc}/>
      ) : (
        <ImcInfo />
      )}
      
     </div>
    </>
  )
}

export default App
