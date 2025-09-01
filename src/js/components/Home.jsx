import React from 'react'

function Home(props){
    return(<div className="bigCounter">
        <div className="reloj">⏰</div>
        <div className="digito6">0</div>
        <div className="digito5">0</div>
        <div className="digito4">0</div>
        <div className="digito3">0</div>
        <div className="digito2">0</div>
        <div className="digito1">{props.seconds % 10}</div>
    </div>);
}



export default Home