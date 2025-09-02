import React from 'react'

function Home(props){
    const seconds = props.seconds;

    return(<div className="bigCounter">
        <div className="reloj">⏰</div>
        <div className="digito6">{Math.floor(seconds / 100000) % 10}</div>
        <div className="digito5">{Math.floor(seconds / 10000) % 10}</div>
        <div className="digito4">{Math.floor(seconds / 1000) % 10}</div>
        <div className="digito3">{Math.floor(seconds / 100) % 10}</div>
        <div className="digito2">{Math.floor(seconds / 10) % 10}</div>
        <div className="digito1">{seconds % 10}</div>
    </div>);
}

export default Home


