const Historico = (props) => {
  return (
    <div className="container mt-4">
      <div className="row align-items-center">
        <div className="col-9">
          <h3>Histórico de simulações</h3>
        </div>
        <div className="col-3">
          <h6 className='text-muted text-end'>{`${props.contador} simulações`}</h6>
        </div>
        <div className="card mt-2 bg-light">
          <div className="card-header bg-light mt-2">
            <div className="row ">
              <div className="col-9">
                <h5 className='text-muted'>Data</h5>
              </div>
              <div className="col-3">
                <h5 className='text-muted text-end'>Valor final</h5>
              </div>
            </div>
          </div>

          {props.historico.map((item, index) => (
            <div key={index} className="card mb-1">
              <div className="card-body">
                <div className="row">
                  <div className="col-6">
                    <h4 className="text-muted mb-1">
                      {item.data}
                    </h4>
                  </div>
                  <div className="col-6 text-end">
                    <h4 className='mb-1'>
                      R$ {item.valorFinalAcumulado}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Historico