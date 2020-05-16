import React from 'react';
 import Container from '@material-ui/core/Container'
 import Button from '@material-ui/core/Button'
// import Card from '@material-ui/core/Card'
import CssBaseline from '@material-ui/core/CssBaseline';
import euro from '../images/TITLE_CARD.jpg'

class SplashScreen extends React.Component{

    render(){
        return (
             <div style={{backgroundImage:`url("${euro}")`, backgroundColor:'#17036e' ,position: "fixed", top: 0, left: 0, bottom: 0,right: 0, overflow: "auto", backgroundSize: 'cover'}}>
            <Container component='main' maxWidth='xs' fixed >
            <CssBaseline />
                <Button variant="contained" color="primary" size= "medium" style={{paddingLeft:"100px",paddingRight:"100px" ,position:"absolute", marginLeft:"78px", marginTop:"883px" }} href="/vote">Vote</Button>
           </Container>
            </div>
        )
    }

}

export default SplashScreen