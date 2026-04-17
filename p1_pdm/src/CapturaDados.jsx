import { useState } from 'react'

const CapturaDados = (props) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-6 col-md-6 col-lg-6 p-2'>
          <label className='text-muted' htmlFor="valorInicial">Valor Inicial (R$)</label>
          <input className="w-100 rounded p-2"
            id="valorInicial"
            type="text"
            placeholder="R$ 0,00"
            onChange={(e) => { props.setValorInicial(Number(e.target.value)) }} />
        </div>

        <div className='col-sm-6 col-md-6 col-lg-6 p-2'>
          <label className='text-muted' htmlFor="aporteMensal">Aporte Mensal (R$)</label>
          <input className="w-100 rounded p-2"
            id="aporteMensal"
            type="text"
            placeholder="R$ 0,00"
            onChange={(e) => { props.setAporteMensal(Number(e.target.value)) }} />
        </div>

        <div className='col-sm-6 col-md-6 col-lg-6 p-2'>
          <label className='text-muted' htmlFor="taxaJuros">Taxa de Juros (% ao mês)</label>
          <input className="w-100 rounded p-2"
            id="taxaJuros"
            type="text"
            placeholder="0,00"
            onChange={(e) => { props.setTaxaJuros(Number(e.target.value)) }} />
        </div>

        <div className='col-sm-6 col-md-6 col-lg-6 p-2'>
          <label className='text-muted' htmlFor="numMeses">Período (meses)</label>
          <input className="w-100 rounded p-2"
            id="numMeses"
            type="text"
            placeholder="0"
            onChange={(e) => { props.setPeriodo(Number(e.target.value)) }} />
        </div>
      </div>
      <div className="row mt-3">
        <div className='col-sm-12 col-md-9 col-lg-9 p-2'>
          <button
            className='btn btn-outline-primary w-100'
            onClick={props.calcularValor}>Calcular</button>
        </div>

        <div className='col-sm-12 col-md-3 col-lg-3 p-2'>
          <button
            className='btn btn-outline-dark w-100'
            onClick={props.limpar}>
            Limpar
          </button>
        </div>
      </div>
    </div>
  )
}

export default CapturaDados