import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
// import { makeStyles } from '@material-ui/core/styles';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import VoteByName from './VoteByName'
// import VoteByPoints from './VoteByPoints'
import euro from '../images/BACKDROP.jpg'

import Title from '../images/Eurovision_generic_white.png'
import VotingConfirmation from './VotingConfirmation'
import api from '../api'

class VotingPage extends React.Component{
    constructor (props){
        super(props)
        this.state = {
            buttonChoice : 1,
            votesSubmitted:false,
            scores:[
                {"score" :1, "country":""},
                {"score" :2, "country":""},
                {"score" :3, "country":""},
                {"score" :4, "country":""},
                {"score" :5, "country":""},
                {"score" :6, "country":""},
                {"score" :7, "country":""},
                {"score" :8, "country":""},
                {"score" :10, "country":""},
                {"score" :12, "country":""}
            ],
            votes:[
                {"country":"Belgium" , "virtualOrder": 15 ,"alphabeticOrder": 7 ,"performer": "Amy Fox"},
                {"country":"Hungary", "virtualOrder": 16 ,"alphabeticOrder": 23 ,"performer": "Dominic"},
                {"country": "Armenia", "virtualOrder": 1 ,"alphabeticOrder": 1 ,"performer": "Helen Stone"},
                {"country":"Germany", "virtualOrder": 17 ,"alphabeticOrder": 19 ,"performer": "Kevin Hand"},
                {"country":"Malta", "virtualOrder": 3 ,"alphabeticOrder": 6 ,"performer": "Sam Baker"},
                {"country":"Czech Republic" , "virtualOrder": 18 ,"alphabeticOrder": 11 ,"performer": "Adam"},
                {"country":"Italy", "virtualOrder": 4 ,"alphabeticOrder": 2 ,"performer": "Abbie"},
                {"country":"Slovenia", "virtualOrder": 19 ,"alphabeticOrder": 20 ,"performer": "Kieran Sherry"},
                {"country":"Greece", "virtualOrder": 5 ,"alphabeticOrder": 21 ,"performer": "Alice & Adam"},
                {"country":"Ukraine", "virtualOrder": 20 ,"alphabeticOrder": 28 ,"performer": "Helen & Steve"},
                {"country":"The Netherlands", "virtualOrder": 6 ,"alphabeticOrder": 24 ,"performer": "Keri"},
                // {"country":"Lithuania", "virtualOrder": 12 ,"alphabeticOrder": 4 ,"performer": "Simon & Rosie"},
                {"country":"Ireland", "virtualOrder": 7 ,"alphabeticOrder": 27 ,"performer": "Bethany Pearson"},
                {"country":"Finland", "virtualOrder": 12 ,"alphabeticOrder": 15 ,"performer": "Alice Moore"},
                {"country":"Portugal", "virtualOrder": 8 ,"alphabeticOrder": 14 ,"performer": "Alex Presland"},
                {"country":"Latvia", "virtualOrder": 22 ,"alphabeticOrder": 4 ,"performer": "Sarah Lewney"},
                {"country":"Moldova", "virtualOrder": 10 ,"alphabeticOrder": 8 ,"performer": "Katie & Sam"},
                {"country":"Belarus" , "virtualOrder": 2 ,"alphabeticOrder": 5 ,"performer": "Sarah Dabbs"},
                {"country":"Austria" , "virtualOrder": 21 ,"alphabeticOrder": 3 ,"performer": "Sarah & Andy"},
                {"country":"France", "virtualOrder": 24 ,"alphabeticOrder": 17 ,"performer": "John Conliffe"},
                {"country":"Russia", "virtualOrder": 11 ,"alphabeticOrder": 16 ,"performer": "Dave Powell"},
                {"country":"Serbia", "virtualOrder": 25 ,"alphabeticOrder": 18 ,"performer": "Si Ro O & James"},
                // {"country":"Slovakia", "virtualOrder": 23 ,"alphabeticOrder": 20 ,"performer": "Sarah Baldwin"},
                {"country":"Turkey", "virtualOrder": 26 ,"alphabeticOrder": 26 ,"performer": "Emma Plant"},
                {"country":"Poland", "virtualOrder": 13 ,"alphabeticOrder": 12 ,"performer": "Emily Banham"},
                {"country":"Norway", "virtualOrder": 27 ,"alphabeticOrder": 10 ,"performer": "Becky & Will"},
                {"country":"Sweden", "virtualOrder": 14 ,"alphabeticOrder": 22 ,"performer": "Dan Gibbons"},
                {"country":"Iceland", "virtualOrder": 9 ,"alphabeticOrder": 25 ,"performer": "Malcolm"},
                {"country":"Cyprus"  , "virtualOrder": 23 ,"alphabeticOrder": 9 ,"performer": "Sam Turner"},
                {"country":"Denmark", "virtualOrder": 28 ,"alphabeticOrder": 13 ,"performer": "Mikey & Lauren"}
            ],
            voteConfirmation:false,
            identifier:"",        
            one:"",
            two:"",
            three:"",
            four:"",
            five:"",
            six:"",
            seven:"",
            eight:"",
            ten:"",
            twelve:""
   
            
        }
        // buttonChoice 1 = by country by order played (default) 
        // buttonChoice 2 = by country alphabetical 
        // buttonChoice 3 = by score 

    }

