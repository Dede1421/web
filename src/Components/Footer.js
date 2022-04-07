import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Link } from "@mui/material";
import React from "react";
import "../Style.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
    const [open, setOpen] = React.useState(false)

    const handlerOpen = (event) => {
        setOpen(true)
        event.preventDefault()
    }

    const handlerClose = () => {
        setOpen(false)
    }

    return (
        <footer style={{ padding: "50px"}}>
            <Grid container justifyContent="space-between">
               <form onSubmit={handlerOpen}>
                    <div>
                        <h3 style={{ textAlign: "left"}}>MORE INFORMATION</h3>
                        <input type="email" placeholder="E-MAIL" required/>
                        <button 
                            className="btn" 
                            type="submit"
                            >
                                NEWSLETTER
                        </button>
                    </div>
                </form>     
                <Grid>
                    <h3>FOLLOW US</h3>
                    <div>
                        <Link style={{ color: "#000"}} href="https://es-la.facebook.com/natgeo/" target="_blank">
                            <FacebookIcon className="FbSocial Fb"></FacebookIcon>
                        </Link>
                        <Link style={{ color: "#000"}} href="https://www.instagram.com/natgeo/" target="_blank">
                            <InstagramIcon className="FbSocial Instagram"></InstagramIcon>
                        </Link>
                        <Link style={{ color: "#000"}} href="https://bit.ly/3735eaP" target="_blank">
                            <TwitterIcon className="FbSocial"></TwitterIcon>
                        </Link>                                           
                    </div>                    
                </Grid>                              
            </Grid>
            <NewsletterDialog open={open} handlerClose={handlerClose}/>           
        </footer>
    )
}

const NewsletterDialog = ({open, handlerClose}) => {
    
    return (
        <Dialog open={open}>
            <DialogTitle>
                Suscription
            </DialogTitle>
            <DialogContent>
                Thanks for your suscription. You're Welcome to our Newsletter
            </DialogContent>
            <DialogActions style={{padding: "20px 24px"}}>
                <Button 
                    className="btn"
                    type="submit"
                    onClick={handlerClose}
                    style={{ backgroundColor: "#333", color: "#fff"}}>
                        GOT IT
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Footer