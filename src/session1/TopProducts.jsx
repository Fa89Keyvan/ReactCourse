import React, { Component } from 'react'

export default class TopProducts extends Component {

    productsList = [{"ProductID":1,"ProductName":"Chai","UnitPrice":18.0000},{"ProductID":2,"ProductName":"Chang","UnitPrice":19.0000},{"ProductID":3,"ProductName":"Aniseed Syrup","UnitPrice":10.0000},{"ProductID":4,"ProductName":"Chef Anton's Cajun Seasoning","UnitPrice":22.0000},{"ProductID":5,"ProductName":"Chef Anton's Gumbo Mix","UnitPrice":21.3500},{"ProductID":6,"ProductName":"Grandma's Boysenberry Spread","UnitPrice":25.0000},{"ProductID":7,"ProductName":"Uncle Bob's Organic Dried Pears","UnitPrice":30.0000},{"ProductID":8,"ProductName":"Northwoods Cranberry Sauce","UnitPrice":40.0000},{"ProductID":9,"ProductName":"Mishi Kobe Niku","UnitPrice":97.0000},{"ProductID":10,"ProductName":"Ikura","UnitPrice":31.0000}];

    render() {
        return (
            <table className="table table-responsive table-striped">
                <thead>
                    <tr>
                        <th>ProductID</th>
                        <th>ProductName</th>
                        <th>UnitPrice</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.productsList.map(p =>
                                <tr>
                                    <td>{p.ProductID}</td>
                                    <td>{p.ProductName}</td>
                                    <td>{p.UnitPrice}</td>
                                </tr>
                            )
                    }
                </tbody>
            </table>
        )
    }
}
