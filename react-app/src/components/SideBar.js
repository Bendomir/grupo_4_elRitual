import React from 'react';
import image from '../assets/images/logo-el-ritual.jpg';
import LastProduct from './LastProduct'
import ProductList from './ProductList'
import ContentRow from './ContentRow'
import {Link, Route, Switch} from 'react-router-dom';
import ContentWrapper from './ContentWrapper';
import NotFound from './NotFound'


function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="http://localhost:3030/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="El Ritual"  style={{marginTop: 6 + 'rem'}}/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                    {/*<!-- Nav Item - Dashboard -->*/}
                    <li className="nav-item active" style={{marginTop: 6 + 'rem'}}>
                        <Link className="nav-link" to="/">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span> El Ritual</span></Link>
                    </li>

                    {/*<!-- Divider -->*/}
                    <hr className="sidebar-divider"/>

                    {/*<!-- Heading -->*/}
                    <div className="sidebar-heading">Actions</div>

                    {/*<!-- Nav Item - Pages -->*/}
                    <li className="nav-item">
                    <Link className="nav-link" to="/product-list">
                            <i className="fas fa-fw fa-folder"></i>
                            <span>Productos</span>
                        </Link>
                    </li>

                    {/*<!-- Nav Item - Charts -->*/}
                    <li className="nav-item">
                        <Link className="nav-link" to="/last-product">
                            <i className="fas fa-fw fa-chart-area"></i>
                            <span>Ultimo Producto</span></Link>
                    </li>

                    {/*<!-- Nav Item - Tables -->*/}
                    <li className="nav-item nav-link">
                    <Link className="nav-link" to="/panels">
                            <i className="fas fa-fw fa-table"></i>
                            <span>Paneles</span></Link>
                    </li>                

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>

        
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route exact path="/product-list">
                    <ProductList />
                </Route>
                <Route exact path="/last-product">
                    <LastProduct />
                </Route>
                <Route exact path="/panels">
                    <ContentRow />
                </Route>
                <Route component= {NotFound} />              
            </Switch>


            {/*<!-- End Microdesafio 2 -->*/}
        </React.Fragment>
    )
}
export default SideBar;
