import NotificationButton from '../NotificationButton'
import './styles.css'

function SalesCard(){
  return(
        <div className="ds-card">
          <h2 className="ds-sales-title">Vendas</h2>
          <div>
            <div className="form-control-container">
              <input type="text" placeholder="00/00/0000" />
            </div>

            <div className="form-control-container">
              <input type="text" placeholder="00/00/0000" />
            </div>
          </div>

          <div>
            <table className="dssales-table">
              <thead>
                <tr>
                  <th className="mostrar992">ID</th>
                  <th className="mostrar576">Data</th>
                  <th>Vendedor</th>
                  <th className="mostrar992">Visitas</th>
                  <th className="mostrar992">Vendas</th>
                  <th>Total</th>
                  <th>Notificar</th>
                </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="mostrar992">#341</td>
                    <td className="mostrar576">08/03/2022</td>
                    <td>Anakin</td>
                    <td className="mostrar992">15</td>
                    <td className="mostrar992">11</td>
                    <td>55300.00</td>
                    <td>
                      <div className="red-btn-container">
                        <NotificationButton />
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="mostrar992">#341</td>
                    <td className="mostrar576">08/03/2022</td>
                    <td>Anakin</td>
                    <td className="mostrar992">15</td>
                    <td className="mostrar992">11</td>
                    <td>55300.00</td>
                    <td>
                      <div className="red-btn-container">
                        <NotificationButton />
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="mostrar992">#341</td>
                    <td className="mostrar576">08/03/2022</td>
                    <td>Anakin</td>
                    <td className="mostrar992">15</td>
                    <td className="mostrar992">11</td>
                    <td>55300.00</td>
                    <td>
                      <div className="red-btn-container">
                         <NotificationButton />
                      </div>
                    </td>
                  </tr>
                  
                  <tr>
                    <td className="mostrar992">#341</td>
                    <td className="mostrar576">08/03/2022</td>
                    <td>Anakin</td>
                    <td className="mostrar992">15</td>
                    <td className="mostrar992">11</td>
                    <td>55300.00</td>
                    <td>
                      <div className="red-btn-container">
                        <NotificationButton />
                      </div>
                    </td>
                  </tr>
              
                </tbody>
            </table>
          </div>

        </div>
       
  )
}

export default SalesCard