    setScore = (name, score) =>{
        let newscores = this.state.scores
        
        for (let i=0; i< newscores.length; i++){
            if (newscores[i].country === name){
                newscores[i].country = ""
            }
            if (newscores[i].score === score){
                newscores[i].country = name
            }
        }
        this.setState({scores : newscores})
    }

    orderClick = () => {
        this.setState({buttonChoice:1})
    }
    alphaClick = () => {
        this.setState({buttonChoice:2})
    }
    scoreClick = () => {
        this.setState({buttonChoice:3})
    }
    setVotingConfirmationTrue = () =>{
        this.setPost();
        this.setState({voteConfirmation:true})
    }
    setVotingConfirmationFalse = () =>{
        this.setState({voteConfirmation:false})
    }
    changeIdentifier = (e) => {
        this.setState({identifier:e.target.value})
    };
    
    setPost(){
        let scores = this.state.scores
        for (let i =0; i< scores.length; i++)
        {
            switch(scores[i].score){
                case 1 : this.setState({one:scores[i].country});break;
                case 2 : this.setState({two:scores[i].country});break;
                case 3 : this.setState({three:scores[i].country});break;
                case 4 : this.setState({four:scores[i].country});break;
                case 5 : this.setState({five:scores[i].country});break;
                case 6 : this.setState({six:scores[i].country});break;
                case 7 : this.setState({seven:scores[i].country});break;
                case 8 : this.setState({eight:scores[i].country});break;
                case 10 : this.setState({ten:scores[i].country});break;
                case 12 : this.setState({twelve:scores[i].country});break;
                default: console.log("error")
            }
        }
    }
    toggleVotes = ()=> {
        this.setState({votesSubmitted:true})
    }

    //async
    handleVote = async () => {
        
        // this.setPost()
        //let scores = this.state.scores
        //let payload={}
        // for (let i =0; i< scores.length; i++)
        // {
        //     switch(scores[i].score){
        //         case 1 : this.setState({one:scores[i].country});break;
        //         case 2 : this.setState({two:scores[i].country});break;
        //         case 3 : this.setState({three:scores[i].country});break;
        //         case 4 : this.setState({four:scores[i].country});break;
        //         case 5 : this.setState({five:scores[i].country});break;
        //         case 6 : this.setState({six:scores[i].country});break;
        //         case 7 : this.setState({seven:scores[i].country});break;
        //         case 8 : this.setState({eight:scores[i].country});break;
        //         case 10 : this.setState({ten:scores[i].country});break;
        //         case 12 : this.setState({twelve:scores[i].country});break;
        //         default: console.log("error")
        //     }
            
        // }
        let payload = {
            "identifier": this.state.identifier,
            "1": this.state.one,
            "2":this.state.two,
            "3":this.state.three,
            "4":this.state.four,
            "5":this.state.five,
            "6":this.state.six,
            "7":this.state.seven,
            "8":this.state.eight,
            "10":this.state.ten,
            "12":this.state.twelve,
        }  
        
        setTimeout(async function(){
            await api.insertVote(payload).then(res=> {
                window.alert('Vote Submitted Successfully!')
                
            })
            
        },1000)
        this.toggleVotes()
        this.setVotingConfirmationFalse()
    }
    
