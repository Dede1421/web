import React from "react";
import NatGeoLogo from "../Images/NatGeoLogo.png"
import { Grid, Link } from "@mui/material";

const Header = () => {
    return (
        <header>
            <Grid container justifyContent="space-between">
                <Link href="#">
                    <img src={NatGeoLogo} alt="" style={{height: "80px"}}></img>
                </Link>
                    <ul style={{}}>
                        <li>PROGRAMACIÓN TV</li>
                        <li>CORONAVIRUS</li>
                        <li>FOTO DEL DÍA</li>
                    </ul>
            </Grid>
           
        </header>
    )
}

export default Header