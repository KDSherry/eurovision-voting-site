import React from 'react';
import api from '../api'

class Results extends React.Component{
    results = [];
    getAllVotes = async () => {
        setTimeout(async function(){
            await api.getAllVotes().then(res=> {
                 console.log(res)
            })
            
        },1000)
    }
    render(){
        return (
            <div>
                {this.results}
            </div>
        )
    }

}

export default Results