import { useState } from 'react'
import CapturaDados from './CapturaDados'
import ExibeDados from './ExibeDados'
import Historico from './Historico'

const App = () => {

  const [valorInicial, setValorInicial] = useState(0)
  const [aporteMensal, setAporteMensal] = useState(0)
  const [taxaJuros, setTaxaJuros] = useState(0)
  const [periodo, setPeriodo] = useState(0)
  const [valorFinalAcumulado, setValorFinalAcumulado] = useState(0)
  const [totalInvestido, setTotalInvestido] = useState(0)
  const [jurosAcumulados, setJurosAcumulados] = useState(0)
  const [numAportes, setNumAportes] = useState(0)
  const [rentabilidade, setRentabilidade] = useState(0)
  const [contador, setContador] = useState(0)
  const [data, setData] = useState(null)
  const [historico, setHistorico] = useState([])

  const calcularValor = () => {

    const taxa = taxaJuros / 100
    let valorCalculado;

    if (taxa === 0) {
      valorCalculado = valorInicial + (aporteMensal * periodo)
    }
    else {
      valorCalculado = valorInicial * (1 + taxa) ** periodo + aporteMensal * (((1 + taxa) ** periodo - 1) / taxa)
    }
    const valorInvestido = valorInicial + aporteMensal * periodo

    setValorFinalAcumulado(valorCalculado)
    setTotalInvestido(valorInvestido)
    setJurosAcumulados(valorCalculado - valorInvestido)
    setNumAportes(periodo)
    const rent = ((valorCalculado - valorInvestido) / valorInvestido) * 100
    setRentabilidade(rent)

    const dataAtual = new Date().toLocaleString('pt-br')
    setData(dataAtual)

    const novaSimulacao = {
      valorFinalAcumulado: valorCalculado,
      data: dataAtual
    }
    
    function atualizaHistorico(antigoHistorico, simulacao) {
    const aux = []
    for (let i = 0; i < antigoHistorico.length; i++) {
      aux.push(antigoHistorico[i])
    }
    aux.push(simulacao)
    return aux
  }

    setHistorico((historico) => atualizaHistorico(historico, novaSimulacao))
    setContador(contador + 1)
  }

  const limpar = () => {
    setValorFinalAcumulado(0)
    setTotalInvestido(0)
    setJurosAcumulados(0)
    setRentabilidade(0)
    setNumAportes(0)
  }

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-12">
          <h4>Hello, Investimentos</h4>
          <p className="text-muted">Descubra quanto seu dinheiro pode render com juros compostos</p>
        </div>
        <CapturaDados
          setValorInicial={setValorInicial}
          setAporteMensal={setAporteMensal}
          setTaxaJuros={setTaxaJuros}
          setPeriodo={setPeriodo}
          calcularValor={calcularValor}
          limpar={limpar}
        />
        <ExibeDados
          valorFinalAcumulado={valorFinalAcumulado}
          totalInvestido={totalInvestido}
          jurosAcumulados={jurosAcumulados}
          rentabilidade={rentabilidade}
          numAportes={numAportes}
        />
        <Historico
          historico={historico}
          contador={contador}
        />
      </div>
    </div>
  )
}

export default App