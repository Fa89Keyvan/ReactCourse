import React, { Component } from 'react'
import NewOrders from './NewOrders'
import TopCustomers from "./TopCustomers"
import TopProducts from './TopProducts'

export default class SessionOne extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-sm-7">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-header bg-primary text-white">New Orders</div>
                                    <div className="card-body">
                                        <NewOrders />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-header bg-danger text-white">Top Customers</div>
                                    <div className="card-body">
                                        <TopCustomers />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="card">
                            <div className="card-header bg-success text-white">Top Products</div>
                            <div className="card-body">
                                <TopProducts />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
