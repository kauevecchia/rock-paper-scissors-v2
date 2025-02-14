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

    const [playGame, setPlayGame] = useState(true)
    const [playAgain, setPlayAgain] = useState(false)

    const handlePlayGame = () => {
        setPlayGame(false)
        setPlayAgain(true)
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
