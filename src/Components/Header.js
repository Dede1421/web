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
                        <li>TV PROGRAMMING</li>
                        <li>COVID-19</li>
                        <li>PICTURE OF THE DAY</li>
                    </ul>
            </Grid>
           
        </header>
    )
}

export default Header