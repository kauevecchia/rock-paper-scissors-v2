import { Header } from "./components/Header";
import { Play } from "./components/Play";
import { Results } from "./components/Results";
import { Footer } from "./components/Footer";
import { Modal } from "./components/Modal";
import { useState } from "react";

export function App() {
    const [openModal, setOpenModal] = useState(false)

    const [gameState, setGameState] = useState({
        playGame: true,
        playAgain: false,
        playerScore: 0,
        machineScore: 0,
        playerChoice: "",
        machineChoice: "",
        result: ""
    })


    const handleModalOpen = () => {
        setOpenModal(true)
    }

    const handleModalClose = () => {
        setOpenModal(false)
    }

    const handlePlayGame = (playerChoice) => {
        const choices = ["rock", "paper", "scissors"]
        const machineChoice = choices[Math.floor(Math.random() * choices.length)]

        let result = ""
        if (playerChoice === machineChoice) {
            result = "IT'S A TIE"
        } else {
            switch (playerChoice) {
                case "rock":
                    result = machineChoice === "scissors" ? "PLAYER WINS" : "PLAYER LOSES"
                    break
                case "paper":
                    result = machineChoice === "rock" ? "PLAYER WINS" : "PLAYER LOSES"
                    break
                case "scissors":
                    result = machineChoice === "paper" ? "PLAYER WINS" : "PLAYER LOSES"
                    break
            }
        }

        setGameState((prevState) => ({
            ...prevState,
            playGame: false,
            playAgain: true,
            playerChoice,
            machineChoice,
            result,
            playerScore: result === "PLAYER WINS" ? prevState.playerScore + 1 : prevState.playerScore,
            machineScore: result === "PLAYER LOSES" ? prevState.machineScore + 1 : prevState.machineScore
        }))
    }

    const handlePlayAgain = () => {
        setPlayGame(true)
        setPlayAgain(false)
    }
 
 
    return (
        <div className="flex items-center justify-center flex-col font-poppins min-h-screen">
            <Header />
            <main className="mt-8 flex items-center justify-center flex-col gap-6 flex-grow">
                {playGame && <Play handlePlayGame={handlePlayGame} />}
                {playAgain && <Results handlePlayAgain={handlePlayAgain} />}
            </main>
            <Modal isModalOpen={openModal}  handleCloseModal={handleModalClose} />
            <Footer handleModalOpen={handleModalOpen} />
        </div>
    )
}
