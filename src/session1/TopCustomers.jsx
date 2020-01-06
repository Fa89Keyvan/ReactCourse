import React, { Component } from 'react'

export default class NewOrders extends Component {

    topCustomersList = [{"CustomerID":"ALFKI","CompanyName":"Alfreds Futterkiste","ContactName":"Maria Anders","Country":"Germany","City":"Berlin","Address":"Obere Str. 57","Phone":"030-0074321"},{"CustomerID":"ANATR","CompanyName":"Ana Trujillo Emparedados y helados","ContactName":"Ana Trujillo","Country":"Mexico","City":"México D.F.","Address":"Avda. de la Constitución 2222","Phone":"(5) 555-4729"},{"CustomerID":"ANTON","CompanyName":"Antonio Moreno Taquería","ContactName":"Antonio Moreno","Country":"Mexico","City":"México D.F.","Address":"Mataderos  2312","Phone":"(5) 555-3932"},{"CustomerID":"AROUT","CompanyName":"Around the Horn","ContactName":"Thomas Hardy","Country":"UK","City":"London","Address":"120 Hanover Sq.","Phone":"(171) 555-7788"},{"CustomerID":"BERGS","CompanyName":"Berglunds snabbköp","ContactName":"Christina Berglund","Country":"Sweden","City":"Luleå","Address":"Berguvsvägen  8","Phone":"0921-12 34 65"}];

    render() {
        return (
            <table className="table table-responsive table-striped">
                <thead>
                    <tr>
                        <th>CustomerID</th>
                        <th>CompanyName</th>
                        <th>ContactName</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.topCustomersList.map(c =>
                                <tr>
                                    <td>{ c.CustomerID}</td>
                                    <td>{ c.CompanyName}</td>
                                    <td>{ c.ContactName}</td>
                                    <td>{ c.Country}</td>
                                    <td>{ c.City}</td>
                                    <td>{ c.Phone}</td>
                                </tr>
                            )
                    }
                </tbody>
            </table>
        )
    }
}
