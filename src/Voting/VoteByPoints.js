import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import NameToImport from './ImageLoader'

class VoteByPoints extends React.Component{
    
    returnSelectCountries(score){
        let countries = []
        let array = this.props.votes
        let scoreArray=this.props.scores
        
        

        const handleChange = (event) => {
            this.props.setScore(event.target.value, Number(event.target.name))
        }

        for (let i=0;i<array.length;i++){
            if(scoreArray.includes(array[i].country)){
                countries.push(
                    <MenuItem key={i} value={array[i].country} disabled>
                        <Grid container>
                            <Grid item xs={2}>
                                {NameToImport(array[i].country)}
                            </Grid>
                            <Grid item xs={6}>
                                {array[i].country}
                            </Grid>
                        </Grid>
                     
                    </MenuItem>
                )
            }else{
                countries.push(
                    <MenuItem key={i} value={array[i].country} >
                        <Grid container>
                            <Grid item xs={2}>
                                {NameToImport(array[i].country)}
                            </Grid>
                            <Grid item xs={6}>
                                {array[i].country}
                            </Grid>
                        </Grid>
                     
                    </MenuItem>
                )        
            }
        }
        return(            
            <Select style={{paddingTop:"8px"}}  name={score} onChange={handleChange} defaultValue="">
                <MenuItem key="default" value=""><em><br/> </em></MenuItem>
                {countries}
            </Select>
        )
    }

    returnIndividualPoint (score){
        return (
            <Grid item xs={12} key={score}>
                <Paper style={{textAlign: "center"}}>  
                    <Grid container maxwidth='sm'>
                        {/* <Grid item xs ={2}>{NameToImport(name)}</Grid>                 */}
                        
                        <Grid item xs ={3} style={{paddingTop:"10px", fontSize:"20px"}}>{score}</Grid>
                        <Grid item xs ={9} style={{paddingTop:"12px", fontSize:"18px"}}>{this.returnSelectCountries(score.toString())}</Grid>
                        
                        {/* <Grid item xs ={2} style={{paddingTop:"10px", fontSize:"20px"}}>{score}</Grid> */}
                        {/* <Grid item xs ={2} >{this.returnSelectOptions(name)}</Grid> */}
                    </Grid>    
                </Paper>
            </Grid>
        )
    }

    byPoints(){
        let points = this.props.scores
        let byPointsObject = []
        for (let i =0; i < points.length; i++){
            byPointsObject.push(this.returnIndividualPoint(points[i].score, points[i].name))
        }

        return(
            <Grid container spacing={2}>
                {byPointsObject}
            </Grid>
        )
    }

    render(){
        return (
            <div>
                <br/>
                {this.byPoints()}
            </div>    
        )
    }

}
export default VoteByPoints