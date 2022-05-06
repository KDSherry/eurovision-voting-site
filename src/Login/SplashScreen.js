import React from 'react';
 import Container from '@material-ui/core/Container'
 import Button from '@material-ui/core/Button'
// import Card from '@material-ui/core/Card'
import CssBaseline from '@material-ui/core/CssBaseline';
import euro from '../images/TITLE_CARD_2022.png'

class SplashScreen extends React.Component{

    render(){
        return (
            <div style={{
                backgroundImage:`url("${euro}")`,
                backgroundColor:'#17036e' ,
                position: "fixed",
                width: "100%",
                height:"100%",
                backgroundSize: 'cover',
                backgroundPosition: "center center"
            }}>
            <Container component='main' maxWidth='xs' fixed style={{justifyContent: "center"}}>
            <CssBaseline />
                <Button variant="contained" color="primary" size= "medium" href="/vote" style={{left:"47%"}}>Vote</Button>
           </Container>
            </div>
        )
    }

}

export default SplashScreen