import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';

class VotingConfirmation extends React.Component{
    constructor (props){
        super(props)
        this.state = {
            disabledSubmit:true
        }
    }

     

    render(){

        function havetheyVoted(votes){
            let hasVoted=true
            for(let i=0; i<votes.length; i++){
                if(votes[i].country === ""){
                    hasVoted = false
                }
            }
            return hasVoted
        }
        function getDialogueContent(voteprops,closeSubmit,changeId, handleVote){
            let hasVoted 
            hasVoted = havetheyVoted(voteprops)
            
            if(hasVoted){
                return(
                    <div>
                    <DialogTitle id="alert-dialog-title">{"Are these the votes you wish to submit?"}</DialogTitle>
                        <DialogContent>
                        <Grid container>
                            <Grid item xs={12}>
                            
                            <TextField 
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Participant Code - If you are a spectator use: SPEC"
                                fullWidth
                                type="email"
                            onChange = {changeId}
                            />
                            </Grid>
                        </Grid>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={closeSubmit} color="primary">
                            No take me back
                            </Button>
                            <Button onClick={handleVote} color="primary">
                            Submit!
                            </Button>
                        </DialogActions>
                        </div>
                )
            }else{
                return (
                    <div>
                        <DialogTitle id="alert-dialog-title">{"You still have votes to make!"}</DialogTitle>
                        <DialogActions>
                        <Button onClick={closeSubmit} color="primary">
                            Close
                        </Button>
                        </DialogActions>
                    </div>
                )
            }
        }
        return(
            <div>
                <Dialog
                    open={this.props.voteConfirmation}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    maxWidth="md"
                    fullWidth={true}

                >
                    {getDialogueContent(this.props.votes,this.props.closeSubmit,this.props.changeId,this.props.handleVote)}
                   
                </Dialog>
            </div>
        )
    }
}
export default VotingConfirmation