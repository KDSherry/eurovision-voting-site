import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {isMobile} from 'react-device-detect';
import NameToImport from './ImageLoader'

class VoteByName extends React.Component{
   

    returnSelectOptions(name){
        let scores = []
        scores = this.props.scores
        let scoreOptionsRemaining = []
        const handleChange = (event) => {
          
            this.props.setScore(event.target.name, event.target.value)
        }
        
        for (let i=0;i<scores.length;i++){
            
            if(scores[i].country === ""){
                scoreOptionsRemaining.push(<MenuItem key={i} value={scores[i].score} > {scores[i].score}</MenuItem>)
            }else{
                scoreOptionsRemaining.push(<MenuItem key={i} value={scores[i].score} disabled> {scores[i].score}</MenuItem>)
            }            
             
         }
        
        return(            
            <Select style={{paddingTop:"8px"}} name = {name} onChange={handleChange} defaultValue="">
                <MenuItem key="default" value=""><em><br/> </em></MenuItem>
                {scoreOptionsRemaining}
            </Select>
        )
    }

    returnCountry (name ,performer){
        let selectOptions = this.returnSelectOptions(name)

        return (
            <Grid item xs={isMobile ? 12 : 6 } key={name}>
                {/* <Paper style={{textAlign: "center", backgroundColor: "#7ca7f2"}}> */}
                <Paper style={{textAlign: "center"}}>  
                    <Grid container>
                        <Grid item xs ={2}>{NameToImport(name)}</Grid>                
                        <Grid item xs ={4} style={{paddingTop:"10px", fontSize:"20px"}}>{name}</Grid>
                        <Grid item xs ={4} style={{paddingTop:"12px", fontSize:"18px"}}>{performer}</Grid>
                        <Grid item xs ={2} >{selectOptions}</Grid>
                    </Grid>    
                </Paper>
            </Grid>
        )
    }

    positionCountries(){
        let array = this.props.votes
        if(this.props.alpha){
            array.sort(function(a, b){
                if (isMobile) {
                    return a.mobAlpha - b.mobAlpha
                }
                return a.alphabeticOrder - b.alphabeticOrder
            })
        }else{
            array.sort(function(a, b){
                if (isMobile) {
                    return a.mobvo - b.mobvo
                }
                return a.virtualOrder - b.virtualOrder
            })
        }

        let displayCountriesArray =[]
        for (let i = 0; i < array.length; i++){
            displayCountriesArray.push(this.returnCountry(array[i].country,array[i].performer, array[i].score, array[i].imgsrc))
            
        }

        return (
            <Grid container spacing={1}>
                {displayCountriesArray}
            </Grid>
        )
    }

    render(){
        return (
            <div>
                <br/>
                {this.positionCountries()}
                {isMobile? <><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></>:<></>}
            </div>    
        )
    }

}
export default VoteByName