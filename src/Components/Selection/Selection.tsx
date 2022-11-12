import React from "react";
import App from "../../App";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';




function Selection() {
    return (
        <div className="Selection">
            <div className="Account">
                <div className="Slika">
                    <Avatar src="/broken-image.jpg" />
                </div>
                <div className="Name">
                    <h6>Arman Rokni</h6>
                    <p>rokni@gmail.com</p>
                </div>
            </div>

            <div className="Search">
                <input className="Search-bar" type="text"  placeholder="Search here"  />
            </div>

            <div className="Genre">
                <p>GENRE</p>
                <div className="Container">
                    <Button className="DugmeKategorija" variant="contained" endIcon={<AddIcon />}>Action</Button>
                    <Button className="DugmeKategorija" variant="contained" endIcon={<AddIcon />}>Crime</Button>
                    <Button className="DugmeKategorija" variant="contained" endIcon={<AddIcon />}>Comedy</Button>
                    <Button className="DugmeKategorija" variant="contained" endIcon={<AddIcon />}>Adventure</Button>
                    <Button className="DugmeKategorija" variant="contained" endIcon={<AddIcon />}>Historical</Button>
                    <Button className="DugmeKategorija" variant="contained" endIcon={<AddIcon />}>Science fiction</Button>
                    <Button className="DugmeKategorija" variant="contained" endIcon={<AddIcon />}>Romance</Button>
                    <Button className="DugmeKategorija" variant="contained" endIcon={<AddIcon />}>Horror</Button>
                    <Button className="DugmeKategorija" variant="contained" endIcon={<AddIcon />}>Drama</Button>
                    <Button className="DugmeKategorija" variant="contained" endIcon={<AddIcon />}>Documentary</Button>
                </div>
            </div>
        </div>
    )
}

export default Selection