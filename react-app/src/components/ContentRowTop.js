import React from "react";
import ContentRow from "./ContentRow";
import ProductList from "./ProductList";
import { Route, Switch } from "react-router-dom";
import LastProduct from "./LastProduct";

function ContentRowTop() {
    return (
        <div className="container-fluid">
            <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

            <Switch>
                <Route path="/" exact>
                    <ProductList />
                </Route>
                <Route path="/charts">
                    <ContentRow />
                </Route>
                
                <Route path="/last-product">
                    <LastProduct />
                </Route>
                <Route>
                    <h1>404</h1>
                </Route>
            </Switch>
        </div>
    );
}
export default ContentRowTop;