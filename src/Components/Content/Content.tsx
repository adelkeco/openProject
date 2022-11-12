import React from "react";
import App from "../../App";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMenu from "./Navbar";
import Trending from "./Trending";



function Content() {
    return (
        <div className="Content">
            <NavbarMenu/>
            <hr />
            <Trending/>
            
        </div>
    )
}

export default Content