    selectPage(x){
        switch(x){
            // case 3: return(<VoteByPoints votes={this.state.votes} scores={this.state.scores} setScore={this.setScore}/>)
            case 2: return(<VoteByName alpha={true} votes={this.state.votes} scores={this.state.scores} setScore={this.setScore}/>)
            case 1: return(<VoteByName alpha={false}  votes={this.state.votes} scores={this.state.scores} setScore={this.setScore}/>)
            default:  return(<VoteByName alpha={false}  votes={this.state.votes} scores={this.state.scores} setScore={this.setScore}/>)
        }
    }
    submitVotesButton = () =>{
        console.log(this.state.scores)
        // this.setVotingConfirmationTrue()
    }
   
    render(){
        const fabStyle = {
            margin: 40,
            top: 'auto',
            right: 20,
            bottom: 20,
            left: 'auto',
            position: 'fixed',
            height: 120,
            width:120,
            padding: 10,
        }
        if(this.state.votesSubmitted === false){
        return (
            <div style={{backgroundColor:'#17036e', backgroundImage:`url("${euro}")` ,position: "fixed", top: 0, left: 0, bottom: 0,right: 0, overflow: "auto", backgroundSize: 'cover'}}>
            {/* <div style={{backgroundImage:'#17036e'}}> */}
            <Fab style={fabStyle} color='primary' size = 'large' onClick={this.setVotingConfirmationTrue}>
                <Grid container>
                    <Grid item xs={12}><HowToVoteIcon/></Grid>
                    <Grid item xs={12}>Submit Votes</Grid>
                </Grid>
            </Fab>
            <VotingConfirmation voteConfirmation={this.state.voteConfirmation} handleVote={this.handleVote} closeSubmit={this.setVotingConfirmationFalse} changeId={this.changeIdentifier} votes={this.state.scores}/>
            <Container component='main' maxWidth='lg' >
                <CssBaseline />
                {/* <Paper elevation={0} >
                    <img src={VotingBackground}/>
                    test
                    
                </Paper> */}
                <br/>
                <Container maxWidth='sm'>
                    <img src={Title} alt="" style={{marginLeft: "140px",width:'250px', height:'79px'}}/>
                </Container>
                <br/>
                <ButtonGroup size="small" color="primary" variant="contained" aria-label="large outlined primary button group" fullWidth={true}>
                    <Button onClick={this.orderClick}>Vote by Order Performed</Button>
                    <Button onClick={this.alphaClick}>Vote Alphabetically</Button>
                    {/* <Button onClick={this.scoreClick}>Vote by Score</Button> */}
                </ButtonGroup>
                {this.selectPage(this.state.buttonChoice)}
                              
            </Container>
            
            </div> 
        )}else{
            return(
                <div style={{backgroundColor:'#17036e', backgroundImage:`url("${euro}")` ,position: "fixed", top: 0, left: 0, bottom: 0,right: 0, overflow: "auto", backgroundSize: 'cover'}}>
                     <Container component='main' maxWidth='lg' >
                <CssBaseline />
                {/* <Paper elevation={0} >
                    <img src={VotingBackground}/>
                    test
                    
                </Paper> */}
                <br/>
                <Container maxWidth='sm'>
                    <img src={Title} alt="" style={{marginLeft: "140px",width:'250px', height:'79px'}}/>
                    <h2 style={{color:"white"}}>Votes Submitted</h2>
                    <h3 style={{color:"white"}}>Note your votes for later!</h3>
                    <h3 style={{color:"white"}}>8 Points - {this.state.eight}</h3>
                    <h3 style={{color:"white"}}>10 Points - {this.state.ten}</h3>
                    <h3 style={{color:"white"}}>12 Points - {this.state.twelve}</h3>    
                </Container>
                
                </Container>
                </div>
            )
        }
    }

}

export default VotingPage