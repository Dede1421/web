import React from "react";
import NatGeoLogo from "../Images/NatGeoLogo.png";
import { Grid, Link } from "@mui/material";
import "../Style.css"

const Header = () => {
    return (
        <header>
            <Grid container justifyContent="space-between" alignItems="center" style={{padding: "15px"}}>
                <Link href="#">
                    <img src={NatGeoLogo} alt="" style={{height: "80px"}}></img>
                </Link>
                    <ul className="nav">
                        <li>PROGRAMACIÓN TV</li>
                        <li>CORONAVIRUS</li>
                        <li>FOTO DEL DÍA</li>
                    </ul>
            </Grid>
           
        </header>
    )
}

export default Header