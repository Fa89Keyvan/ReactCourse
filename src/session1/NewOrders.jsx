import React, { Component } from 'react'

export default class NewOrders extends Component {

    newOrdersList = [{"OrderID":11077,"OrderDate":"1998-05-06T00:00:00","ShipCountry":"USA","ShipCity":"Albuquerque","ShipAddress":"2817 Milton Dr.","c":[{"CustomerName":"Rattlesnake Canyon Grocery"}]},{"OrderID":11076,"OrderDate":"1998-05-06T00:00:00","ShipCountry":"France","ShipCity":"Marseille","ShipAddress":"12, rue des Bouchers","c":[{"CustomerName":"Bon app'"}]},{"OrderID":11075,"OrderDate":"1998-05-06T00:00:00","ShipCountry":"Switzerland","ShipCity":"Genève","ShipAddress":"Starenweg 5","c":[{"CustomerName":"Richter Supermarkt"}]},{"OrderID":11074,"OrderDate":"1998-05-06T00:00:00","ShipCountry":"Denmark","ShipCity":"Kobenhavn","ShipAddress":"Vinbæltet 34","c":[{"CustomerName":"Simons bistro"}]},{"OrderID":11073,"OrderDate":"1998-05-05T00:00:00","ShipCountry":"Mexico","ShipCity":"México D.F.","ShipAddress":"Calle Dr. Jorge Cash 321","c":[{"CustomerName":"Pericles Comidas clásicas"}]},{"OrderID":11072,"OrderDate":"1998-05-05T00:00:00","ShipCountry":"Austria","ShipCity":"Graz","ShipAddress":"Kirchgasse 6","c":[{"CustomerName":"Ernst Handel"}]},{"OrderID":11071,"OrderDate":"1998-05-05T00:00:00","ShipCountry":"Venezuela","ShipCity":"Barquisimeto","ShipAddress":"Carrera 52 con Ave. Bolívar #65-98 Llano Largo","c":[{"CustomerName":"LILA-Supermercado"}]},{"OrderID":11070,"OrderDate":"1998-05-05T00:00:00","ShipCountry":"Germany","ShipCity":"Frankfurt a.M.","ShipAddress":"Magazinweg 7","c":[{"CustomerName":"Lehmanns Marktstand"}]},{"OrderID":11069,"OrderDate":"1998-05-04T00:00:00","ShipCountry":"Mexico","ShipCity":"México D.F.","ShipAddress":"Avda. Azteca 123","c":[{"CustomerName":"Tortuga Restaurante"}]},{"OrderID":11068,"OrderDate":"1998-05-04T00:00:00","ShipCountry":"Brazil","ShipCity":"Sao Paulo","ShipAddress":"Alameda dos Canàrios, 891","c":[{"CustomerName":"Queen Cozinha"}]}];

    render() {
        return (
            <table className="table table-responsive table-striped">
                <thead>
                    <tr>
                        <th>OrderID</th>
                        <th>OrderDate</th>
                        <th>ShipCountry</th>
                        <th>ShipCity</th>
                        <th>ShipAddress</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.newOrdersList.map(o =>
                                <tr>
                                    <td>{o.OrderID}</td>
                                    <td>{o.OrderDate}</td>
                                    <td>{o.ShipCountry}</td>
                                    <td>{o.ShipCity}</td>
                                    <td>{o.ShipAddress}</td>
                                </tr>
                            )
                    }
                </tbody>
            </table>
        )
    }
}
