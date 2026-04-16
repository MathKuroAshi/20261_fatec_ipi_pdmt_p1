import React from 'react'
import CapturaDados from './CapturaDados'

const App = () => {
  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-12">
          <h4>Hello, Investimentos</h4>
          <p className="text-muted">
            Descubra quanto seu dinheiro pode render com juros compostos
          </p>
          <CapturaDados></CapturaDados>
        </div>
      </div>
    </div>
  )
}

export default App