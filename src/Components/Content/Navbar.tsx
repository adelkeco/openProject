import React from "react";
import App from "../../App";
import 'bootstrap/dist/css/bootstrap.min.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import GridViewIcon from '@mui/icons-material/GridView';
import NotificationsIcon from '@mui/icons-material/Notifications';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';

function NavbarMenu(){
    return(
        <div className="NavbarMenu">
                <div className="row">
                    <div className="col-md-6">
                    <Navbar bg="#0d0d0f;" variant="#0d0d0f;">
                        <Container>
                        <Nav className="me-auto">
                            <Nav.Link href="#movies"><b>Movies</b></Nav.Link>
                            <Nav.Link href="#series"><b>Series</b></Nav.Link>
                            <Nav.Link href="#tvshows"><b>TV Shows</b></Nav.Link>
                        </Nav>
                        </Container>
                    </Navbar>
                    </div>
                    <div className="col-md-6">
                    <Navbar bg="#0d0d0f;" variant="#0d0d0f;">
                        <Container id="NavIcon">
                        <Nav className="me-auto-icon">
                            <Nav.Link href="#movies"><OnlinePredictionIcon/></Nav.Link>
                            <Nav.Link href="#series"><NotificationsIcon/></Nav.Link>
                            <Nav.Link href="#tvshows"><GridViewIcon/></Nav.Link>
                        </Nav>
                        </Container>
                    </Navbar>
                    </div>
                </div>
        </div>
    )
}

export default NavbarMenu