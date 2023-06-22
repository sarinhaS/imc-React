import { useState } from 'react'
import './App.css'


function App() {
  const [peso, setPeso] = useState()
  const [altura, setAltura] = useState()
  const [resultado, setResultado] = useState()


  const calculateIMC = () => {
    const imc = peso / ( altura * altura );
    const formatação = imc.toFixed(2);
    setResultado(+formatação)
  }




  return (
    <div>
      <label>Peso: </label>
      <input type="number" value={peso} onChange={(e) => setPeso(+e.target.value)} placeholder="peso (kg)"/><br/>
      <label>Altura: </label>
      <input type="number" value={altura} onChange={(e) => setAltura(+e.target.value)} placeholder="altura (m)"/><br/>
      <button onClick={calculateIMC}>Calcular</button>
      <h2>RESULTADO: </h2>
      <h1>{resultado}</h1>
      <div>
        <table border="2">
          <thead>
            <tr>
              <th>Classificação</th>
              <th>IMC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Abaixo do Peso</td>
              <td>Abaixo de 18,5</td>
            </tr>
            <tr>
              <td>Peso Normal</td>
              <td>Entre 18,5 e 24,9</td>
            </tr>
            <tr>
              <td>Sobrepeso</td>
              <td>Entre 25 e 29,9</td>
            </tr>
            <tr>
              <td>Obesidade Grau I</td>
              <td>Entre 30 e 34,9</td>
            </tr>
            <tr>
              <td>Obesidade Grau II</td>
              <td>Entre 35 e 39,9</td>
            </tr>
            <tr>
              <td>Obesidade Grau III</td>
              <td>Acima de 40</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


  )
}


export default App


