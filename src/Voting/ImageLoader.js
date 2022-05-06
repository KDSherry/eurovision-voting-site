import React from 'react';
import Armenia from './../images/flags/Armenia.png';
import Austria from './../images/flags/Austria.png';
import Belarus from './../images/flags/Belarus.png';
import Belgium from './../images/flags/Belgium.png';
import Cyprus from './../images/flags/Cyprus.png';
import Czech_Republic from './../images/flags/Czech_Republic.png';
import Denmark from './../images/flags/Denmark.png';
import Finland from './../images/flags/Finland.png';
import France from './../images/flags/France.png';
import Germany from './../images/flags/Germany.png';
import Greece from './../images/flags/Greece.png';
import Hungary from './../images/flags/Hungary.png';
import Iceland from './../images/flags/Iceland.png';
import Ireland from './../images/flags/Ireland.png';
import Italy from './../images/flags/Italy.png';
import Latvia from './../images/flags/Latvia.png';
import Lithuania from './../images/flags/Lithuania.png';
import Malta from './../images/flags/Malta.png';
import Moldova from './../images/flags/Moldova.png';
import Norway from './../images/flags/Norway.png';
import Poland from './../images/flags/Poland.png';
import Portugal from './../images/flags/Portugal.png';
import Russia from './../images/flags/Russia.png';
import Serbia from './../images/flags/Serbia.png';
import Slovakia from './../images/flags/Slovakia.png';
import Slovenia from './../images/flags/Slovenia.png';
import Sweden from './../images/flags/Sweden.png';
import Netherlands from './../images/flags/Netherlands.png';
import Turkey from './../images/flags/Turkey.png';
import Ukraine from './../images/flags/Ukraine.png';
import UnitedKingdom from './../images/flags/UnitedKingdom.png';
import Switzerland from './../images/flags/Switzerland.png';
import Macedonia from './../images/flags/Macedonia.png';
import Bulgaria from './../images/flags/Bulgaria.png';
import Croatia from './../images/flags/Croatia.png';
import Estonia from './../images/flags/Estonia.png';
import Israel from './../images/flags/Israel.png';
import Romania from './../images/flags/Romania.png';
import Albania from './../images/flags/Albania.png';
import Montenegro from './../images/flags/Montenegro.png';
import Georgia from './../images/flags/Georgia.png';



export default function NameToImport(name){

    const flagStyle ={
        width: "40%",
        height: "auto",
        margin: "4px 4px 0px 6px"
    }

    switch(name){
        case "Armenia" : return (<img src={Armenia} alt={name}  style={flagStyle}/>)
        case "Austria" : return (<img src={Austria} alt={name}  style={flagStyle}/>)
        case "Belarus" : return (<img src={Belarus} alt={name}  style={flagStyle}/>)
        case "Belgium" : return (<img src={Belgium} alt={name}  style={flagStyle}/>)
        case "Cyprus" : return (<img src={Cyprus} alt={name}  style={flagStyle}/>)
        case "Czech Republic" : return (<img src={Czech_Republic} alt={name}  style={flagStyle}/>)
        case "Denmark" : return (<img src={Denmark} alt={name}  style={flagStyle}/>)
        case "Finland" : return (<img src={Finland} alt={name}  style={flagStyle}/>)
        case "France" : return (<img src={France} alt={name}  style={flagStyle}/>)
        case "Germany" : return (<img src={Germany} alt={name}  style={flagStyle}/>)
        case "Greece" : return (<img src={Greece} alt={name}  style={flagStyle}/>)
        case "Hungary" : return (<img src={Hungary} alt={name}  style={flagStyle}/>)
        case "Iceland" : return (<img src={Iceland} alt={name}  style={flagStyle}/>)
        case "Ireland" : return (<img src={Ireland} alt={name}  style={flagStyle}/>)
        case "Italy" : return (<img src={Italy} alt={name}  style={flagStyle}/>)
        case "Latvia" : return (<img src={Latvia} alt={name}  style={flagStyle}/>)
        case "Lithuania" : return (<img src={Lithuania} alt={name}  style={flagStyle}/>)
        case "Malta" : return (<img src={Malta} alt={name}  style={flagStyle}/>)
        case "Moldova" : return (<img src={Moldova} alt={name}  style={flagStyle}/>)
        case "Norway" : return (<img src={Norway} alt={name}  style={flagStyle}/>)
        case "Poland" : return (<img src={Poland} alt={name}  style={flagStyle}/>)
        case "Portugal" : return (<img src={Portugal} alt={name}  style={flagStyle}/>)
        case "Russia" : return (<img src={Russia} alt={name}  style={flagStyle}/>)
        case "Serbia" : return (<img src={Serbia} alt={name}  style={flagStyle}/>)
        case "Slovakia" : return (<img src={Slovakia} alt={name}  style={flagStyle}/>)
        case "Slovenia" : return (<img src={Slovenia} alt={name}  style={flagStyle}/>)
        case "Sweden" : return (<img src={Sweden} alt={name}  style={flagStyle}/>)
        case "The Netherlands" : return (<img src={Netherlands} alt={name}  style={flagStyle}/>)
        case "Turkey" : return (<img src={Turkey} alt={name}  style={flagStyle}/>)
        case "Ukraine" : return (<img src={Ukraine} alt={name}  style={flagStyle}/>)
        case "Albania" : return (<img src={Albania} alt={name}  style={flagStyle}/>)
        case "Bulgaria" : return (<img src={Bulgaria} alt={name}  style={flagStyle}/>)
        case "Croatia" : return (<img src={Croatia} alt={name}  style={flagStyle}/>)
        case "Estonia" : return (<img src={Estonia} alt={name}  style={flagStyle}/>)
        case "Israel" : return (<img src={Israel} alt={name}  style={flagStyle}/>)
        case "North Macedonia" : return (<img src={Macedonia} alt={name}  style={flagStyle}/>)
        case "Romania" : return (<img src={Romania} alt={name}  style={flagStyle}/>)
        case "Switzerland" : return (<img src={Switzerland} alt={name}  style={flagStyle}/>)
        case "United Kingdom" : return (<img src={UnitedKingdom} alt={name}  style={flagStyle}/>)
        case "Montenegro" : return (<img src={Montenegro} alt={name}  style={flagStyle}/>)
        case "Georgia" : return (<img src={Georgia} alt={name}  style={flagStyle}/>)
        default : return(<img src="" alt="" style={flagStyle}/>)
    }
}