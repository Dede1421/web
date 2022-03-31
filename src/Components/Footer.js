import { Button, Grid } from "@mui/material";
import React from "react";
import "../Style.css"

const Footer = () => {
    return (
        <footer style={{ padding: "50px"}}>
            <Grid container justifyContent="space-between">
               <form>
                    <div>
                        <h3 style={{ textAlign: "left"}}>MAS INFORMACIÓN</h3>
                        <input type="email" placeholder="E-MAIL"/>
                        <button className="btn" type="submit">NEWSLETTER</button>
                    </div>
                </form>     
                <div className="social">
                    <h3>SEGUIR</h3>
                </div>                              
            </Grid>           
        </footer>
    )
}

export default Footer