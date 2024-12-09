
import { useRef, useState } from 'react'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'
import './TicTacToe.css'

let writeData = ["", "", "", "", "", "", "", "", "", "", "", "",]

const TicTacToe = () => {

    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false)
    let titleRef = useRef(null)

    let box1 = useRef(null)
    let box2 = useRef(null)
    let box3 = useRef(null)
    let box4 = useRef(null)
    let box5 = useRef(null)
    let box6 = useRef(null)
    let box7 = useRef(null)
    let box8 = useRef(null)
    let box9 = useRef(null)

    const box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9]

    const write = (e, num) => {

        if (!lock) {
            if (count % 2 == 0) {
                e.target.innerHTML = `<img src = ${cross_icon}>`
                writeData[num] = "x"
            } else {
                e.target.innerHTML = `<img src = ${circle_icon}>`
                writeData[num] = "o"
            }

            setCount(++count)

            if (writeData[0] === writeData[1] && writeData[1] === writeData[2] && writeData[2] !== "") {
                console.log(writeData[count])
                checkWin(writeData[2])
            }
            else if (writeData[3] === writeData[4] && writeData[4] === writeData[5] && writeData[5] !== "") {

                checkWin(writeData[2])
            } else if (writeData[6] === writeData[7] && writeData[7] === writeData[8] && writeData[8] !== "") {

                checkWin(writeData[8])
            } else if (writeData[0] === writeData[3] && writeData[3] === writeData[6] && writeData[6] !== "") {

                checkWin(writeData[6])
            } else if (writeData[1] === writeData[4] && writeData[4] === writeData[7] && writeData[7] !== "") {

                checkWin(writeData[7])
            } else if (writeData[2] === writeData[5] && writeData[5] === writeData[8] && writeData[8] !== "") {

                checkWin(writeData[8])
            } else if (writeData[0] === writeData[4] && writeData[4] === writeData[8] && writeData[8] !== "") {

                checkWin(writeData[8])
            } else if (writeData[2] === writeData[4] && writeData[4] === writeData[6] && writeData[6] !== "") {

                checkWin(writeData[6])
            }
        }

    }

    const checkWin = (win) => {
        setLock(true)
        if (win === "x") {
            console.log("cross")
            titleRef.current.innerHTML = `Congradulations: <img src = ${cross_icon}> won the game`
        } else {
            console.log("circle")
            titleRef.current.innerHTML = `Congradulations: <img src = ${circle_icon}> won the game`

        }
    }

    const reset = () => {
        
        setLock(false)
        setCount(0)
        writeData = ["", "", "", "", "", "", "", "", "", "", "", "",]
        titleRef.current.innerHTML = `Tic Tac Toe Game in <span>React</span>`

        box_array.map((boxElm) => {
            boxElm.current.innerHTML = ""
        })

    }

    return (
        <div>
            <div className="container">
                <h2 ref={titleRef} className="title">
                    Tic Tac Toe Game in <span>React</span>
                </h2>
                <div className="board">

                    <div className="row1-boxes">
                        <div ref={box1} className="box" onClick={(e) => { write(e, 0) }}></div>
                        <div ref={box2} className="box" onClick={(e) => { write(e, 1) }}></div>
                        <div ref={box3} className="box" onClick={(e) => { write(e, 2) }}></div>
                    </div>

                    <div className="row2-boxes">
                        <div ref={box4} className="box" onClick={(e) => { write(e, 3) }}></div>
                        <div ref={box5} className="box" onClick={(e) => { write(e, 4) }}></div>
                        <div ref={box6} className="box" onClick={(e) => { write(e, 5) }}></div>
                    </div>
                    <div className="row3-boxs">
                        <div ref={box7} className="box" onClick={(e) => { write(e, 6) }}></div>
                        <div ref={box8} className="box" onClick={(e) => { write(e, 7) }}></div>
                        <div ref={box9} className="box" onClick={(e) => { write(e, 8) }}></div>
                    </div>

                </div>
                <button className="reset" onClick={() => reset()}>Reset</button>
            </div>

        </div>
    )
}

export default TicTacToe