const ExibeDados = (props) => {

  return (
    <div style={{backgroundColor: '#F5F0EB'}} className="card mt-3">
      <div style={{backgroundColor: '#F5F0EB'}} className="card-header text-muted">
        <p>Valor final acumulado</p>
        <h1 className="text-success">R$ {props.valorFinalAcumulado}</h1>
      </div>

      <div style={{backgroundColor: '#F5F0EB'}} className="card-body">
        <div className="row mt-3">
          <div className="col-md-6 col-sm-12">
            <p>Total investido</p>
            <h3>R$ {props.totalInvestido}</h3>
          </div>

          <div className="col-md-6 col-sm-12">
            <p>Juros acumulados</p>
            <h3>R$ {props.jurosAcumulados}</h3>
          </div>

          <div className="col-md-6 col-sm-12">
            <p>Num. de aportes</p>
            <h3>{props.numAportes}</h3>
          </div>

          <div className="col-md-6 col-sm-12">
            <p>Rentabilidade</p>
            <h3 className="text-success">+{props.rentabilidade}%</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExibeDados