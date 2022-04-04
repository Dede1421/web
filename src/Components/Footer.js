import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid } from "@mui/material";
import React from "react";
import "../Style.css"

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
                <div className="social">
                    <h3>FOLLOW US</h3>
                </div>                              
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