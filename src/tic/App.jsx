import React from 'react'
import Square from './Square'
import { Pattern } from './Pattern'
import './style.css'
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
    const [place,setPlace]=useState(["","","","","","","","",""])
    const[player,setPlayer]=useState("*")
    const[resut,setResult]=useState({winner:"NONE",state:"NONE"})
    const[nati,setNati]=useState("*")
    const[x,setX]=useState(null)
    const[b,setB]=useState(null)
    

    useEffect(()=>{
        winni()
        tiei()
        if(player=="*"){setPlayer("^")}
        else setPlayer("*")
        if(player=="*")setNati("^")
        else setNati("*")

        
    },[place])

    useEffect(()=>{
        if(resut.state != "NONE"){
            setX(<div id='mel'>Game Finished. <br /> {resut.winner} won!</div>)
            setB(<button onClick={restart2}>Restart</button>)
            // alert(`Game Finished. ${resut.winner} won!`)
            restart()
        }

    },[resut])

    const click=(i)=>{
        setPlace(place.map((val,inx)=>{
        if(inx==i && val==""){
            return player
        }
    return val}))

    }
    const winni=()=>{
        Pattern.forEach((i)=>{
            let firstWin=place[i[0]]
            if(firstWin=="")return
            let foundWin=true
            i.forEach((inx)=>{
            if(place[inx] !=firstWin){
                foundWin=false
                }
            })
            if(foundWin){
                setResult({winner:player,state:"WON"})
            }
        })

    }
    const tiei=()=>{
        let filled=true
        place.forEach((inx)=>{
            if(inx=="")
            {filled=false}
        })
        if(filled){
            setResult({winner:"NO ONE",state:"NONE!"})
        }


    }
    const restart=()=>{
        setPlace(["","","","","","","","",""])
        setPlayer("*")   
    }
    const restart2=()=>{
        setPlace(["","","","","","","","",""])
        setPlayer("*")  
        setB(null)
        setX(null)

    }
  return (
    <div className='app'>
        <div className='all'>
            <h1>Tic Toc Toe By Mel</h1>
            {x}{b}
            <div className='row'>
                <Square val={place[0]} click={()=>click(0)}></Square>
                <Square val={place[1]} click={()=>click(1)}></Square>
                <Square val={place[2]} click={()=>click(2)}></Square>
            </div>
            <div className='row'>
                <Square val={place[3]} click={()=>click(3)}></Square>
                <Square val={place[4]} click={()=>click(4)}></Square>
                <Square val={place[5]} click={()=>click(5)}></Square>
            </div>
            <div className='row'>
                <Square val={place[6]} click={()=>click(6)}></Square>
                <Square val={place[7]} click={()=>click(7)}></Square>
                <Square val={place[8]} click={()=>click(8)}></Square>
            </div>
            <span>Turn:{nati}</span>
           
        </div>
        
    </div>
  )
}

export default App