import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/images/logo-el-ritual.jpg";

function SideBar() {
    return (
        <ul
            className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
            id="accordionSidebar"
            // style={{listStyle: 'none', textDecoration: 'none', width: 20 + '%', 
            // height: 100 + '%vheight'}}
        >
            {/*<!-- Sidebar - Brand -->*/}
            <Link
                className="sidebar-brand d-flex align-items-center justify-content-center"
                to="/"
            >
                <div className="sidebar-brand-icon">
                    <img className="w-100" 
                    src={image} 
                    style={{marginTop: 8 + 'rem'}}
                    alt="El Ritual" />
                </div>
            </Link>

            {/*<!-- Divider -->*/}
            <hr className="sidebar-divider my-0" />

            {/*<!-- Nav Item - Dashboard -->*/}
            <li className="nav-item active"
            // style={{marginBottom: 2 + 'rem'}}
            style={{marginTop: 8 + 'rem'}}
            >
                <Link className="nav-link" to="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard - El Ritual</span>
                </Link>
            </li>

            {/*<!-- Divider -->*/}
            <hr className="sidebar-divider" />

            {/*<!-- Heading -->*/}
            <div className="sidebar-heading">Actions</div>

            {/*<!-- Nav Item - Pages -->*/}
            <li className="nav-item"
            // style={{marginTop: 1 + 'rem', padding: 2 + 'rem'}}
            >
                <Link className="nav-link collapsed" to="/last-movie">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Productos</span>
                </Link>
            </li>

            {/*<!-- Nav Item - Charts -->*/}
            <li className="nav-item"
            
            >
                <Link className="nav-link" to="/charts">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Usuarios</span>
                </Link>
            </li>

            {/* <!-- Nav Item - Tables -->
            <li className="nav-item">
                <Link className="nav-link" to="/genres">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Genres</span>
                </Link>
            </li> */}

            {/*<!-- Divider -->*/}
            <hr className="sidebar-divider d-none d-md-block" />
        </ul>
    );
}
export default SideBar;
